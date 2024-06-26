<template>
  <BasePage>
    <BasePageHeader :title="$t('items.title')">
      <BaseBreadcrumb>
        <BaseBreadcrumbItem :title="$t('general.home')" to="dashboard" />
        <BaseBreadcrumbItem :title="$t('items.item', 2)" to="#" active />
      </BaseBreadcrumb>

      <template #actions>
        <div class="flex items-center justify-end space-x-5">
          <BaseButton
            v-show="itemStore.totalItems"
            variant="primary-outline"
            @click="toggleFilter"
          >
            {{ $t('general.filter') }}
            <template #right="slotProps">
              <BaseIcon
                v-if="!showFilters"
                :class="slotProps.class"
                name="FilterIcon"
              />
              <BaseIcon v-else name="XIcon" :class="slotProps.class" />
            </template>
          </BaseButton>

          <BaseButton
            v-if="userStore.hasAbilities(abilities.CREATE_ITEM)"
            @click="$router.push('/admin/items/create')"
          >
            <template #left="slotProps">
              <BaseIcon name="PlusIcon" :class="slotProps.class" />
            </template>
            {{ $t('items.add_item') }}
          </BaseButton>
        </div>
      </template>
    </BasePageHeader>

    <BaseFilterWrapper :show="showFilters" class="mt-5" @clear="clearFilter">
      <BaseInputGroup :label="$t('items.name')" class="text-left">
        <BaseInput
          v-model="filters.name"
          type="text"
          name="name"
          autocomplete="off"
        />
      </BaseInputGroup>
      <BaseInputGroup :label="$t('categories.label')" class="text-left">
        <BaseTreeSelect
              name="parent_id"
              value-prop="id"
              label-prop="name"
              :placeholder="$t('expenses.categories.select_a_category')"
              parent-prop="parent_id"
              :options="categories"
              :loading="categoryLoading"
              v-model="filters.category_id"
            />
      </BaseInputGroup>
      <BaseInputGroup :label="$t('items.unit')" class="text-left">
        <BaseMultiselect
          v-model="filters.unit_id"
          :placeholder="$t('items.select_a_unit')"
          value-prop="id"
          track-by="name"
          :filter-results="false"
          label="name"
          resolve-on-load
          :delay="500"
          searchable
          class="w-full"
          :options="searchUnits"
        />
      </BaseInputGroup>

      <BaseInputGroup class="text-left" :label="$t('items.price')">
        <BaseMoney v-model="filters.price" />
      </BaseInputGroup>
    </BaseFilterWrapper>

    <BaseEmptyPlaceholder
      v-show="showEmptyScreen"
      :title="$t('items.no_items')"
      :description="$t('items.list_of_items')"
    >
      <SatelliteIcon class="mt-5 mb-4" />

      <template #actions>
        <BaseButton
          v-if="userStore.hasAbilities(abilities.CREATE_ITEM)"
          variant="primary-outline"
          @click="$router.push('/admin/items/create')"
        >
          <template #left="slotProps">
            <BaseIcon name="PlusIcon" :class="slotProps.class" />
          </template>
          {{ $t('items.add_new_item') }}
        </BaseButton>
      </template>
    </BaseEmptyPlaceholder>

    <div v-show="!showEmptyScreen" class="relative table-container">
      <div
        class="
          relative
          flex
          items-center
          justify-end
          h-5
          border-gray-200 border-solid
        "
      >
        <BaseDropdown v-if="itemStore.selectedItems.length">
          <template #activator>
            <span
              class="
                flex
                text-sm
                font-medium
                cursor-pointer
                select-none
                text-primary-400
              "
            >
              {{ $t('general.actions') }}
              <BaseIcon name="ChevronDownIcon" />
            </span>
          </template>
          <BaseDropdownItem @click="removeMultipleItems">
            <BaseIcon name="TrashIcon" class="mr-3 text-gray-600" />
            {{ $t('general.delete') }}
          </BaseDropdownItem>
        </BaseDropdown>
      </div>

      <BaseTable
        ref="table"
        :data="fetchData"
        :columns="itemColumns"
        :placeholder-count="itemStore.totalItems >= 20 ? 10 : 5"
        class="mt-3"
      >
        <template #header>
          <div class="absolute items-center left-6 top-2.5 select-none">
            <BaseCheckbox
              v-model="itemStore.selectAllField"
              variant="primary"
              @change="itemStore.selectAllItems"
            />
          </div>
        </template>
        <template #cell-image_url="{ row }">
          <div class="relative block">
            <img v-if="row.data.image_url"
            :src="row.data.image_url"
            class="w-full"
          />
          </div>
        </template>
        <template #cell-status="{ row }">
          <div class="relative block">
            <BaseCheckbox
              :id="row.id"
              v-model="selectField"
              :value="row.data.id"
            />
          </div>
        </template>

        <template #cell-name="{ row }">
          <router-link
            :to="{ path: `items/${row.data.id}/edit` }"
            class="font-medium text-primary-500"
          >
            {{ row.data.name }}
          </router-link>
        </template>

        <template #cell-unit_name="{ row }">
          <span>
            {{ row.data.unit ? row.data.unit.name : '-' }}
          </span>
        </template>

        <template #cell-price="{ row }">
          <BaseFormatMoney
            :amount="row.data.price"
            :currency="companyStore.selectedCompanyCurrency"
          />
        </template>

        <template #cell-created_at="{ row }">
          <span>{{ row.data.formatted_created_at }}</span>
        </template>

        <template v-if="hasAbilities()" #cell-actions="{ row }">
          <ItemDropdown
            :row="row.data"
            :table="table"
            :load-data="refreshTable"
          />
        </template>
      </BaseTable>
    </div>
  </BasePage>
