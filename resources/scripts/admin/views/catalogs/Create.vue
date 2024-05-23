<template>
  <BasePage>
    <form @submit.prevent="submitCustomerData">
      <BasePageHeader :title="pageTitle">
        <BaseBreadcrumb>
          <BaseBreadcrumbItem :title="$t('general.home')" to="dashboard" />

          <BaseBreadcrumbItem
            :title="$t('catalogs.catalog', 2)"
            to="/admin/catalogs"
          />

          <BaseBreadcrumb-item :title="pageTitle" to="#" active />
        </BaseBreadcrumb>

        <template #actions>
          <div class="flex items-center justify-end">
            <BaseButton type="submit" :loading="isSaving" :disabled="isSaving">
              <template #left="slotProps">
                <BaseIcon name="SaveIcon" :class="slotProps.class" />
              </template>
              {{
                isEdit
                  ? $t('catalogs.update_catalog')
                  : $t('catalogs.save_catalog')
              }}
            </BaseButton>
          </div>
        </template>
      </BasePageHeader>

      <BaseCard class="mt-5">
        <BaseInputGrid class="col-span-5 lg:col-span-4">
          <BaseInputGroup
            :label="$t('catalogs.display_name')"
            required
            :error="
              v$.currentCustomer.name.$error &&
              v$.currentCustomer.name.$errors[0].$message
            "
            :content-loading="isFetchingInitialData"
          >
            <BaseInput
              v-model="customerStore.currentCustomer.name"
              :content-loading="isFetchingInitialData"
              type="text"
              name="name"
              class=""
              :invalid="v$.currentCustomer.name.$error"
              @input="v$.currentCustomer.name.$touch()"
            />
          </BaseInputGroup>

          <BaseInputGroup
            :label="$t('catalogs.parent')"
            :content-loading="isFetchingInitialData"
          >
            <BaseTreeSelect
              value-prop="value"
              label-prop="name"
              :placeholder="$t('catalogs.select_parent')"
              parent-prop="parentId"
              :options="parentOptions"
              v-model="value"
            />
          </BaseInputGroup>

          <BaseInputGroup
            :error="
              v$.currentCustomer.email.$error &&
              v$.currentCustomer.email.$errors[0].$message
            "
            :content-loading="isFetchingInitialData"
            :label="$t('catalogs.type')"
          >
            <BaseMultiselect
              v-model="customerStore.currentCustomer.billing.country_id"
              value-prop="id"
              label="name"
              track-by="name"
              resolve-on-load
              searchable
              :content-loading="isFetchingInitialData"
              :options="globalStore.countries"
              :placeholder="$t('general.select_country')"
              class="w-full"
            />
          </BaseInputGroup>

          <BaseInputGroup
            :label="$t('catalogs.description')"
            :content-loading="isFetchingInitialData"
          >
            <BaseInput
              v-model.trim="customerStore.currentCustomer.phone"
              :content-loading="isFetchingInitialData"
              type="text"
              name="description"
            />
          </BaseInputGroup>

          <BaseInputGroup
            :label="$t('catalogs.image')"
            :content-loading="isFetchingInitialData"
            :error="
              v$.currentCustomer.currency_id.$error &&
              v$.currentCustomer.currency_id.$errors[0].$message
            "
            required
          >
            <BaseFileUploader
              v-model="imgFiles"
              accept="image/*"
              @change="onFileInputChange"
              @remove="onFileInputRemove"
            />
          </BaseInputGroup>
        </BaseInputGrid>
      </BaseCard>
    </form>
  </BasePage>
</template>

<script setup>
import { useCompanyStore } from '@/scripts/admin/stores/company'
import { useCustomerStore } from '@/scripts/admin/stores/customer'
import { useGlobalStore } from '@/scripts/admin/stores/global'
import BaseBadge from '@/scripts/components/base/BaseBadge.vue'
import BaseTextarea from '@/scripts/components/base/BaseTextarea.vue'
import useVuelidate from '@vuelidate/core'

import {
  email,
  helpers,
  maxLength,
  minLength,
  required,
  requiredIf,
  sameAs,
  url,
} from '@vuelidate/validators'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { useRoute, useRouter } from 'vue-router'

const customerStore = useCustomerStore()
const globalStore = useGlobalStore()
const companyStore = useCompanyStore()

const customFieldValidationScope = 'customFields'

const { t } = useI18n()

const router = useRouter()
const route = useRoute()

let isFetchingInitialData = ref(false)

let active = ref(false)
const isSaving = ref(false)

const isEdit = computed(() => route.name === 'catalogs.edit')

