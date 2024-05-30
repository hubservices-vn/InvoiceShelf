<template>
  <BaseModal :show="modalActive" @close="closeCategoryModal">
    <template #header>
      <div class="flex justify-between w-full">
        {{ modalStore.title }}
        <BaseIcon
          name="XIcon"
          class="w-6 h-6 text-gray-500 cursor-pointer"
          @click="closeCategoryModal"
        />
      </div>
    </template>

    <form action="" @submit.prevent="submitCategoryData">
      <div class="p-8 sm:p-6">
        <BaseInputGrid layout="one-column">
          <BaseInputGroup
            :label="$t('expenses.category')"
            :error="
              v$.currentCategory.name.$error &&
              v$.currentCategory.name.$errors[0].$message
            "
            required
          >
            <BaseInput
              v-model="categoryStore.currentCategory.name"
              :invalid="v$.currentCategory.name.$error"
              type="text"
              @input="v$.currentCategory.name.$touch()"
            />
          </BaseInputGroup>
          <BaseInputGroup
            :label="$t('categories.type')"
            :error="
              v$.currentCategory.type.$error &&
              v$.currentCategory.type.$errors[0].$message
            "
            required
          >
            <BaseMultiselect
              v-model="categoryStore.currentCategory.type"
              :options="categoryStore.categoryItems"
              value-prop="id"
              :disabled="!!modalStore.data?.type"
              searchable
              :placeholder="$t('categories.select_type')"
              :max-height="200"
              class="mt-1 md:mt-0"
            />
          </BaseInputGroup>
          <BaseInputGroup :label="$t('categories.parent')">
            <BaseTreeSelect
              name="parent_id"
              value-prop="id"
              label-prop="name"
              :placeholder="$t('categories.select_parent')"
              parent-prop="parent_id"
              :options="categories"
              v-model="categoryStore.currentCategory.parent_id"
            />
          </BaseInputGroup>
          <BaseInputGroup :label="$t('categories.image')">
            <BaseFileUploader
              v-model="categoryImagePreview"
              base64
              @change="onFileInputChange"
              @remove="onFileInputRemove"
            />
          </BaseInputGroup>
          <BaseInputGroup
            :label="$t('categories.description')"
            :error="
              v$.currentCategory.description.$error &&
              v$.currentCategory.description.$errors[0].$message
            "
          >
            <BaseTextarea
              v-model="categoryStore.currentCategory.description"
              rows="4"
              cols="50"
              @input="v$.currentCategory.description.$touch()"
            />
          </BaseInputGroup>
        </BaseInputGrid>
      </div>

      <div
        class="z-0 flex justify-end p-4 border-t border-gray-200 border-solid border-modal-bg"
      >
        <BaseButton
          type="button"
          variant="primary-outline"
          class="mr-3 text-sm"
          @click="closeCategoryModal"
        >
          {{ $t('general.cancel') }}
        </BaseButton>

        <BaseButton
          :loading="isSaving"
          :disabled="isSaving"
          variant="primary"
          type="submit"
        >
          <template #left="slotProps">
            <BaseIcon
              v-if="!isSaving"
              name="SaveIcon"
              :class="slotProps.class"
            />
          </template>
          {{ categoryStore.isEdit ? $t('general.update') : $t('general.save') }}
        </BaseButton>
      </div>
    </form>
  </BaseModal>
</template>

<script setup>
import { useCategoryStore } from '@/scripts/admin/stores/category'
import { useModalStore } from '@/scripts/stores/modal'
import { computed, ref, watch } from 'vue'
import { required, minLength, maxLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { useI18n } from 'vue-i18n'

const categoryStore = useCategoryStore()
const modalStore = useModalStore()
const { t } = useI18n()
const isCategoryImageRemoved = ref(false)
const categoryImagePreview = ref([])
const categoryImageBlob = ref(null)
const categoryImageName = ref(null)

let isSaving = ref(false)

const categories = ref([])

const rules = computed(() => {
  return {
    currentCategory: {
      name: {
        required: helpers.withMessage(t('validation.required'), required),
        minLength: helpers.withMessage(
          t('validation.name_min_length', { count: 3 }),
          minLength(3),
        ),
      },
      type: {
        required: helpers.withMessage(t('validation.required'), required),
      },
      description: {
        maxLength: helpers.withMessage(
          t('validation.description_maxlength', { count: 255 }),
          maxLength(255),
        ),
      },
    },
  }
})

const v$ = useVuelidate(
  rules,
  computed(() => categoryStore),
)

const modalActive = computed(() => {
  if (!!modalStore.data?.type) {
    categoryStore.currentCategory.type = modalStore.data?.type
  }
  if (!modalStore.active) {
    categoryImagePreview.value = []
    categoryImageBlob.value = null
    categoryImageName.value = null
    isCategoryImageRemoved.value = false
  }
  return modalStore.active && modalStore.componentName === 'CategoryModal'
})

async function submitCategoryData() {
  v$.value.currentCategory.$touch()

  if (v$.value.currentCategory.$invalid) {
    return true
  }

  const action = categoryStore.isEdit
    ? categoryStore.updateCategory
    : categoryStore.addCategory

  isSaving.value = true

  const res = await action(categoryStore.currentCategory)

  isSaving.value = false

  if (res.data.data) {
    if (categoryImageBlob.value || isCategoryImageRemoved.value) {
      let image = new FormData()
      image.append(
        'category_image',
        JSON.stringify({
          name: categoryImageName.value,
          data: categoryImageBlob.value,
        }),
      )
      image.append('is_category_image_removed', isCategoryImageRemoved.value)
      await categoryStore.updateCategoryImage(res.data.data.id, image)
      categoryImageBlob.value = null
      isCategoryImageRemoved.value = false
    }
  }

  modalStore.refreshData ? modalStore.refreshData() : ''

  closeCategoryModal()
}

function closeCategoryModal() {
  modalStore.closeModal()

  setTimeout(() => {
    categoryStore.$reset()
    v$.value.$reset()
  }, 300)
}

function onFileInputChange(fileName, file, fileCount, fileList) {
  categoryImageName.value = fileList.name
  categoryImageBlob.value = file
}

function onFileInputRemove() {
  categoryImageBlob.value = null
  categoryImageName.value = null
  isCategoryImageRemoved.value = true
}

watch(
  () => categoryStore.currentCategory.type,
  (type) => {
    if (!type) {
      categories.value = []
      return
    }
    if (modalStore.data) {
      modalStore.data.type = type
    }
    categoryStore.fetchCategories({ limit: 'all', type }).then((rs) => {
      categories.value = rs.data?.data || []
    })
  },
)
watch(
  () => categoryStore.currentCategory.image_url,
  (image) => {
    if (image) {
      categoryImagePreview.value = [{ image }]
    }
  },
)
</script>
