<script setup lang="ts">
import { VueFinalModal } from 'vue-final-modal'

defineProps<{
  title?: string
  showConfirm?: boolean
}>()

const emit = defineEmits<{
  (e: 'innerClose'): void
}>()
</script>

<template>
  <VueFinalModal
    class="flex justify-center items-center"
    content-class="flex flex-col max-w-xl mx-4 p-4 bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-lg space-y-2"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="flex items-center justify-between">
      <h1 class="text-xl">{{ title }}</h1>
      <i class="i-lucide-x w-5 h-5 text-[#6B6B6B]" @click="emit('innerClose')"></i>
    </div>
    <slot />
    <button v-if="showConfirm" class="mt-1 ml-auto px-2 border rounded-lg" @click="emit('innerClose')">
      Confirm
    </button>
  </VueFinalModal>
</template>
