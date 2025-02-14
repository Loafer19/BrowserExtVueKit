import '@/assets/main.css'
import Skeleton from '@/pop-up/App.vue'
import { createApp } from 'vue'
import router from '@/router'

createApp(Skeleton)
  .use(router)
  .mount('body')
