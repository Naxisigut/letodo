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
          <span class="text-sm text-[#2D2D2D]">
            今日待办
          </span>
        </router-link>
        <router-link
          to="/data-review"
          class="flex items-center gap-3 h-11 px-[14px] rounded-[10px] hover:bg-gray-50 transition-colors"
          :class="{ 'bg-[#7C9070]': $route.path === '/data-review' }"
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

    <!-- 主内容区 -->
    <main class="flex-1 p-8 flex flex-col gap-6 max-w-[1200px]">
      <!-- 页面标题 -->
      <div class="flex flex-col gap-2">
        <h1 class="text-[32px] font-medium text-[#2D2D2D] tracking-[-0.5px]">
          数据复盘
        </h1>
        <p class="text-sm text-[#6B6B6B]">
          查看您的任务完成情况
        </p>
      </div>

      <!-- 今日完成统计卡片 -->
      <div class="bg-white rounded-2xl shadow-lg p-8 h-[120px] flex items-center gap-6">
        <div class="w-16 h-16 bg-[#E8F5E9] rounded-xl flex items-center justify-center">
          <i class="i-lucide-check-circle-2 w-8 h-8 text-[#7C9070]"></i>
        </div>
        <div class="flex flex-col gap-1">
          <div class="text-2xl font-semibold text-[#2D2D2D]">
            今日完成
          </div>
          <div class="text-sm text-[#6B6B6B]">
            已完成 0 个任务
          </div>
        </div>
      </div>

      <!-- 图表卡片 -->
      <div class="bg-white rounded-2xl shadow-lg p-8 h-[400px] flex flex-col gap-5">
        <h2 class="text-lg font-semibold text-[#2D2D2D]">
          近七日完成事件数量
        </h2>
        <div class="flex-1 bg-[#FAFAF8] rounded-xl p-6 flex items-center justify-center">
          <p class="text-sm text-[#6B6B6B]">
            图表区域（业务逻辑不用管）
          </p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
// 业务逻辑不用管
</script>
