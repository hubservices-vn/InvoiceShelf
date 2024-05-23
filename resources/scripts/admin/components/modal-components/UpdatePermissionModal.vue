<template>
  <BaseModal :show="modalActive" @close="closeModal">
    <div class="flex justify-between w-full">
      <div class="px-6 pt-6">
        <h6 class="font-medium text-lg text-left">
          {{ modalStore.title }}
        </h6>
        <p
          class="mt-2 text-sm leading-snug text-gray-500"
          style="max-width: 680px"
        >
          {{
            $t('settings.company_info.update_permissions_modal_desc', {
              company: companyStore.selectedCompany.name,
            })
          }}
        </p>
      </div>
    </div>
    <div class="z-0 flex justify-end p-4 bg-gray-50 border-modal-bg">
        <BaseButton
          class="mr-3 text-sm"
          variant="primary-outline"
          outline
          type="button"
          @click="closeModal"
        >
          {{ $t('general.cancel') }}
        </BaseButton>
        <BaseButton
          :loading="isUpdating"
          :disabled="isUpdating"
          @click="confirmUpdate"
          variant="primary"
          type="button"
        >
          <template #left="slotProps">
            <BaseIcon
              v-if="!isUpdating"
              name="RefreshIcon"
              :class="slotProps.class"
            />
          </template>
          {{ $t('general.update') }}
        </BaseButton>
      </div>
  </BaseModal>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { useModalStore } from '@/scripts/stores/modal'
import { computed, onMounted, ref, reactive } from 'vue'
import { useI18n } from 'vue-i18n'
import { required, minLength, helpers, sameAs } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { useCompanyStore } from '@/scripts/admin/stores/company'
import { useGlobalStore } from '@/scripts/admin/stores/global'

const companyStore = useCompanyStore()
const modalStore = useModalStore()
const globalStore = useGlobalStore()
const router = useRouter()
const { t } = useI18n()
let isUpdating = ref(false)

const formData = reactive({
  id: companyStore.selectedCompany.id,
  name: null,
})

const modalActive = computed(() => {
  return modalStore.active && modalStore.componentName === 'UpdatePermissionModal'
})

const rules = {
  formData: {
    name: {
      required: helpers.withMessage(t('validation.required'), required),
      sameAsName: helpers.withMessage(
        t('validation.company_name_not_same'),
        sameAs(companyStore.selectedCompany.name)
      ),
    },
  },
}

const v$ = useVuelidate(
  rules,
  { formData },
  {
    $scope: false,
  }
)

async function confirmUpdate() {
  isUpdating.value = true
  try {
    const res = await companyStore.updatePermissions({id: companyStore.selectedCompany.id})
    console.log(res.data.success)
    if (res.data.success) {
      closeModal()
      // router.push('/admin/dashboard')
      // await globalStore.setIsAppLoaded(false)
      // await globalStore.bootstrap()
    }
    isUpdating.value = false
  } catch {
    isUpdating.value = false
  }
}

function resetNewCompanyForm() {
  formData.id = null
  formData.name = ''

  v$.value.$reset()
}

function closeModal() {
  modalStore.closeModal()
}
</script>
