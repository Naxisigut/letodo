<template>
  <div class="flex flex-col gap-6">
    <input
      v-model="name"
      type="text"
      placeholder="请输入分类名称"
      class="h-12 px-4 rounded-[10px] bg-[#FAFAF8] text-sm text-[#2D2D2D] placeholder:text-[#8E8E93] outline-none"
    />
    <div class="grid grid-cols-6 gap-3">
      <button
        v-for="c in colors"
        :key="c"
        type="button"
        class="w-8 h-8 rounded-full shrink-0 transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#7C9070]"
        :class="selectedColor === c ? 'ring-2 ring-offset-2 ring-[#7C9070]' : ''"
        :style="{ backgroundColor: c }"
        @click="selectedColor = c"
      />
    </div>
    <button
      class="h-12 w-full rounded-[10px] bg-primary text-white text-sm font-medium flex items-center justify-center hover:opacity-90 transition-opacity"
      @click="onCreate"
    >
      创建
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref, inject } from 'vue'
import { supabase } from '@/utils/superbase';
import { toast } from 'vue-sonner'
import { useAllCates } from '@/hooks/useGlobal'


const emit = defineEmits<{
  (e: 'close'): void
}>()

const name = ref('')
const selectedColor = ref('#7C9070')
const colors = [
  '#7C9070',
  '#E74C3C',
  '#3498DB',
  '#F39C12',
  '#9B59B6',
  '#1ABC9C',
]


async function onCreate() {
  const trimmedName = name.value.trim()
  if (!trimmedName) {
    toast.error('请输入分类名称')
    return
  }
  if (trimmedName.length > 50) {
    toast.error('分类名称不能超过 50 个字符')
    return
  }
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) {
    toast.error('请先登录')
    return
  }

  toast.loading('创建分类中...')
  const res = await supabase
    .from('categories')
    .insert({
      user_id: user.id,
      name: name.value.trim(),
      color: selectedColor.value,
    })
  console.log('res', res)

  toast.dismiss()
  if (res.error) {
    toast.error('创建分类失败:' + res.error.message)
    return
  }

  toast.success('创建分类成功')
  setTimeout(() => {
    emit('close')
    useAllCates().refresh()
  }, 1000)
}



</script>
