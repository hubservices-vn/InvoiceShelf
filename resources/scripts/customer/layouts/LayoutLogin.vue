<template>
  <div
    class="
      min-h-screen
      bg-gray-200
      flex flex-col
      justify-center
      py-12
      sm:px-6
      lg:px-8
    "
  >
    <NotificationRoot />

    <div class="sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
      <MainLogo
        v-if="!customerLogo"
        class="block w-full h-auto max-w-full text-primary-400 mx-auto"
      />
      <img
        v-else
        :src="customerLogo"
        class="block w-48 h-auto max-w-full text-primary-400 mx-auto"
      />
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md px-4 sm:px-0">
      <div class="bg-white py-8 px-4 shadow rounded-lg sm:px-10">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import NotificationRoot from '@/scripts/components/notifications/NotificationRoot.vue'
import MainLogo from '@/scripts/components/icons/MainLogo.vue'

const customerLogo = computed(() => {
  if (window.customer_logo) {
    return window.customer_logo
  }

  return false
})
</script>
