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
    content-class="flex flex-col mx-4 p-0 bg-white rounded-xl shadow-[0_0_16px_rgba(0,0,0,0.03)] overflow-hidden"
    overlay-transition="vfm-fade"
    content-transition="vfm-fade"
  >
    <div class="flex items-center justify-between h-16 px-6 py-5 shrink-0">
      <h1 class="text-xl font-medium text-[#2D2D2D]">{{ title }}</h1>
      <i class="i-lucide-x w-6 h-6 text-[#6B6B6B] cursor-pointer" @click="emit('innerClose')"></i>
    </div>
    <div class="flex flex-col gap-6 px-6 pb-6">
      <slot />
    </div>
    <button v-if="showConfirm" class="mt-1 ml-auto px-2 border rounded-lg" @click="emit('innerClose')">
      Confirm
    </button>
  </VueFinalModal>
</template>
