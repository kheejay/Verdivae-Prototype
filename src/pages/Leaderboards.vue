<template>
    <div class="w-full flex items-center pt-20 pb-40 lg:pb-20 flex-col gap-12 sm:gap-20 text-green-950">
        <div class="w-full pl-16 pr-5 sm:pl-24 sm:pr-20">
            <div class="w-full mx-auto lg:w-[40rem] h-[4rem] sm:h-[5rem] bg-custom-gradient rounded-[1.75rem] border border-c2 border-opacity-40 flex relative">
                <video width="200" loop autoplay class="absolute -left-[3rem] -top-[5rem] z-[-1]">
                    <source src="/src/assets/GlowingStar.mp4" type="video/mp4" />
                  </video>
                <MascotGraduated class="absolute -left-[3rem] top-1/2 -translate-y-1/2 scale-125 sm:scale-150" />
                <p class="w-3/5 text-xl sm:text-2xl lg:text-3xl font-bold h-full flex items-center justify-end text-amber-400" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75)">Local Rank 1</p>
                <p class="h-full w-1/3 text-xl sm:text-2xl flex items-center font-bold justify-center text-amber-400" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75)">1005</p>
                <Crown class="absolute -right-[1.5rem] -top-[4.5rem] sm:-top-[5.5rem] sm:scale-100 scale-[60%]" />
            </div>
        </div>
        <div class="w-full pl-16 pr-6 sm:pl-24 sm:pr-20">
            <div v-for="x of 6" :key="x" class="w-full lg:w-[32rem] h-[3.5rem] sm:h-[5rem] bg-custom-gradient rounded-[1.75rem] border border-c2 border-opacity-40 flex relative mt-6 sm:mt-8 mx-auto">
                <MascotLogoWithHat v-if="[1, 2, 3].includes(x)" class="absolute -left-[3.55rem] lg:-left-[4rem] top-1/2 -translate-y-1/2 sm:scale-100 scale-[60%]" />
                <MascotLogoNoCollapse v-if="[4, 5, 6].includes(x)" class="absolute -left-[3.55rem] lg:-left-[4rem] top-1/2 -translate-y-1/2 sm:scale-100 scale-[60%]" />
                <div class="w-3/5 text-lg sm:text-2xl lg:text-3xl font-bold h-full flex items-center justify-end relative">Local Rank {{x + 1}}
                    <span v-if="x == 1" class="absolute -top-[1.5rem] pr-8 lg:pr-10 text-xs lg:text-base font-semibold">Username</span>
                </div>
                <div class="h-full w-1/3 text-lg sm:text-2xl flex items-center justify-center relative">
                    100{{6-x}}
                    <RankingUpArrow v-if="[1, 4].includes(x)" class="text-green-600 animate-pulse absolute scale-[175%] -right-[0.25rem] top-1/2 -translate-y-1/2" />
                    <RankingDownArrow v-if="x == 2" class="text-red-600 animate-pulse absolute scale-[175%] -right-[0.25rem] top-1/2 -translate-y-1/2" />
                    <Neutral v-if="x == 3 || x === 5 || x == 6" class="text-blue-600 animate-pulse w-[1rem] absolute scale-[175%] -right-[0.25rem] top-1/2 -translate-y-1/2" />
                    <span v-if="x == 1" class="absolute -top-[1.5rem] text-xs lg:text-base font-semibold text-nowrap">Prosperity Score</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import Crown from "../components/icons/Crown.vue";
import MascotGraduated from "../components/icons/MascotGraduated.vue";
import MascotLogoNoCollapse from "../components/icons/MascotLogoNoCollapse.vue";
import MascotLogoWithHat from '../components/icons/MascotLogoWithHat.vue'
import RankingDownArrow from "../components/icons/RankingDownArrow.vue";
import RankingUpArrow from "../components/icons/RankingUpArrow.vue";
import Neutral from '../components/icons/Neutral.vue'
</script>