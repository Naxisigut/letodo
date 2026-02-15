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
        :class="{ 'bg-[#7C9070]': route.path === '/todo' }"
      >
        <i class="i-lucide-check-square w-5 h-5 text-[#6B6B6B]"></i>
        <span class="text-sm text-[#2D2D2D]">
          今日待办
        </span>
      </router-link>
      <router-link
        to="/data-review"
        class="flex items-center gap-3 h-11 px-[14px] rounded-[10px]"
        :class="{ 'bg-[#7C9070]': route.path === '/data-review' }"
      >
        <i class="i-lucide-bar-chart-3 w-5 h-5 text-[#6B6B6B]"></i>
        <span class="text-sm text-[#2D2D2D]">
          数据复盘
        </span>
      </router-link>
    </div>

    <!-- 分类区块 -->
    <div class="flex flex-col gap-2 mt-4">
      <div class="flex items-center gap-2 h-11 px-2">
        <span class="text-sm font-medium text-[#2D2D2D]">
          分类
        </span>
      </div>
      <div class="flex flex-col gap-1">
        <!-- 分类项可以在这里动态添加 -->
      </div>
      <div class="flex flex-col gap-1 mt-1">
        <button
          type="button"
          class="flex items-center gap-2 h-9 px-[14px] rounded-lg text-left hover:bg-[#F5F5F5] transition-colors"
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
    </div>

    <!-- 标签区块 -->
    <div class="flex flex-col gap-2 mt-4">
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
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
