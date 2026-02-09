<template>
  <div class="w-full">
    <div class="text-center py-12">
      <h1 class="text-5xl mb-4 bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
        Welcome to Home
      </h1>
      <p class="text-xl text-gray-600 mb-12">
        这是一个使用 UnoCSS 的示例页面
      </p>
      <div class="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-8 mt-12 px-4">
        <div class="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-indigo-500 mb-4 text-xl font-semibold">特性 1</h3>
          <p class="text-gray-600 leading-relaxed">
            这是第一个特性卡片，展示了 UnoCSS 的样式效果。
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-indigo-500 mb-4 text-xl font-semibold">特性 2</h3>
          <p class="text-gray-600 leading-relaxed">
            这是第二个特性卡片，悬停时会向上移动并显示阴影效果。
          </p>
        </div>
        <div class="bg-white p-8 rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
          <h3 class="text-indigo-500 mb-4 text-xl font-semibold">特性 3</h3>
          <p class="text-gray-600 leading-relaxed">
            这是第三个特性卡片，使用网格布局自动适应屏幕大小。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../utils/superbase'
import { onMounted } from 'vue'

async function getPosts() {
  const { data: posts, error } = await supabase
    .from('post')
    .select('*')
  return posts
}

onMounted(() => {
  getPosts()
})
</script>
