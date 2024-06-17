import axios from 'axios'
import { defineStore } from 'pinia'
import { useNotificationStore } from '@/scripts/stores/notification'
import { handleError } from '@/scripts/helpers/error-handling'

export const useCalendarStore = (useWindow = false) => {
  const defineStoreFunc = useWindow ? window.pinia.defineStore : defineStore
  const { global } = window.i18n

  return defineStoreFunc({
    id: 'calendar',

    state: () => ({
      calendars: [],
      currentCalendar: {
        id: null,
        title: '',
        estimate_id: null,
        customer_id: null,
        invoice_id: null,
        start: '',
        end: '',
        description: ''
      },
      editCalendar: null,
      calendarTypes: {
        invoice: 'Invoice',
        estimate: 'Estimate'
      },
    }),

    getters: {
      isEdit: (state) => (state.currentCalendar.id ? true : false),
      calendarItems: (state) =>
        Object.keys(state.calendarTypes).reduce((arrs, key) => {
          return [...arrs, { id: key, label: state.calendarTypes[key] }]
        }, []),
    },

    actions: {
      fetchCalendars(params) {
        return new Promise((resolve, reject) => {
          axios
            .get(`/api/v1/calendars`, { params })
            .then((response) => {
              this.calendars = response.data.data
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      fetchCalendar(id) {
        return new Promise((resolve, reject) => {
          axios
            .get(`/api/v1/calendars/${id}`)
            .then((response) => {
              resolve(response)
            })
            .catch((err) => {
              handleError(err)
              reject(err)
            })
        })
      },

      addCalendar(data) {
        return new Promise((resolve, reject) => {
          axios
            .post('/api/v1/calendars', data)
            .then((response) => {
              this.calendars.push(response.data.data)
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

      updateCalendar(data) {
        return new Promise((resolve, reject) => {
          axios
            .put(`/api/v1/calendars/${data.id}`, data)
            .then((response) => {
              if (response.data) {
                let pos = this.calendars.findIndex(
                  (calendar) => calendar.id === response.data.data.id,
                )
                this.calendars[pos] = data.calendars
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

      deleteCalendar(id) {
        return new Promise((resolve) => {
          axios
            .delete(`/api/v1/calendars/${id}`)
            .then((response) => {
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
