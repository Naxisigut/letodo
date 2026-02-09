<template>
  <div class="about">
    <div class="about-content">
      <h1>关于本项目</h1>
      <div class="info-section">
        <h2>技术栈</h2>
        <ul class="tech-list">
          <li><strong>Vue 3</strong> - 渐进式 JavaScript 框架</li>
          <li><strong>Vue Router 4</strong> - 官方路由管理器</li>
          <li><strong>Vite</strong> - 下一代前端构建工具</li>
        </ul>
      </div>
      <div class="info-section">
        <h2>项目特性</h2>
        <ul class="tech-list">
          <li>✅ 单页应用（SPA）架构</li>
          <li>✅ 组件化开发</li>
          <li>✅ 路由管理</li>
          <li>✅ 现代化 UI 设计</li>
        </ul>
      </div>
      <div class="info-section">
        <h2>快速开始</h2>
        <div class="code-block">
          <code>npm install</code><br>
          <code>npm run dev</code>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 使用 Composition API
</script>

<style scoped>
.about {
  width: 100%;
}

.about-content {
  max-width: 800px;
  margin: 0 auto;
  background: white;
  padding: 3rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.about-content h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.info-section {
  margin-bottom: 2rem;
}

.info-section h2 {
  color: #667eea;
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.tech-list {
  list-style: none;
  padding-left: 0;
}

.tech-list li {
  padding: 0.5rem 0;
  color: #666;
  line-height: 1.8;
  padding-left: 1.5rem;
  position: relative;
}

.tech-list li::before {
  content: '▸';
  position: absolute;
  left: 0;
  color: #667eea;
}

.code-block {
  background: #f5f5f5;
  padding: 1.5rem;
  border-radius: 5px;
  border-left: 4px solid #667eea;
  font-family: 'Courier New', monospace;
}

.code-block code {
  color: #333;
  font-size: 0.9rem;
  line-height: 1.8;
}
</style>
