<script setup>
import { computed, onMounted, ref, watch } from 'vue'
import Treeselect from 'vue3-treeselect'
import 'vue3-treeselect/dist/vue3-treeselect.css'

const props = defineProps({
  labelProp: {
    type: String,
    required: false,
    default: 'label',
  },
  multiple: {
    type: Boolean,
    required: false,
    default: false,
  },
  contentLoading: {
      type: Boolean,
      default: false,
    },
  valueProp: {
    type: String,
    required: false,
    default: 'value',
  },
  parentProp: {
    type: String,
    required: false,
    default: 'parent',
  },
  options: {
    type: Array,
    required: true,
  },
  modelValue: {
    type: [String, Number, Boolean, Object, Array],
    default: '',
  },
  required: {
    type: Boolean,
    default: false,
  },
  loading: {
    type: Boolean,
    default: false,
  },
  placeholder: {
    type: String,
  },
  noChildrenText: {
    type: String,
    default: 'No sub-options.',
  },
  /**
   * Text displayed when there are no available options.
   */
  noOptionsText: {
    type: String,
    default: 'No options available.',
  },

  /**
   * Text displayed when there are no matching search results.
   */
  noResultsText: {
    type: String,
    default: 'No results found...',
  },
  /**
   * Generates a hidden <input /> tag with this field name for html forms.
   */
  name: {
    type: String,
  },
})

const itemsFlatToLeaf = (items) => {
  const itemObj = {}
  const leafArray = []
  items?.forEach((item) => {
    const id = item[props.valueProp]
    if (!id) return
    const label = item[props.labelProp]
    const parentId = item[props.parentProp]
    const node = { ...item, id, label, children: [] }

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

let selectedValue = ref(props.modelValue || undefined)
const emit = defineEmits(['update:modelValue'])

watch(
  () => props.modelValue,
  () => {
    if (props.valueProp && props.options?.length) {
      selectedValue.value = props.options.find((val) => {
        if (val[props.valueProp]) {
          return val[props.valueProp] === props.modelValue
        }
      })
    } else {
      selectedValue.value = props.modelValue
    }
  },
)

watch(
  () => selectedValue.value,
  (val) => {
    if (val[props.valueProp]) {
      emit('update:modelValue', val[props.valueProp])
    } else {
      emit('update:modelValue', val)
    }
  },
)
onMounted(() => {})
</script>

<template>
  <BaseContentPlaceholders v-if="contentLoading">
    <BaseContentPlaceholdersBox
      :rounded="true"
      class="w-full"
      style="height: 40px"
    />
  </BaseContentPlaceholders>
  <treeselect v-else
    :class="loading ? 'vue-treeselect__is-loading' : ''"
    v-model="selectedValue"
    :name="name"
    :no-children-text="noChildrenText"
    :no-results-text="noResultsText"
    :no-options-text="noOptionsText"
    :required="required"
    :clearable="false"
    :multiple="multiple"
    :placeholder="placeholder"
    :options="itemsFlatToLeaf(options)"
  >
    <template v-slot:after-list>
      <slot name="after-list" />
    </template>
    <template v-slot:before-list>
      <slot name="before-list" />
    </template>
  </treeselect>
</template>

<style lang="scss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer components {
  :deep(.vue-treeselect__control) {
    @apply h-[38px];
  }
  :deep(.vue-treeselect__option) {
    @apply flex items-center justify-start box-border text-left cursor-pointer text-sm leading-snug py-2 hover:text-gray-800 hover:bg-gray-100;
  }
  :deep(.vue-treeselect__option--selected) {
    @apply text-white bg-primary-500 hover:text-white hover:bg-primary-500 hover:opacity-90 font-normal;
  }
  :deep(.vue-treeselect__input) {
    @apply ring-0 outline-none text-sm;
  }
  :deep(.vue-treeselect__single-value),
  :deep(.vue-treeselect__placeholder) {
    @apply text-sm py-2 px-2;
  }
  :deep(.vue-treeselect__control-arrow-container){
    svg{
      display: none
    }
    @apply bg-multiselect-caret bg-center bg-no-repeat w-5 h-5 py-px box-content z-10 relative mr-1 opacity-40 shrink-0 grow-0 transition-transform;
  }

  //bg-multiselect-caret bg-center bg-no-repeat w-5 h-5 py-px box-content z-5 relative mr-1 opacity-40 shrink-0 grow-0 transition-transform
}
</style>
<style lang="scss">
.vue-treeselect--open-below:not(.vue-treeselect--append-to-body) {
  .vue-treeselect__menu-container {
    top: calc(100% + 5px) !important;
    .vue-treeselect__menu {
      @apply rounded-md shadow-lg border-t-inherit p-0;
    }
  }
}
</style>
<style lang="postcss">
@tailwind components;

@layer components {
  .vue-treeselect--open > .vue-treeselect__control .vue-treeselect__control-arrow-container{
      @apply bg-multiselect-caret bg-center bg-no-repeat w-5 h-5 py-px box-content z-10 relative mr-1 opacity-40 shrink-0 grow-0 transition-transform rotate-180 pointer-events-auto;
  }
  .vue-treeselect--open > .vue-treeselect__control {
    @apply !rounded ring-1 ring-primary-400 border-primary-400;
  }
  .vue-treeselect__is-loading .vue-treeselect__control::after {
    @apply absolute content-[''] bg-multiselect-spinner bg-center bg-no-repeat w-4 h-4 z-10 right-6 top-3 mr-3.5 animate-spin shrink-0 grow-0;
  }
}
</style>
