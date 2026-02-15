<template>
  <div class="min-h-screen bg-[#F7F6F3] flex">
    <!-- 侧边栏 -->
    <SideBar />

    <!-- 主内容区 -->
    <main class="flex-1 p-8 flex flex-col gap-6">
      <!-- 顶部行 -->
      <div class="flex items-center justify-between h-10">
        <h2 class="text-2xl font-medium text-[#2D2D2D]">
          今日待办
        </h2>
        <button class="bg-[#7C9070] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
          添加任务
        </button>
      </div>

      <!-- 任务列表 -->
      <div class="flex flex-col gap-3 flex-1">
        <!-- 任务项1 -->
        <div class="bg-white rounded-xl shadow-sm p-5 h-[72px] flex items-center gap-4">
          <input type="checkbox" class="w-5 h-5" />
          <div class="flex-1">
            <h3 class="text-sm font-medium text-[#2D2D2D]">
              任务标题
            </h3>
            <p class="text-xs text-[#6B6B6B] mt-1">
              任务描述
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-[#6B6B6B]">
              标签
            </span>
            <button class="text-[#6B6B6B] hover:text-[#2D2D2D]">
              <i class="i-lucide-more-vertical w-4 h-4"></i>
            </button>
          </div>
        </div>

        <!-- 任务项2 -->
        <div class="bg-white rounded-xl shadow-sm p-5 h-[72px] flex items-center gap-4">
          <input type="checkbox" class="w-5 h-5" />
          <div class="flex-1">
            <h3 class="text-sm font-medium text-[#2D2D2D]">
              任务标题
            </h3>
            <p class="text-xs text-[#6B6B6B] mt-1">
              任务描述
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-[#6B6B6B]">
              标签
            </span>
            <button class="text-[#6B6B6B] hover:text-[#2D2D2D]">
              <i class="i-lucide-more-vertical w-4 h-4"></i>
            </button>
          </div>
        </div>

        <!-- 任务项3 -->
        <div class="bg-white rounded-xl shadow-sm p-5 h-[72px] flex items-center gap-4">
          <input type="checkbox" class="w-5 h-5" />
          <div class="flex-1">
            <h3 class="text-sm font-medium text-[#2D2D2D]">
              任务标题
            </h3>
            <p class="text-xs text-[#6B6B6B] mt-1">
              任务描述
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-[#6B6B6B]">
              标签
            </span>
            <button class="text-[#6B6B6B] hover:text-[#2D2D2D]">
              <i class="i-lucide-more-vertical w-4 h-4"></i>
            </button>
          </div>
        </div>

        <!-- 任务项4 -->
        <div class="bg-white rounded-xl shadow-sm p-5 h-[72px] flex items-center gap-4">
          <input type="checkbox" class="w-5 h-5" />
          <div class="flex-1">
            <h3 class="text-sm font-medium text-[#2D2D2D]">
              任务标题
            </h3>
            <p class="text-xs text-[#6B6B6B] mt-1">
              任务描述
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-[#6B6B6B]">
              标签
            </span>
            <button class="text-[#6B6B6B] hover:text-[#2D2D2D]">
              <i class="i-lucide-more-vertical w-4 h-4"></i>
            </button>
          </div>
        </div>
      </div>
    </main>

    <!-- 抽屉（可选，根据 UI 设计） -->
    <div v-if="showDrawer" class="w-[400px] bg-white shadow-lg h-screen">
      <!-- 抽屉内容 -->
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SideBar from '@/components/SideBar.vue'

const showDrawer = ref(false)
// 业务逻辑不用管
</script>
