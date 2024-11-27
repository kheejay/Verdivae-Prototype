<template>
    <div class="fixed bottom-0 py-1 border-t-2 border-[#73cb54] w-full px-1 bg-white" style="box-shadow: 0px -5px 5rem #88ea63;">
        <div class="w-full flex bg-gradient-to-b from-[#88EA63] to-[#5AA63D] h-[4.5rem] rounded-full relative items-center justify-between sm:justify-center sm:gap-20 px-6 sm:px-12">
            <HomeWhite @mouseup="goTo('Home')" class="h-[2.5rem] sm:h-auto active:scale-125 duration-200" />
            <LeaderboardWhite @mouseup="goTo('Leaderboards')" class="h-[2.5rem] z-[2] sm:h-auto active:scale-125 duration-200"/>
            <div class="relative">
                <div v-if="loadCam" class="w-max h-max left-1/2 transform -translate-x-1/2 -top-[5rem] absolute flex items-center justify-center">
                    <img src="/src/assets/images/propeller.png" alt="" class="w-[7rem] h-auto opacity-100 animate-spin">
                </div>
                <EarthButton @click="handleOpenCam" class="h-max -translate-y-[2rem] w-[1.5rem] scale-[500%] active:scale-[700%] duration-200" />
            </div>
            <TerarriumWhite @mouseup="goTo('Terrarium')" class="h-[2.5rem] z-[2] sm:h-auto active:scale-125 duration-200"/>
            <NoProfileWhite @mouseup="goTo('Profile')" class="h-[2.5rem] sm:h-auto active:scale-125 duration-200"/>
        </div>
    </div>
</template>

<script setup>
import HomeWhite from '../components/icons/HomeWhite.vue';
import TerarriumWhite from './icons/TerarriumWhite.vue';
import EarthButton from '../components/EarthButton.vue'
import LeaderboardWhite from './icons/LeaderboardWhite.vue';
import NoProfileWhite from './icons/NoProfileWhite.vue';
import { useRouter } from 'vue-router';
import { useDebounceFn } from '@vueuse/core';
import { inject, ref } from 'vue';

const { openCam } = inject('state')

const router = useRouter()

const goTo = useDebounceFn((name) => {
    router.push({ name: name })   
})

const loadCam = ref(false)

const onLoadCam = useDebounceFn(() => {
    loadCam.value = true
    setTimeout(() => {
        loadCam.value = false
    }, 1500)
}, 150)

const handleOpenCam = () => {
    onLoadCam()
    setTimeout(() => {
        openCam()
    }, 1500) 
}
</script>