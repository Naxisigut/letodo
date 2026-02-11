<template>
  <div class="min-h-screen bg-[#F7F6F3] flex items-center justify-center">
    <div class="bg-white rounded-2xl w-[420px]" style="padding: 48px 40px; gap: 24px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.024);">
      <!-- 登录板块 -->
      <div class="flex flex-col gap-24px">
        <template v-if="isLoginMode" >
          <!-- 标题组 -->
          <div class="flex flex-col gap-2 items-center" style="gap: 8px;">
            <h1 class="text-[40px] font-medium text-[#2D2D2D] tracking-[-1px] text-center">
              欢迎回来
            </h1>
            <p class="text-[14px] text-[#6B6B6B] text-center">
              使用您的邮箱登录
            </p>
          </div>
  
          <!-- 邮箱输入 -->
          <div class="flex flex-col" style="gap: 8px;">
            <label class="text-[12px] font-medium text-[#8E8E93]">
              邮箱
            </label>
            <div class="flex items-center bg-[#FAFAF8] rounded-[10px] h-12" style="gap: 12px; padding: 0 16px;">
              <i class="i-lucide-mail w-5 h-5 text-[#8E8E93]" style="width: 20px; height: 20px;"></i>
              <input
                v-model="loginForm.email"
                type="email"
                placeholder="请输入您的邮箱"
                class="flex-1 bg-transparent text-[13px] text-[#8E8E93] outline-none border-none"
              />
            </div>
          </div>
  
          <!-- 密码输入 -->
          <div class="flex flex-col" style="gap: 8px;">
            <label class="text-[12px] font-medium text-[#8E8E93]">
              密码
            </label>
            <div class="flex items-center bg-[#FAFAF8] rounded-[10px] h-12" style="gap: 12px; padding: 0 16px;">
              <i class="i-lucide-lock w-5 h-5 text-[#8E8E93]" style="width: 20px; height: 20px;"></i>
              <input
                v-model="loginForm.password"
                type="password"
                placeholder="请输入您的密码"
                class="flex-1 bg-transparent text-[13px] text-[#8E8E93] outline-none border-none"
              />
            </div>
          </div>
  
          <!-- 登录按钮 -->
          <button
            @click="handleLog"
            class="bg-primary text-white rounded-[10px] h-12 w-full flex items-center justify-center text-[13px] font-semibold hover:opacity-90 transition-opacity"
            style="padding: 0 22px;"
          >
            登录
          </button>
  
          <!-- 注册链接 -->
          <div class="flex items-center justify-center" style="gap: 4px;">
            <span class="text-[13px] text-[#6B6B6B]">
              还没有账号？
            </span>
            <button
              @click="switchToReg"
              class="text-[13px] font-semibold text-primary hover:underline bg-transparent"
            >
              立即注册
            </button>
          </div>
        </template>
        <template v-else >
          <!-- 标题组 -->
          <div class="flex flex-col gap-2 items-center" style="gap: 8px;">
            <h1 class="text-[40px] font-medium text-[#2D2D2D] tracking-[-1px] text-center">
              创建账号
            </h1>
            <p class="text-[14px] text-[#6B6B6B] text-center">
              使用邮箱注册新账号
            </p>
          </div>
  
          <!-- 邮箱输入 -->
          <div class="flex flex-col" style="gap: 8px;">
            <label class="text-[12px] font-medium text-[#8E8E93]">
              邮箱
            </label>
            <div class="flex items-center bg-[#FAFAF8] rounded-[10px] h-12" style="gap: 12px; padding: 0 16px;">
              <i class="i-lucide-mail w-5 h-5 text-[#8E8E93]" style="width: 20px; height: 20px;"></i>
              <input
                v-model="registerForm.email"
                type="email"
                placeholder="请输入您的邮箱"
                class="flex-1 bg-transparent text-[13px] text-[#8E8E93] outline-none border-none"
              />
            </div>
          </div>
  
          <!-- 密码输入 -->
          <div class="flex flex-col" style="gap: 8px;">
            <label class="text-[12px] font-medium text-[#8E8E93]">
              密码
            </label>
            <div class="flex items-center bg-[#FAFAF8] rounded-[10px] h-12" style="gap: 12px; padding: 0 16px;">
              <i class="i-lucide-lock w-5 h-5 text-[#8E8E93]" style="width: 20px; height: 20px;"></i>
              <input
                v-model="registerForm.password"
                type="password"
                placeholder="请设置密码（至少8位）"
                class="flex-1 bg-transparent text-[13px] text-[#8E8E93] outline-none border-none"
              />
            </div>
          </div>
  
          <!-- 确认密码输入 -->
          <div class="flex flex-col" style="gap: 8px;">
            <label class="text-[12px] font-medium text-[#8E8E93]">
              确认密码
            </label>
            <div class="flex items-center bg-[#FAFAF8] rounded-[10px] h-12" style="gap: 12px; padding: 0 16px;">
              <i class="i-lucide-lock w-5 h-5 text-[#8E8E93]" style="width: 20px; height: 20px;"></i>
              <input
                v-model="registerForm.confirmPassword"
                type="password"
                placeholder="请再次输入密码"
                class="flex-1 bg-transparent text-[13px] text-[#8E8E93] outline-none border-none"
              />
            </div>
          </div>
  
          <!-- 注册按钮 -->
          <button
            @click="handleReg"
            class="bg-primary text-white rounded-[10px] h-12 w-full flex items-center justify-center text-[13px] font-semibold hover:opacity-90 transition-opacity"
            style="padding: 0 22px;"
          >
            注册
          </button>
  
          <!-- 登录链接 -->
          <div class="flex items-center justify-center" style="gap: 4px;">
            <span class="text-[13px] text-[#6B6B6B]">
              已有账号？
            </span>
            <button
              @click="switchToLog"
              class="text-[13px] font-semibold text-primary hover:underline bg-transparent"
            >
              立即登录
            </button>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { supabase } from '../utils/superbase'
