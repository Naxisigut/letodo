import { defineConfig, presetWind, presetIcons } from 'unocss'

export default defineConfig({
  presets: [
    presetWind(), // Tailwind CSS 兼容预设
    presetIcons({
      autoInstall: true, // 自动安装缺失的图标集
    }), // 图标预设
  ],
  // 可以在这里添加自定义规则、快捷方式等
  shortcuts: {
    // 示例：定义一些常用的快捷方式
    // 'btn': 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600 transition-colors',
    // 'btn-primary': 'px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-600',
    // 'btn-secondary': 'px-4 py-2 rounded bg-gray-500 text-white hover:bg-gray-600',
  },
  // 主题配置
  theme: {
    colors: {
      primary: 'var(--primary-color, #7C9070)', // 主题色
    },
  },
})
