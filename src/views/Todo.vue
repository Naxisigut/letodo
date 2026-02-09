<template>
  <div class="min-h-screen bg-[#F7F6F3] flex">
    <!-- 侧边栏 -->
    <aside class="w-[240px] bg-white shadow-sm h-screen flex flex-col gap-3 p-4">
      <!-- 搜索框 -->
      <div class="flex items-center gap-2 bg-white rounded-xl border border-[#E5E5E5] h-10 px-3 shadow-sm">
        <i class="i-lucide-search w-[18px] h-[18px] text-[#6B6B6B]"></i>
        <input
          type="text"
          placeholder="搜索任务..."
          class="flex-1 bg-transparent text-sm text-[#2D2D2D] outline-none"
          style="font-family: 'Plus Jakarta Sans', sans-serif;"
        />
      </div>

      <!-- 分隔线 -->
      <div class="h-px bg-[#E5E5E5]"></div>

      <!-- 菜单区域 -->
      <div class="flex flex-col gap-2 py-2 px-0">
        <router-link
          to="/todo"
          class="flex items-center gap-3 h-11 px-[14px] rounded-[10px] hover:bg-gray-50 transition-colors"
          :class="{ 'bg-[#7C9070]': $route.path === '/todo' }"
        >
          <i class="i-lucide-check-square w-5 h-5 text-[#6B6B6B]"></i>
          <span class="text-sm text-[#2D2D2D]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
            今日待办
          </span>
        </router-link>
        <router-link
          to="/data-review"
          class="flex items-center gap-3 h-11 px-[14px] rounded-[10px] hover:bg-gray-50 transition-colors"
          :class="{ 'bg-[#7C9070]': $route.path === '/data-review' }"
        >
          <i class="i-lucide-bar-chart-3 w-5 h-5 text-[#6B6B6B]"></i>
          <span class="text-sm text-[#2D2D2D]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
            数据复盘
          </span>
        </router-link>
      </div>

      <!-- 分类区块 -->
      <div class="flex flex-col gap-2 mt-4">
        <div class="flex items-center gap-2 h-11 px-2">
          <span class="text-sm font-medium text-[#2D2D2D]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
            分类
          </span>
        </div>
        <div class="flex flex-col gap-1">
          <!-- 分类项可以在这里动态添加 -->
        </div>
      </div>

      <!-- 标签区块 -->
      <div class="flex flex-col gap-2 mt-4">
        <div class="flex items-center gap-2 h-11 px-2">
          <span class="text-sm font-medium text-[#2D2D2D]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
            标签
          </span>
        </div>
        <div class="flex flex-wrap gap-2">
          <!-- 标签项可以在这里动态添加 -->
        </div>
      </div>
    </aside>

    <!-- 主内容区 -->
    <main class="flex-1 p-8 flex flex-col gap-6">
      <!-- 顶部行 -->
      <div class="flex items-center justify-between h-10">
        <h2 class="text-2xl font-medium text-[#2D2D2D]" style="font-family: 'Fraunces', serif;">
          今日待办
        </h2>
        <button class="bg-[#7C9070] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity" style="font-family: 'Plus Jakarta Sans', sans-serif;">
          添加任务
        </button>
      </div>

      <!-- 任务列表 -->
      <div class="flex flex-col gap-3 flex-1">
        <!-- 任务项1 -->
        <div class="bg-white rounded-xl shadow-sm p-5 h-[72px] flex items-center gap-4">
          <input type="checkbox" class="w-5 h-5" />
          <div class="flex-1">
            <h3 class="text-sm font-medium text-[#2D2D2D]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
              任务标题
            </h3>
            <p class="text-xs text-[#6B6B6B] mt-1" style="font-family: 'Plus Jakarta Sans', sans-serif;">
              任务描述
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-[#6B6B6B]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
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
            <h3 class="text-sm font-medium text-[#2D2D2D]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
              任务标题
            </h3>
            <p class="text-xs text-[#6B6B6B] mt-1" style="font-family: 'Plus Jakarta Sans', sans-serif;">
              任务描述
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-[#6B6B6B]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
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
            <h3 class="text-sm font-medium text-[#2D2D2D]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
              任务标题
            </h3>
            <p class="text-xs text-[#6B6B6B] mt-1" style="font-family: 'Plus Jakarta Sans', sans-serif;">
              任务描述
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-[#6B6B6B]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
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
            <h3 class="text-sm font-medium text-[#2D2D2D]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
              任务标题
            </h3>
            <p class="text-xs text-[#6B6B6B] mt-1" style="font-family: 'Plus Jakarta Sans', sans-serif;">
              任务描述
            </p>
          </div>
          <div class="flex items-center gap-2">
            <span class="text-xs text-[#6B6B6B]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
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

const showDrawer = ref(false)
// 业务逻辑不用管
</script>
