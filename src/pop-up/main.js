import '@/assets/main.css'
import { createApp } from 'vue'
import Skeleton from '@/pop-up/App.vue'
import router from '@/router'
import state from '@/services/state'

createApp(Skeleton).use(router).provide('state', state).mount('body')
