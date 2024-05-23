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
import { useDialogStore } from '@/scripts/stores/dialog'
import { useCategoryStore } from '@/scripts/admin/stores/category'
import { useModalStore } from '@/scripts/stores/modal'
import { ref, computed } from 'vue'
import { useI18n } from 'vue-i18n'
import CategoryDropdown from '@/scripts/admin/components/dropdowns/CategoryIndexDropdown.vue'
import CategoryModal from '@/scripts/admin/components/modal-components/CategoryModal.vue'

const categoryStore = useCategoryStore()
const dialogStore = useDialogStore()
const modalStore = useModalStore()

const { t } = useI18n()

const table = ref(null)

const CategoryColumns = computed(() => {
  return [
    {
      key: 'name',
      label: t('settings.category.category_name'),
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
  modalStore.openModal({
    title: t('settings.category.add_category'),
    componentName: 'CategoryModal',
    size: 'sm',
    refreshData: table.value && table.value.refresh,
  })
}

async function refreshTable() {
  table.value && table.value.refresh()
}
</script>
