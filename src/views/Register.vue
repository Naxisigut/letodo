<template>
  <div class="min-h-screen bg-[#F7F6F3] flex items-center justify-center">
    <div class="bg-white rounded-2xl shadow-lg p-12 w-[420px] flex flex-col gap-6">
      <!-- 标题组 -->
      <div class="flex flex-col gap-2 items-center">
        <h1 class="text-[40px] font-medium text-[#2D2D2D] tracking-[-1px] text-center" style="font-family: 'Fraunces', serif;">
          创建账号
        </h1>
        <p class="text-sm text-[#6B6B6B] text-center" style="font-family: 'Plus Jakarta Sans', sans-serif;">
          使用邮箱注册新账号
        </p>
      </div>

      <!-- 邮箱输入 -->
      <div class="flex flex-col gap-2">
        <label class="text-xs font-medium text-[#8E8E93]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
          邮箱
        </label>
        <div class="flex items-center gap-3 bg-[#FAFAF8] rounded-[10px] h-12 px-4">
          <i class="i-lucide-mail w-5 h-5 text-[#8E8E93]"></i>
          <input
            type="email"
            placeholder="请输入您的邮箱"
            class="flex-1 bg-transparent text-sm text-[#8E8E93] outline-none"
            style="font-family: 'Plus Jakarta Sans', sans-serif;"
          />
        </div>
      </div>

      <!-- 密码输入 -->
      <div class="flex flex-col gap-2">
        <label class="text-xs font-medium text-[#8E8E93]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
          密码
        </label>
        <div class="flex items-center gap-3 bg-[#FAFAF8] rounded-[10px] h-12 px-4">
          <i class="i-lucide-lock w-5 h-5 text-[#8E8E93]"></i>
          <input
            type="password"
            placeholder="请设置密码（至少8位）"
            class="flex-1 bg-transparent text-sm text-[#8E8E93] outline-none"
            style="font-family: 'Plus Jakarta Sans', sans-serif;"
          />
        </div>
      </div>

      <!-- 确认密码输入 -->
      <div class="flex flex-col gap-2">
        <label class="text-xs font-medium text-[#8E8E93]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
          确认密码
        </label>
        <div class="flex items-center gap-3 bg-[#FAFAF8] rounded-[10px] h-12 px-4">
          <i class="i-lucide-lock w-5 h-5 text-[#8E8E93]"></i>
          <input
            type="password"
            placeholder="请再次输入密码"
            class="flex-1 bg-transparent text-sm text-[#8E8E93] outline-none"
            style="font-family: 'Plus Jakarta Sans', sans-serif;"
          />
        </div>
      </div>

      <!-- 注册按钮 -->
      <button class="bg-[#7C9070] text-white rounded-[10px] h-12 px-[22px] flex items-center justify-center text-sm font-semibold hover:opacity-90 transition-opacity" style="font-family: 'Plus Jakarta Sans', sans-serif;">
        注册
      </button>

      <!-- 登录链接 -->
      <div class="flex items-center justify-center gap-1">
        <span class="text-sm text-[#6B6B6B]" style="font-family: 'Plus Jakarta Sans', sans-serif;">
          已有账号？
        </span>
        <router-link to="/login" class="text-sm font-semibold text-[#7C9070] hover:underline" style="font-family: 'Plus Jakarta Sans', sans-serif;">
          立即登录
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
// 业务逻辑不用管
</script>