</template>

<script setup>
import { ref, computed, inject, onMounted, reactive, onUnmounted } from 'vue'
import { debouncedWatch } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import { useItemStore } from '@/scripts/admin/stores/item'
import { useNotificationStore } from '@/scripts/stores/notification'
import { useDialogStore } from '@/scripts/stores/dialog'
import { useCompanyStore } from '@/scripts/admin/stores/company'
import { useUserStore } from '@/scripts/admin/stores/user'
import ItemDropdown from '@/scripts/admin/components/dropdowns/ItemIndexDropdown.vue'
import SatelliteIcon from '@/scripts/components/icons/empty/SatelliteIcon.vue'
import abilities from '@/scripts/admin/stub/abilities'
import { useCategoryStore } from '@/scripts/admin/stores/category'

const categoryStore = useCategoryStore()
const utils = inject('utils')

const itemStore = useItemStore()
const companyStore = useCompanyStore()
const notificationStore = useNotificationStore()
const dialogStore = useDialogStore()
const userStore = useUserStore()

const { t } = useI18n()
let showFilters = ref(false)
let isFetchingInitialData = ref(true)


const categories = ref([])
const categoryLoading = ref(false)
async function fetchCategories(search = undefined) {
  categoryLoading.value = true
  const res = await categoryStore.fetchCategories({ search, type: 'item', limit: 'all' })
  if (res.data.data.length) {
    categories.value = res.data?.data || []
  }
  categoryLoading.value = false
}

const filters = reactive({
  name: '',
  unit_id: '',
  category_id: null,
  price: '',
})

const table = ref(null)

const showEmptyScreen = computed(
  () => !itemStore.totalItems && !isFetchingInitialData.value
)

const selectField = computed({
  get: () => itemStore.selectedItems,
  set: (value) => {
    return itemStore.selectItem(value)
  },
})

const itemColumns = computed(() => {
  return [
    {
      key: 'status',
      thClass: 'extra w-10',
      tdClass: 'font-medium text-gray-900',
      placeholderClass: 'w-10',
      sortable: false,
    },
    {
      key: 'image_url',
      label: t('items.image'),
      thClass: 'extra',
      tdClass: 'font-medium text-gray-900 w-5 !py-2 !px-3',
    },
    {
      key: 'name',
      label: t('items.name'),
      thClass: 'extra',
      tdClass: 'font-medium text-gray-900',
    },
    {
      key: 'category.name',
      label: t('categories.label'),
      thClass: 'extra',
      tdClass: 'cursor-pointer font-medium text-primary-500',
    },
    { key: 'unit_name', label: t('items.unit') },
    { key: 'price', label: t('items.price') },
    { key: 'created_at', label: t('items.added_on') },

    {
      key: 'actions',
      thClass: 'text-right',
      tdClass: 'text-right text-sm font-medium',
      sortable: false,
    },
  ]
})

debouncedWatch(
  filters,
  () => {
    setFilters()
  },
  { debounce: 500 }
)

itemStore.fetchItemUnits({ limit: 'all' })

onUnmounted(() => {
  if (itemStore.selectAllField) {
    itemStore.selectAllItems()
  }
})

function clearFilter() {
  filters.name = ''
  filters.unit_id = ''
  filters.category_id = null
  filters.price = ''
}

function hasAbilities() {
  return userStore.hasAbilities([abilities.DELETE_ITEM, abilities.EDIT_ITEM])
}

function toggleFilter() {
  if (showFilters.value) {
    clearFilter()
  }

  showFilters.value = !showFilters.value
}

function refreshTable() {
  table.value && table.value.refresh()
}

function setFilters() {
  refreshTable()
}

async function searchUnits(search) {
  let res = await itemStore.fetchItemUnits({ search })

  return res.data.data
}

async function fetchData({ page, filter, sort }) {
  let data = {
    search: filters.name,
    unit_id: filters.unit_id !== null ? filters.unit_id : '',
    category_id: filters.category_id,
    price: Math.round(filters.price * 100),
    orderByField: sort.fieldName || 'created_at',
    orderBy: sort.order || 'desc',
    page,
  }

  isFetchingInitialData.value = true

  let response = await itemStore.fetchItems(data)

  isFetchingInitialData.value = false

  return {
    data: response.data.data,
    pagination: {
      totalPages: response.data.meta.last_page,
      currentPage: page,
      totalCount: response.data.meta.total,
      limit: 10,
    },
  }
}

function removeMultipleItems() {
  dialogStore
    .openDialog({
      title: t('general.are_you_sure'),
      message: t('items.confirm_delete', 2),
      yesLabel: t('general.ok'),
      noLabel: t('general.cancel'),
      variant: 'danger',
      hideNoButton: false,
      size: 'lg',
    })
    .then((res) => {
      if (res) {
        itemStore.deleteMultipleItems().then((response) => {
          if (response.data.success) {
            table.value && table.value.refresh()
          }
        })
      }
    })
}

onMounted(() => {
  fetchCategories()
})
</script>
