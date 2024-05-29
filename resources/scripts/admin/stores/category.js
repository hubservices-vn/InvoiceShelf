import axios from 'axios'
import { defineStore } from 'pinia'
import { useNotificationStore } from '@/scripts/stores/notification'
import { handleError } from '@/scripts/helpers/error-handling'

export const useCategoryStore = (useWindow = false) => {
  const defineStoreFunc = useWindow ? window.pinia.defineStore : defineStore
  const { global } = window.i18n

  return defineStoreFunc({
    id: 'category',

    state: () => ({
      categories: [],
      currentCategory: {
        id: null,
        name: '',
        parent_id: null,
        type: '',
        image_url: '',
        description: '',
      },
      editCategory: null,
      categoryTypes: {
        item: 'Item',
        invoice: 'Invoice',
        expense: 'Expense',
        estimate: 'Estimate',
        customer: 'Customer',
        payment: 'Payment',
        recurringInvoice: 'Recurring Invoice',
      },
    }),

    getters: {
      isEdit: (state) => (state.currentCategory.id ? true : false),
      categoryItems: (state) =>
        Object.keys(state.categoryTypes).reduce((arrs, key) => {
          return [...arrs, { id: key, label: state.categoryTypes[key] }]
        }, []),
    },

    actions: {
      fetchCategories(params) {
        return new Promise((resolve, reject) => {
          axios
            .get(`/api/v1/categories`, { params })
            .then((response) => {
              this.categories = response.data.data
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      fetchCategory(id) {
        return new Promise((resolve, reject) => {
          axios
            .get(`/api/v1/categories/${id}`)
            .then((response) => {
              this.currentCategory = response.data.data
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      addCategory(data) {
        return new Promise((resolve, reject) => {
          axios
            .post('/api/v1/categories', data)
            .then((response) => {
              this.categories.push(response.data.data)
              const notificationStore = useNotificationStore()
              notificationStore.showNotification({
                type: 'success',
                message: global.t('settings.category.created_message'),
              })
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      updateCategoryImage(id, data) {
        console.log(data)
        return new Promise((resolve, reject) => {
          axios
            .post(`/api/v1/categories/${id}/upload-image`, data)
            .then((response) => {
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      updateCategory(data) {
        return new Promise((resolve, reject) => {
          axios
            .put(`/api/v1/categories/${data.id}`, data)
            .then((response) => {
              if (response.data) {
                let pos = this.categories.findIndex(
                  (category) => category.id === response.data.data.id,
                )
                this.categories[pos] = data.categories
                const notificationStore = useNotificationStore()
                notificationStore.showNotification({
                  type: 'success',
                  message: global.t('settings.category.updated_message'),
                })
              }
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      deleteCategory(id) {
        return new Promise((resolve) => {
          axios
            .delete(`/api/v1/categories/${id}`)
            .then((response) => {
              let index = this.categories.findIndex(
                (category) => category.id === id,
              )
              this.categories.splice(index, 1)
              const notificationStore = useNotificationStore()
              notificationStore.showNotification({
                type: 'success',
                message: global.t('settings.category.deleted_message'),
              })
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              console.error(err)
            })
        })
      },
    },
  })()
}
