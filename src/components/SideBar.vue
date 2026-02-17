<template>
  <aside class="w-[240px] bg-white shadow-sm h-screen flex flex-col gap-3 p-4">
    <!-- 搜索框 -->
    <div class="flex items-center gap-2 bg-white rounded-xl border border-[#E5E5E5] h-10 px-3 shadow-sm">
      <i class="i-lucide-search w-[18px] h-[18px] text-[#6B6B6B]"></i>
      <input
        type="text"
        placeholder="搜索任务..."
        class="flex-1 bg-transparent text-sm text-[#2D2D2D] outline-none"
      />
    </div>

    <!-- 分隔线 -->
    <div class="h-px bg-[#E5E5E5]"></div>

    <!-- 菜单区域 -->
    <div class="flex flex-col gap-2 py-2 px-0">
      <router-link
        to="/todo"
        class="flex items-center gap-3 h-11 px-[14px] rounded-[10px]"
        :class="{ 'bg-primary': route.path === '/todo' }"
      >
        <i class="i-lucide-check-square w-5 h-5 text-[#6B6B6B]"></i>
        <span class="text-sm text-[#2D2D2D]">
          今日待办
        </span>
      </router-link>
      <router-link
        to="/data-review"
        class="flex items-center gap-3 h-11 px-[14px] rounded-[10px]"
        :class="{ 'bg-primary': route.path === '/data-review' }"
      >
        <i class="i-lucide-bar-chart-3 w-5 h-5 text-[#6B6B6B]"></i>
        <span class="text-sm text-[#2D2D2D]">
          数据复盘
        </span>
      </router-link>
    </div>

    <!-- 分类区块 -->
    <div class="flex flex-col gap-2">
      <button
        type="button"
        class="flex items-center gap-2 h-11 px-2 rounded-lg hover:bg-[#F5F5F5] transition-colors"
        @click="categoryExpanded = !categoryExpanded"
      >
        <span class="text-sm font-medium text-[#2D2D2D]">
          分类
        </span>
        <i
          class="w-[18px] h-[18px] text-[#6B6B6B] transition-transform duration-200"
          :class="categoryExpanded ? 'i-lucide-chevron-down' : 'i-lucide-chevron-right'"
        />
      </button>
      <Transition name="collapse">
        <div v-show="categoryExpanded" class="flex flex-col overflow-hidden">
          <div v-for="cate in allCates" :key="cate.id" class="flex items-center gap-2 h-9 px-[14px] rounded-lg text-left hover:bg-[#F5F5F5] transition-colors">
            <div class="w-3 h-3 rounded-full" :style="{ backgroundColor: cate.color }"></div>
            <span class="text-sm text-[#6B6B6B]">{{ cate.name }}</span>
          </div>
          <button
            type="button"
            class="flex items-center gap-2 h-9 px-[14px] rounded-lg text-left hover:bg-[#F5F5F5] transition-colors"
            @click="onNewCate"
          >
            <i class="i-lucide-plus w-3 h-3 text-[#6B6B6B]"></i>
            <span class="text-sm text-[#6B6B6B]">新建</span>
          </button>
          <button
            type="button"
            class="flex items-center gap-2 h-9 px-[14px] rounded-lg text-left hover:bg-[#F5F5F5] transition-colors"
          >
            <i class="i-lucide-settings w-3 h-3 text-[#6B6B6B]"></i>
            <span class="text-sm text-[#6B6B6B]">管理</span>
          </button>
        </div>
      </Transition>
    </div>

    <!-- 标签区块 -->
    <div class="flex flex-col gap-2">
      <div class="flex items-center gap-2 h-11 px-2">
        <span class="text-sm font-medium text-[#2D2D2D]">
          标签
        </span>
      </div>
      <div class="flex flex-wrap gap-2">
        <!-- 标签项可以在这里动态添加 -->
      </div>
    </div>
  </aside>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useLodoModal } from '@/utils/modal'
import AddCateModal from '@/components/AddCateModal.vue'
import { supabase } from '@/utils/superbase';
import { useAllCates } from '@/hooks/useGlobal'

const route = useRoute()
const categoryExpanded = ref(true)


const { 
  open: openNewCate, 
  close: closeNewCate 
} = useLodoModal({
  title: '新增分类',
  cpnt: AddCateModal,
})


function onNewCate() {
  openNewCate()
}


const allCates = useAllCates().get()

</script>

<style scoped>
.collapse-enter-active,
.collapse-leave-active {
  transition: all 0.2s ease;
}
.collapse-enter-from,
.collapse-leave-to {
  opacity: 0;
  max-height: 0 !important;
}
.collapse-enter-to,
.collapse-leave-from {
  opacity: 1;
  max-height: 300px;
}
</style>