import { toast } from 'vue-sonner'
import { useRouter } from 'vue-router';

const router = useRouter()

const isLoginMode = ref(true)
const loginForm = ref({
  email: '',
  password: ''
})
const registerForm = ref({
  email: '',
  password: '',
  confirmPassword: ''
})

const switchToReg = () => isLoginMode.value = false
const switchToLog = () => isLoginMode.value = true

//#region 登录方法
const logLock = ref(false)
function handleLogLock(status) {
  if(status) {
    toast.dismiss()
    logLock.value = true
  }else{
    setTimeout(() => logLock.value = false, 1000)
  }
}
function resetLogForm() { 
  loginForm.value = {
    email: '',
    password: ''
  }
}
async function handleLog() {
  if(logLock.value) return
  handleLogLock(true)
  console.log('登录', loginForm.value)
  if(!loginForm.value.email || !loginForm.value.password) {
    toast.error('请填写完整信息')
    handleLogLock(false)
    return
  }
  toast.loading('登录中...')
  supabase.auth.signInWithPassword({
    email: loginForm.value.email,
    password: loginForm.value.password
  }).then((res) => {
    toast.dismiss()
    if(res.error) {
      toast.error('登录失败：' + res.error.message)
    }else{
      toast.success('登录成功！')
      router.push('/todo')
    }
  }).catch((err) => {
    toast.dismiss()
    console.log('err', {err});
    toast.error('登录失败，请稍后重试')
  }).finally(() => {
    handleLogLock(false)
  })
}
//#endregion


//#region 注册方法
const regLock = ref(false)
function handleRegLock(status) {
  if(status) {
    toast.dismiss()
    regLock.value = true
  }else{
    setTimeout(() => regLock.value = false, 1000)
  }
}
function resetRegForm() { 
  registerForm.value = {
    email: '',
    password: '',
    confirmPassword: ''
  }
}
function handleReg() {
  if(regLock.value) return
  handleRegLock(true)
  console.log('注册', registerForm.value)
  if(!registerForm.value.email || !registerForm.value.password || !registerForm.value.confirmPassword) {
    toast.error('请填写完整信息')
    handleRegLock(false)
    return
  }
  if(registerForm.value.password !== registerForm.value.confirmPassword) {
    toast.error('两次输入的密码不一致')
    handleRegLock(false)
    return
  }

  toast.loading('注册中...')
  supabase.auth.signUp({
    email: registerForm.value.email,
    password: registerForm.value.password
  }).then((res) => {
    toast.dismiss()
    if(res.error) {
      toast.error('注册失败：' + res.error.message)
    }else{
      // 直接成功，没有开启验证：跳转回登录页面
      const session = res.data.session // 会话
      const user = res.data.user // 用户
      if(session && user) {
        toast.success('注册成功！')
        resetRegForm()
        resetLogForm()
        switchToLog()
      } else {
        toast.error('注册失败，请稍后重试')
      }
    }
  }).catch((err) => {
    toast.dismiss()
    console.log('err', {err});
    toast.error('注册失败，请稍后重试')
  }).finally(() => {
    handleRegLock(false)
  })
}
//#endregion
</script>
