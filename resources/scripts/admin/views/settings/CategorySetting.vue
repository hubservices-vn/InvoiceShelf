<template>
  <CategoryModal />

  <BaseSettingCard
    :title="$t('settings.category.title')"
    :description="$t('settings.category.description')"
  >
    <template #action>
      <BaseButton
        variant="primary-outline"
        type="button"
        @click="openCategoryModal"
      >
        <template #left="slotProps">
          <BaseIcon :class="slotProps.class" name="PlusIcon" />
        </template>

        {{ $t('settings.category.add_new_category') }}
      </BaseButton>
    </template>

    <BaseTable
      ref="table"
      :sort-by="'complete_name'"
      :sort-order="'asc'"
      :data="fetchData"
      :columns="CategoryColumns"
      class="mt-16"
    >
      <template #cell-description="{ row }">
        <div class="w-64">
          <p class="truncate">{{ row.data.description }}</p>
        </div>
      </template>

      <template #cell-actions="{ row }">
        <CategoryDropdown
          :row="row.data"
          :table="table"
          :load-data="refreshTable"
        />
      </template>
    </BaseTable>
  </BaseSettingCard>
</template>

<script setup>
import CategoryDropdown from '@/scripts/admin/components/dropdowns/CategoryIndexDropdown.vue'
import CategoryModal from '@/scripts/admin/components/modal-components/CategoryModal.vue'
import { useCategoryStore } from '@/scripts/admin/stores/category'
import { useDialogStore } from '@/scripts/stores/dialog'
import { useModalStore } from '@/scripts/stores/modal'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const categoryStore = useCategoryStore()
const dialogStore = useDialogStore()
const modalStore = useModalStore()

const { t } = useI18n()

const table = ref(null)

const CategoryColumns = computed(() => {
  return [
    {
      key: 'complete_name',
      label: t('settings.category.category_name'),
      thClass: 'extra',
      tdClass: 'font-medium text-gray-900',
    },
    {
      key: 'typeName',
      label: t('settings.category.category_type'),
      thClass: 'extra',
      tdClass: 'font-medium text-gray-900',
    },
    {
      key: 'description',
      label: t('settings.category.category_description'),
      thClass: 'extra',
      tdClass: 'font-medium text-gray-900',
    },

    {
      key: 'actions',
      label: '',
      tdClass: 'text-right text-sm font-medium',
      sortable: false,
    },
  ]
})

async function fetchData({ page, filter, sort }) {
  let data = {
    orderByField: sort.fieldName || 'created_at',
    orderBy: sort.order || 'desc',
    page,
  }

  let response = await categoryStore.fetchCategories(data)
  response.data.data?.map(item => item.typeName = categoryStore.categoryTypes[item.type])

  return {
    data: response.data.data,
    pagination: {
      totalPages: response.data.meta.last_page,
      currentPage: page,
      totalCount: response.data.meta.total,
      limit: 5,
    },
  }
}

function openCategoryModal() {
  console.log({ type: 'invoice'})
  modalStore.openModal({
    title: t('settings.category.add_category'),
    componentName: 'CategoryModal',
    size: 'sm',
    refreshData: refreshTable,
  })
}

async function refreshTable() {
  table.value && table.value.refresh()
}
</script>
