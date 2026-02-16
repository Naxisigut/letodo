import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { Toaster } from 'vue-sonner'
import { createVfm } from 'vue-final-modal'
import ModalContent from '@/components/ModalContent.vue'

import 'virtual:uno.css'
import '@unocss/reset/tailwind.css' // 样式重置
import 'vue-sonner/style.css'
import 'vue-final-modal/style.css'
import './style.css'

const app = createApp(App)
app.use(router)
app.use(createVfm())
app.component('Toaster', Toaster)
app.component('ModalContent', ModalContent)
app.mount('#app')
