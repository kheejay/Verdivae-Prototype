import { createWebHistory, createRouter } from 'vue-router'
import Home from '../pages/Home.vue'
import Terrarium from '../pages/Terrarium.vue'
import Leaderboards from '../pages/Leaderboards.vue'
import Profile from '../pages/Profile.vue'
import PurchaseAnimals from '../pages/PurchaseAnimals.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:  [
        {
            path: '/',
            name: 'Home', 
            component: Home
        },
        {
            path: '/terrarium',
            name: 'Terrarium', 
            component: Terrarium
        },
        {
            path: '/leaderboards',
            name: 'Leaderboards', 
            component: Leaderboards
        },
        {
            path: '/profile',
            name: 'Profile', 
            component: Profile
        },
        {
            path: '/purchase',
            name: 'Purchase', 
            component: PurchaseAnimals
        },
    ]
})

export { router }