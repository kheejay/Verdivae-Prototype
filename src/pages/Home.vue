<template>
    <div class="w-full lg:h-fit px-2 sm:px-9 overflow-scroll no-scrollbar pb-40 lg:pb-0">
        <div class="w-full">
            <div class="w-full text-start text-2xl sm:text-3xl font-bold pt-8 sm:pt-12 pb-4 sm:pb-8 text-green-900">
                HOME
            </div>
            <div class="flex justify-start gap-2 sm:gap-8 overflow-x-auto w-full no-scrollbar">
                <HomeGenericCards v-for="x, index in 4" :key="index" />
            </div>
        </div>
        <div class="w-full">
            <div class="w-full text-start text-2xl sm:text-3xl font-bold pt-8 sm:pt-12 pb-4 sm:pb-8 text-green-900">
                Recent Updates
            </div>
            <div class="flex justify-start gap-2 overflow-x-auto w-full no-scrollbar">
                <HomeRecentUpdatesCard1 />
                <HomeRecentUpdatesCard2 />
                <HomeRecentUpdatesCard1 />
                <HomeRecentUpdatesCard2 />
            </div>
        </div>
        <div class="w-full pb-20">
            <div class="w-full text-start text-2xl sm:text-3xl font-bold pt-8 sm:pt-12 pb-4 sm:pb-8 text-green-900">
                Trending
            </div>
            <div class="flex justify-start gap-2 overflow-x-scroll no-scrollbar">
                <HomeTrendingCard1 /> 
                <HomeTrendingCard2 />
                <HomeTrendingCard1 />
                <HomeTrendingCard2 />
            </div>
        </div>
        <!-- <MobileBg class="absolute w-full h-full top-0 left-0 z-[-1] sm:hidden" /> -->
    </div>
</template>

<script setup>
import HomeGenericCards from '../components/Home/HomeGenericCards.vue';
import HomeRecentUpdatesCard1 from '../components/Home/HomeRecentUpdatesCard1.vue';
import HomeRecentUpdatesCard2 from '../components/Home/HomeRecentUpdatesCard2.vue';
import HomeTrendingCard1 from '../components/Home/HomeTrendingCard1.vue';
import HomeTrendingCard2 from '../components/Home/HomeTrendingCard2.vue';
import MobileBg from '../components/MobileBg.vue';
</script>