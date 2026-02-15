<template>
  <div class="min-h-screen bg-[#F7F6F3] flex">
    <!-- 侧边栏 -->
    <SideBar />

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
import SideBar from '@/components/SideBar.vue'
// 业务逻辑不用管
</script>
