<template>
    <header class="w-screen h-fit border sticky top-0 bg-white p-4 flex justify-end lg:justify-between z-[2]">
        <div class="gap-0 hidden lg:flex">
            <MascotLogo class="h-[6rem]" />
            <LogoAsName class="h-[6rem] -translate-x-8" />
        </div>
        <div class="flex w-full lg:w-max items-center gap-2.5 lg:gap-6 lg:pr-2.5">
            <input type="text" class="flex-grow h-[3rem] lg:h-[3.5rem] min-w-[5rem] rounded-full lg:text-green-900 border-2 lg:border-0 border-[#73cb54] bg-c1 lg:bg-empty focus:outline-none text-[1.5rem] py-4 px-4 lg:px-8 text-white placeholder:text-xl" placeholder="Search">
            <NoProfile @click="$router.push({ name: 'Profile' })" class="h-[3rem] lg:h-[3.5rem] w-[3rem] lg:w-[3.5rem] min-w-[3.5rem] cursor-pointer active:scale-95 duration-200" />
            <Burger @click="showSideBar" class="hidden lg:block cursor-pointer active:scale-95 duration-200 h-[3rem]" />
        </div>
    </header>
    <Transition enter-active-class="transition-opacity duration-500" enter-from-class="opacity-0"
        enter-to-class="opacity-[0.45]" leave-active-class="transition-opacity duration-300" 
        leave-from-class="opacity-[0.45]" leave-to-class="opacity-0">        
        <div v-if="openSideBar"  @click="hideSideBar" class="fixed w-screen h-screen top-0 left-0 bg-c2 opacity-45 z-[3]">
        </div>
    </Transition>
    <Transition enter-active-class="transition ease-out duration-500" enter-from-class="translate-x-full"
    enter-to-class="translate-x-0" leave-active-class="transition ease-in duration-300"
    leave-from-class="translate-x-0" leave-to-class="translate-x-full">
        <div v-if="openSideBar" class="w-[25rem] h-screen bg-empty fixed right-0 top-0 p-8 z-[3]">
            <div class="flex items-end">
                <NoProfile class="h-[3.75rem]" />   
                <div class="pl-2">
                    <p class="font-bold text-3xl leading-9">Username</p>
                    <p>Curios Biologist</p>
                </div>
            </div>
            <div class="w-full mt-8">
                <RouterLink :to="{ name: 'Home' }" @click="hideSideBar" :class="`flex h-[4rem] pl-4 items-center w-full  gap-4 text-2xl hover:bg-nav-active font-semibold ${ $route.name === 'Home' && 'bg-nav-active'}`">
                    <Home class="h-[2.25rem] w-[2.25rem]" />
                    Home
                </RouterLink>
                <RouterLink :to="{ name: 'Terrarium' }" @click="hideSideBar" :class="`flex h-[4rem] pl-4 items-center w-full  gap-4 text-2xl hover:bg-nav-active font-semibold ${ $route.name === 'Terrarium' && 'bg-nav-active'}`">
                    <Terarrium class="h-[2.25rem] w-[2.25rem]" />
                    Terrarium
                </RouterLink>
                <RouterLink :to="{ name: 'Leaderboards' }" @click="hideSideBar" :class="`flex h-[4rem] pl-4 items-center w-full  gap-4 text-2xl hover:bg-nav-active font-semibold ${ $route.name === 'Leaderboards' && 'bg-nav-active'}`">
                    <Leaderboard class="h-[2.25rem] w-[2.25rem]" />
                    Leaderboards
                </RouterLink>
                <RouterLink :to="{ name: 'Profile' }" @click="hideSideBar" :class="`flex h-[4rem] pl-4 items-center w-full  gap-4 text-2xl hover:bg-nav-active font-semibold ${ $route.name === 'Profile' && 'bg-nav-active'}`">
                    <NoProfileNav class="h-[2.25rem] w-[2.25rem]" />
                    Profile
                </RouterLink>
            </div>
        </div>
    </Transition>
</template>

<script setup>
import Burger from './icons/Burger.vue';
import NoProfile from './icons/NoProfile.vue';
import MascotLogo from './icons/MascotLogo.vue';
import LogoAsName from './icons/LogoAsName.vue';
import Home from './icons/Home.vue';
import Terarrium from './icons/Terarrium.vue';
import Leaderboard from './icons/Leaderboard.vue';
import NoProfileNav from './icons/NoProfileNav.vue';
import { ref } from 'vue';
import { useDebounceFn } from '@vueuse/core';
import { RouterLink } from 'vue-router';

const openSideBar = ref(false)

const showSideBar = useDebounceFn(() => {
    openSideBar.value = true
}, 150)

const hideSideBar = useDebounceFn(() => {
    openSideBar.value = false
}, 150)

</script>