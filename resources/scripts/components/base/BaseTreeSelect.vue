<script setup>
import { computed, ref, watch } from 'vue'
import Treeselect from 'vue3-treeselect'
import 'vue3-treeselect/dist/vue3-treeselect.css'

const props = defineProps({
  labelProp: {
    type: String,
    required: false,
    default: 'label',
  },
  multiple: {
    type: Object,
    required: false,
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
  placeholder: {
      type: String,
  },
  noChildrenText: {
      type: String,
      default: 'No sub-options.'
    },
    /**
     * Text displayed when there are no available options.
     */
     noOptionsText: {
      type: String,
      default: 'No options available.'
    },

    /**
     * Text displayed when there are no matching search results.
     */
    noResultsText: {
      type: String,
      default: 'No results found...'
    },
        /**
     * Generates a hidden <input /> tag with this field name for html forms.
     */
     name: {
      type: String
    },
})

const itemsFlatToLeaf = (items) => {
  const itemObj = {}
  const leafArray = []
  items.forEach((item) => {
    const id = item[props.valueProp]
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

watch(selectedValue.value, (val) => {
  if (props.valueProp) {
    emit('update:modelValue', val[props.valueProp])
  } else {
    emit('update:modelValue', val)
  }
})
</script>

<template>
  <treeselect
    v-model="selectedValue"
    :name="name"
    :no-children-text="noChildrenText"
    :no-results-text="noResultsText"
    :no-options-text="noOptionsText"
    :multiple="multiple"
    :placeholder="placeholder"
    :options="itemsFlatToLeaf(options)"
  />
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
  .vue-treeselect--open > .vue-treeselect__control {
    @apply !rounded ring-1 ring-primary-400 border-primary-400;
  }
}
</style>
