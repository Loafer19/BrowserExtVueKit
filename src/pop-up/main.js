import '@/assets/main.css'
import Skeleton from '@/pop-up/App.vue'
import router from '@/router'
import state from '@/services/state'
import { createApp } from 'vue'

createApp(Skeleton).use(router).provide('state', state).mount('body')
