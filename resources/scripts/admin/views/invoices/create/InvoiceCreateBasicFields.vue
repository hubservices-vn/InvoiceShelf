<template>
  <CategoryModal />
  <div class="grid grid-cols-12 gap-8 mt-6 mb-8">
    <BaseCustomerSelectPopup
      v-model="invoiceStore.newInvoice.customer"
      :valid="v.customer_id"
      :content-loading="isLoading"
      type="invoice"
      class="col-span-12 lg:col-span-5 pr-0"
    />

    <BaseInputGrid class="col-span-12 lg:col-span-7">
      <BaseInputGroup
        :label="$t('invoices.invoice_date')"
        :content-loading="isLoading"
        required
        :error="v.invoice_date.$error && v.invoice_date.$errors[0].$message"
      >
        <BaseDatePicker
          v-model="invoiceStore.newInvoice.invoice_date"
          :content-loading="isLoading"
          :calendar-button="true"
          calendar-button-icon="calendar"
        />
      </BaseInputGroup>

      <BaseInputGroup
        :label="$t('invoices.due_date')"
        :content-loading="isLoading"
      >
        <BaseDatePicker
          v-model="invoiceStore.newInvoice.due_date"
          :content-loading="isLoading"
          :calendar-button="true"
          calendar-button-icon="calendar"
        />
      </BaseInputGroup>

      <BaseInputGroup
        :label="$t('invoices.invoice_number')"
        :content-loading="isLoading"
        :error="v.invoice_number.$error && v.invoice_number.$errors[0].$message"
        required
      >
        <BaseInput
          v-model="invoiceStore.newInvoice.invoice_number"
          :content-loading="isLoading"
          @input="v.invoice_number.$touch()"
        />
      </BaseInputGroup>
      <BaseInputGroup
            :label="$t('categories.label')"
            :content-loading="isLoading"
          >
            <BaseTreeSelect
              name="parent_id"
              value-prop="id"
              label-prop="name"
              :placeholder="$t('categories.select_a_category')"
              parent-prop="parent_id"
              :options="categories"
              :content-loading="isLoading"
              :loading="categoryLoading"
              v-model="invoiceStore.newInvoice.category_id"
            >
              <template v-slot:after-list>
                <BaseSelectAction @click="openCategoryModal">
                  <BaseIcon
                    name="PlusIcon"
                    class="h-4 mr-2 -ml-2 text-center text-primary-400"
                  />
                  {{ $t('settings.category.add_new_category') }}
                </BaseSelectAction>
              </template>
            </BaseTreeSelect>
          </BaseInputGroup>
      <ExchangeRateConverter
        :store="invoiceStore"
        store-prop="newInvoice"
        :v="v"
        :is-loading="isLoading"
        :is-edit="isEdit"
        :customer-currency="invoiceStore.newInvoice.currency_id"
      />
    </BaseInputGrid>
  </div>
</template>

<script setup>
import { computed, ref, onMounted } from 'vue'
import ExchangeRateConverter from '@/scripts/admin/components/estimate-invoice-common/ExchangeRateConverter.vue'
import { useInvoiceStore } from '@/scripts/admin/stores/invoice'
import CategoryModal from '@/scripts/admin/components/modal-components/CategoryModal.vue'
import { useCategoryStore } from '@/scripts/admin/stores/category'
import { useModalStore } from '@/scripts/stores/modal'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const modalStore = useModalStore()
const categoryStore = useCategoryStore()
const props = defineProps({
  v: {
    type: Object,
    default: null,
  },
  isLoading: {
    type: Boolean,
    default: false,
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
})

const invoiceStore = useInvoiceStore()

function openCategoryModal() {
  modalStore.openModal({
    title: t('settings.category.add_category'),
    componentName: 'CategoryModal',
    size: 'sm',
    refreshData: fetchCategories,
    data: { type: 'invoice' },
  })
}

const categories = ref([])
const categoryLoading = ref(false)
async function fetchCategories(search = undefined) {
  categoryLoading.value = true
  const res = await categoryStore.fetchCategories({ search, type: 'invoice', limit: 'all' })
  if (res.data.data.length) {
    categories.value = res.data?.data || []
  }
  categoryLoading.value = false
}
onMounted(() => {
  fetchCategories()
})
</script>
