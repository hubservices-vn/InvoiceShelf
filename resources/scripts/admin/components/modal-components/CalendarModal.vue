<template>
  <BaseModal :show="modalActive" @close="closeCalendarModal">
    <template #header>
      <div class="flex justify-between w-full">
        {{ modalStore.title }}
        <BaseIcon
          name="XIcon"
          class="w-6 h-6 text-gray-500 cursor-pointer"
          @click="closeCalendarModal"
        />
      </div>
    </template>

    <form action="" @submit.prevent="submitCalendarData">
      <div class="p-8 sm:p-6">
        <BaseInputGrid layout="one-column">
          <BaseInputGroup
            :label="$t('calendars.title')"
            :error="
              v$.currentCalendar.title.$error &&
              v$.currentCalendar.title.$errors[0].$message
            "
            required
          >
            <BaseInput
              v-model="calendarStore.currentCalendar.title"
              :invalid="v$.currentCalendar.title.$error"
              type="text"
              @input="v$.currentCalendar.title.$touch()"
            />
          </BaseInputGroup>
          <BaseInputGroup
            :label="$t('categories.description')"
            :error="
              v$.currentCalendar.description.$error &&
              v$.currentCalendar.description.$errors[0].$message
            "
          >
            <BaseTextarea
              v-model="calendarStore.currentCalendar.description"
              rows="4"
              cols="50"
              @input="v$.currentCalendar.description.$touch()"
            />
          </BaseInputGroup>
        </BaseInputGrid>
        <BaseInputGrid layout="two-column" class="mt-5">
          <BaseInputGroup
            :label="$t('calendars.start_time')"
            :error="
              v$.currentCalendar.start.$error &&
              v$.currentCalendar.start.$errors[0].$message
            "
          >
            <BaseDatePicker
              :time24hr="true"
              :enableTime="true"
              v-model="calendarStore.currentCalendar.start"
              :calendar-button="true"
              calendar-button-icon="calendar"
            />
          </BaseInputGroup>
          <BaseInputGroup
            :label="$t('calendars.end_time')"
            :error="
              v$.currentCalendar.start.$error &&
              v$.currentCalendar.start.$errors[0].$message
            "
          >
            <BaseDatePicker
              :time24hr="true"
              :enableTime="true"
              v-model="calendarStore.currentCalendar.end"
              :calendar-button="true"
              calendar-button-icon="calendar"
            />
          </BaseInputGroup>
          <BaseInputGroup :label="$t('calendars.user')">
            <router-link
              :to="{
                path: `#`,
              }"
            >
              <BaseText
                :text="calendarStore.currentCalendar.user_name"
                :length="30"
                tag="span"
                class="font-medium text-primary-500 flex flex-col"
              />
            </router-link>
          </BaseInputGroup>
          <BaseInputGroup :label="$t('calendars.customer')">
            <router-link
              :to="{
                path: `customers/${calendarStore.currentCalendar.customer_id}/view`,
              }"
            >
              <BaseText
                :text="calendarStore.currentCalendar.customer_name"
                :length="30"
                tag="span"
                class="font-medium text-primary-500 flex flex-col"
              />
            </router-link>
          </BaseInputGroup>
        </BaseInputGrid>
      </div>

      <div
        class="z-0 flex justify-between p-4 border-t border-gray-200 border-solid border-modal-bg"
      >
        <span>
          <BaseButton
            variant="danger"
            type="button"
            class="mr-3 text-sm"
            v-if="calendarStore.isEdit"
            @click="() => deleteCalendar(calendarStore.currentCalendar.id)"
          >
            <template #left="slotProps">
              <BaseIcon
                v-if="!isSaving"
                name="TrashIcon"
                :class="slotProps.class"
              />
            </template>
            {{ $t('general.delete') }}
          </BaseButton>
        </span>
        <span class="flex items-center">
          <BaseButton
            type="button"
            variant="primary-outline"
            class="mr-3 text-sm"
            @click="closeCalendarModal"
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
            {{
              calendarStore.isEdit ? $t('general.update') : $t('general.save')
            }}
          </BaseButton>
        </span>
      </div>
    </form>
  </BaseModal>
</template>

<script setup>
import moment from 'moment'
import { useCalendarStore } from '@/scripts/admin/stores/calendar'
import { useModalStore } from '@/scripts/stores/modal'
import { computed, ref, watch } from 'vue'
import { required, minLength, maxLength, helpers } from '@vuelidate/validators'
import { useVuelidate } from '@vuelidate/core'
import { useI18n } from 'vue-i18n'

const calendarStore = useCalendarStore()
const modalStore = useModalStore()
const { t } = useI18n()

let isSaving = ref(false)

const calendars = ref([])

const rules = computed(() => {
  return {
    currentCalendar: {
      title: {
        required: helpers.withMessage(t('validation.required'), required),
        minLength: helpers.withMessage(
          t('validation.name_min_length', { count: 3 }),
          minLength(3),
        ),
      },
      description: {
        maxLength: helpers.withMessage(
          t('validation.description_maxlength', { count: 255 }),
          maxLength(255),
        ),
      },
      start: {
        required: helpers.withMessage(t('validation.required'), required),
      },
      end: {
        required: helpers.withMessage(t('validation.required'), required),
      },
    },
  }
})

const v$ = useVuelidate(
  rules,
  computed(() => calendarStore),
)

const modalActive = computed(() => {
  if (modalStore && modalStore.data) {
    calendarStore.currentCalendar.id = modalStore?.id
    calendarStore.currentCalendar[`${modalStore.data?.type}_id`] =
      modalStore.data.id
    calendarStore.currentCalendar.customer_id = modalStore.data?.customerId
    calendarStore.currentCalendar.customer_name = modalStore.data?.customerName
    calendarStore.currentCalendar.user_id = modalStore.data?.userId
    calendarStore.currentCalendar.user_name = modalStore.data?.userName
    calendarStore.currentCalendar.title = modalStore.data?.title
    calendarStore.currentCalendar.description = modalStore.data?.description
    calendarStore.currentCalendar.start = modalStore.data?.start || moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
    calendarStore.currentCalendar.end = modalStore.data?.end || moment(new Date()).format('YYYY-MM-DD HH:mm:ss')
  }
  return modalStore.active && modalStore.componentName === 'CalendarModal'
})

async function submitCalendarData() {
  v$.value.currentCalendar.$touch()

  if (v$.value.currentCalendar.$invalid) {
    return true
  }

  const action = calendarStore.isEdit
    ? calendarStore.updateCalendar
    : calendarStore.addCalendar

  isSaving.value = true

  await action(calendarStore.currentCalendar)

  isSaving.value = false

  modalStore.refreshData ? modalStore.refreshData() : ''

  closeCalendarModal()
}

function deleteCalendar(id) {
  calendarStore.deleteCalendar(id).then(() => {
    modalStore.refreshData ? modalStore.refreshData() : ''
    modalStore.closeModal()
  })
}

function closeCalendarModal() {
  modalStore.closeModal()

  setTimeout(() => {
    calendarStore.$reset()
    v$.value.$reset()
  }, 300)
}
</script>
