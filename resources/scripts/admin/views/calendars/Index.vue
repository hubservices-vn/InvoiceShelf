<template>
  <BasePage>
    <CategoryModal />
    <CalendarModal />
    <!-- Page Header Section -->
    <BasePageHeader :title="$t('customers.title')">
      <BaseBreadcrumb>
        <BaseBreadcrumbItem :title="$t('general.home')" to="dashboard" />
        <BaseBreadcrumbItem
          :title="$t('calendars.calendar', 2)"
          to="#"
          active
        />
      </BaseBreadcrumb>

      <template #actions> </template>
    </BasePageHeader>

    <BaseEmptyPlaceholder
      v-show="showEmptyScreen"
      :title="$t('customers.no_customers')"
      :description="$t('customers.list_of_customers')"
    >
    </BaseEmptyPlaceholder>
    <div>
      <ScheduleXCalendar :calendar-app="calendarApp" ref="calendar">
      </ScheduleXCalendar>
    </div>
  </BasePage>
</template>

<script setup>
import { ScheduleXCalendar } from '@schedule-x/vue'
import { createEventsServicePlugin } from '@schedule-x/events-service'
import { createScrollControllerPlugin } from '@schedule-x/scroll-controller'
import {
  createCalendar,
  viewMonthGrid,
  viewMonthAgenda,
} from '@schedule-x/calendar'
import { createCalendarControlsPlugin } from '@schedule-x/calendar-controls'
import '@schedule-x/theme-default/dist/index.css'
import { useI18n } from 'vue-i18n'
import { useModalStore } from '@/scripts/stores/modal'
import { useCalendarStore } from '@/scripts/admin/stores/calendar'
import { ref, onMounted } from 'vue'
import CalendarModal from '@/scripts/admin/components/modal-components/CalendarModal.vue'
import moment from 'moment'

const calendar = ref()
const { t } = useI18n()
const modalStore = useModalStore()
const calendarStore = useCalendarStore()
const eventsServicePlugin = createEventsServicePlugin({})
const calendarControls = createCalendarControlsPlugin()

async function openCalendarModal({id, data}) {
  modalStore.openModal({
    title: t('estimates.add_calendar'),
    componentName: 'CalendarModal',
    refreshData: fetchToday,
    id,
    data,
  })
}

const calendarApp = createCalendar({
  selectedDate: '1970-01-01',
  views: [viewMonthGrid, viewMonthAgenda],
  defaultView: viewMonthGrid.name,
  events: [],
  plugins: [eventsServicePlugin, calendarControls],
  callbacks: {
    /**
     * Is called when:
     * 1. Selecting a date in the date picker
     * 2. Selecting a new view
     * */
    onRangeUpdate(range) {
      fetchData({ start: range.start, end: range.end })
    },

    /**
     * Is called when an event is updated through drag and drop
     * */
    onEventUpdate(updatedEvent) {
      console.log('onEventUpdate', updatedEvent)
    },

    /**
     * Is called when an event is clicked
     * */
    onEventClick(calendarEvent) {
      fetchCalendar(calendarEvent.id).then((resp) => {
        const calendar = resp.data?.data || {}
        const data = {
          title: calendar.title,
          description: calendar.description,
          start: calendar.start,
          end: calendar.end,
          customerId: calendar.customer?.id,
          customerName: calendar.customer?.name,
          userId: calendar.user?.id,
          userName: calendar.user?.name,
        }
        if (calendar.estimate) {
          data.estimate_id = calendar.estimate_id,
          data.type = 'estimate'
        } else if (calendar.invoice) {
          data.invoice_id = calendar.invoice_id,
          data.type = 'invoice'
        }
        openCalendarModal({id: calendar.id, data})
      })
    },

    /**
     * Is called when clicking a date in the month grid
     * */
    onClickDate(date) {
      console.log('onClickDate', date) // e.g. 2024-01-01
    },

    /**
     * Is called when clicking somewhere in the time grid of a week or day view
     * */
    onClickDateTime(dateTime) {
      console.log('onClickDateTime', dateTime) // e.g. 2024-01-01 12:37
    },

    /**
     * Is called when selecting a day in the month agenda
     * */
    onClickAgendaDate(date) {
      console.log('onClickAgendaDate', date) // e.g. 2024-01-01
    },

    /**
     * Is called when double clicking a date in the month grid
     * */
    onDoubleClickDate(date) {
      console.log('onClickDate', date) // e.g. 2024-01-01
    },

    /**
     * Is called when double clicking somewhere in the time grid of a week or day view
     * */
    onDoubleClickDateTime(dateTime) {
      console.log('onDoubleClickDateTime', dateTime) // e.g. 2024-01-01 12:37
    },

    /**
     * Is called when clicking the "+ N events" button of a month grid-day
     * */
    onClickPlusEvents(date) {
      console.log('onClickPlusEvents', date) // e.g. 2024-01-01
    },

    /**
     * Is called when the selected date is updated
     * */
    onSelectedDateUpdate(date) {
      console.log('onSelectedDateUpdate', date)
    },
  },
})
eventsServicePlugin.beforeInit(calendarApp.$app)
calendarControls.init(calendarApp.$app)

async function fetchCalendar(id) {
  let response = await calendarStore.fetchCalendar(id)
  return response
}

async function fetchData({ start, end }) {
  let data = {
    start: start + ':00',
    limit: 'all',
  }
  let response = await calendarStore.fetchCalendars(data)
  const events = response.data.data?.reduce((arrs, item) => {
    return [
      ...arrs,
      {
        id: item.id,
        title: item.title,
        description: item.description,
        start: moment(item.start).format('YYYY-MM-DD HH:mm'),
        end: moment(item.end).format('YYYY-MM-DD HH:mm'),
        people: [item.customer.name, item.user.name],
      },
    ]
  }, [])
  eventsServicePlugin.set(events)
}
function fetchToday(){
  calendarControls.setDate('1970-01-01')
  calendarControls.setDate(moment(new Date()).format('YYYY-MM-DD'))
}

onMounted(() => {
  fetchToday()
})
</script>

<style lang="scss" scoped>
:deep(.sx__month-grid-cell) {
  cursor: pointer;
}
:deep(.sx__today-button),
:deep(.sx__date-input),
:deep(.sx__view-selection-selected-item) {
  height: 36px !important;
  padding: 8px 12px;
}
:deep(.sx__chevron-wrapper) {
  min-height: 30px !important;
  min-width: 30px !important;
}
:deep(.sx__date-picker__month-view-header) {
  height: 20px;
}
:deep(.sx__date-picker__day) {
  height: 2.2rem;
}
:deep(.sx__date-picker__month-view-header__month-year),
:deep(.sx__date-picker__day),
:deep(.sx__date-picker__day-name) {
  font-size: 14px !important;
}
:deep(.sx__date-picker-popup) {
  overflow: hidden;
  width: 18rem;
  font-size: 16px !important;
}

:deep(.sx__month-grid-day) {
  min-height: 100px !important;
}
</style>
