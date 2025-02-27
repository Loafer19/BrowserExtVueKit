import Home from '@/pages/Home.vue'
import Template from '@/pages/_Template.vue'
import { inject } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'

const router = createRouter({
    history: createMemoryHistory(),
    routes: [
        {
            path: '/',
            component: Template,
            children: [
                {
                    path: '/',
                    name: 'home',
                    component: Home,
                },
                {
                    path: '/about',
                    name: 'about',
                    component: () => import('@/pages/About.vue'),
                },
                {
                    path: '/profile',
                    name: 'profile',
                    component: () => import('@/pages/About.vue'),
                    meta: {
                        needAuth: true,
                    },
                },
            ],
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/pages/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/pages/Register.vue'),
        },
    ],
})

router.beforeEach(async (to, from, next) => {
    const state = inject('state')

    if (to.meta.needAuth && !state.token) {
        return next({ name: 'login' })
    }

    return next()
})

export default router
