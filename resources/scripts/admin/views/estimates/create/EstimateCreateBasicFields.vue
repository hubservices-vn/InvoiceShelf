<template>
  <CategoryModal />
  <div class="md:grid-cols-12 grid-cols-1 md:gap-x-6 mt-6 mb-8 grid gap-y-5">
    <BaseCustomerSelectPopup
      v-model="estimateStore.newEstimate.customer"
      :valid="v.customer_id"
      :content-loading="isLoading"
      type="estimate"
      class="col-span-5 pr-0"
    />

    <BaseInputGrid class="col-span-7">
      <BaseInputGroup
        :label="$t('reports.estimates.estimate_date')"
        :content-loading="isLoading"
        required
        :error="v.estimate_date.$error && v.estimate_date.$errors[0].$message"
      >
        <BaseDatePicker
          v-model="estimateStore.newEstimate.estimate_date"
          :content-loading="isLoading"
          :calendar-button="true"
          calendar-button-icon="calendar"
        />
      </BaseInputGroup>

      <BaseInputGroup
        :label="$t('estimates.expiry_date')"
        :content-loading="isLoading"
      >
        <BaseDatePicker
          v-model="estimateStore.newEstimate.expiry_date"
          :content-loading="isLoading"
          :calendar-button="true"
          calendar-button-icon="calendar"
        />
      </BaseInputGroup>

      <BaseInputGroup
        :label="$t('estimates.estimate_number')"
        :content-loading="isLoading"
        required
        :error="
          v.estimate_number.$error && v.estimate_number.$errors[0].$message
        "
      >
        <BaseInput
          v-model="estimateStore.newEstimate.estimate_number"
          :content-loading="isLoading"
        >
        </BaseInput>
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
              v-model="estimateStore.newEstimate.category_id"
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
      <!-- <BaseInputGroup
        :label="$t('estimates.ref_number')"
        :content-loading="isLoading"
        :error="
          v.reference_number.$error && v.reference_number.$errors[0].$message
        "
      >
        <BaseInput
          v-model="estimateStore.newEstimate.reference_number"
          :content-loading="isLoading"
          @input="v.reference_number.$touch()"
        >
          <template #left="slotProps">
            <BaseIcon name="HashtagIcon" :class="slotProps.class" />
          </template>
        </BaseInput>
      </BaseInputGroup> -->
      <ExchangeRateConverter
        :store="estimateStore"
        store-prop="newEstimate"
        :v="v"
        :is-loading="isLoading"
        :is-edit="isEdit"
        :customer-currency="estimateStore.newEstimate.currency_id"
      />
    </BaseInputGrid>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useI18n } from 'vue-i18n'
import { useEstimateStore } from '@/scripts/admin/stores/estimate'
import ExchangeRateConverter from '@/scripts/admin/components/estimate-invoice-common/ExchangeRateConverter.vue'
import CategoryModal from '@/scripts/admin/components/modal-components/CategoryModal.vue'
import { useCategoryStore } from '@/scripts/admin/stores/category'
import { useModalStore } from '@/scripts/stores/modal'

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

const estimateStore = useEstimateStore()


function openCategoryModal() {
  modalStore.openModal({
    title: t('settings.category.add_category'),
    componentName: 'CategoryModal',
    size: 'sm',
    refreshData: fetchCategories,
    data: { type: 'estimate' },
  })
}

const categories = ref([])
const categoryLoading = ref(false)
async function fetchCategories(search = undefined) {
  categoryLoading.value = true
  const res = await categoryStore.fetchCategories({ search, type: 'estimate', limit: 'all' })
  if (res.data.data.length) {
    categories.value = res.data?.data || []
  }
  categoryLoading.value = false
}

onMounted(() => {
  fetchCategories()
})
</script>