let isLoadingContent = computed(() => customerStore.isFetchingInitialSettings)

const pageTitle = computed(() =>
  isEdit.value ? t('catalogs.edit_catalog') : t('catalogs.new_catalog'),
)

const parentOptions = [
  { name: 'Demo9', value: '9', parentId: '12' },
  { name: 'Demo10', value: '10', parentId: '3' },
  { name: 'Demo11', value: '11', parentId: '3' },
  { name: 'Demo12', value: '12', parentId: '3' },
  { name: 'Demo6', value: '6', parentId: '3' },
  { name: 'Demo7', value: '7', parentId: '3' },
  { name: 'Demo8', value: '8', parentId: '3' },
  { name: 'Afghanistan', value: '1', parentId: '' },
  { name: 'Demo2', value: '2', parentId: '' },
  { name: 'Demo3', value: '3', parentId: '1' },
  { name: 'Demo4', value: '4', parentId: '2' },
  { name: 'Demo5', value: '5', parentId: '2' },
]

const itemsFlatToLeaf = (items, idField = 'id', parentField = 'parentId') => {
  const itemObj = {}
  const leafArray = []
  items.forEach((item) => {
    const id = item[idField]
    const parentId = item[parentField]
    const node = { ...item, children: [] }

    itemObj[id] = itemObj[id]
      ? { ...node, children: itemObj[id]?.children }
      : node

    if (parentId) {
      if (itemObj[parentId]) itemObj[parentId].children.push(itemObj[id])
      else itemObj[parentId] = { children: [itemObj[id]] }
    } else {
      leafArray.push(itemObj[id])
    }
  })
  return leafArray
}

const rules = computed(() => {
  return {
    currentCustomer: {
      name: {
        required: helpers.withMessage(t('validation.required'), required),
        minLength: helpers.withMessage(
          t('validation.name_min_length', { count: 3 }),
          minLength(3),
        ),
      },
      prefix: {
        minLength: helpers.withMessage(
          t('validation.name_min_length', { count: 3 }),
          minLength(3),
        ),
      },
      currency_id: {
        required: helpers.withMessage(t('validation.required'), required),
      },

      email: {
        required: helpers.withMessage(
          t('validation.required'),
          requiredIf(customerStore.currentCustomer.enable_portal == true),
        ),
        email: helpers.withMessage(t('validation.email_incorrect'), email),
      },
      password: {
        required: helpers.withMessage(
          t('validation.required'),
          requiredIf(
            customerStore.currentCustomer.enable_portal == true &&
              !customerStore.currentCustomer.password_added,
          ),
        ),
        minLength: helpers.withMessage(
          t('validation.password_min_length', { count: 8 }),
          minLength(8),
        ),
      },
      confirm_password: {
        sameAsPassword: helpers.withMessage(
          t('validation.password_incorrect'),
          sameAs(customerStore.currentCustomer.password),
        ),
      },

      website: {
        url: helpers.withMessage(t('validation.invalid_url'), url),
      },
      billing: {
        address_street_1: {
          maxLength: helpers.withMessage(
            t('validation.address_maxlength', { count: 255 }),
            maxLength(255),
          ),
        },

        address_street_2: {
          maxLength: helpers.withMessage(
            t('validation.address_maxlength', { count: 255 }),
            maxLength(255),
          ),
        },
      },

      shipping: {
        address_street_1: {
          maxLength: helpers.withMessage(
            t('validation.address_maxlength', { count: 255 }),
            maxLength(255),
          ),
        },

        address_street_2: {
          maxLength: helpers.withMessage(
            t('validation.address_maxlength', { count: 255 }),
            maxLength(255),
          ),
        },
      },
    },
  }
})

const getCustomerPortalUrl = computed(() => {
  return `${window.location.origin}/${companyStore.selectedCompany.slug}/customer/login`
})

const v$ = useVuelidate(rules, customerStore, {
  $scope: customFieldValidationScope,
})

customerStore.resetCurrentCustomer()

customerStore.fetchCustomerInitialSettings(isEdit.value)

async function submitCustomerData() {
  v$.value.$touch()

  if (v$.value.$invalid) {
    return true
  }

  isSaving.value = true

  let data = {
    ...customerStore.currentCustomer,
  }

  let response = null

  try {
    const action = isEdit.value
      ? customerStore.updateCustomer
      : customerStore.addCustomer
    response = await action(data)
  } catch (err) {
    isSaving.value = false
    return
  }

  router.push(`/admin/customers/${response.data.data.id}/view`)
}
</script>
