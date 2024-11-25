<template>
    <div class="w-full h-fit px-9">
        <div class="w-full">
            <div class="w-full text-start text-3xl font-bold pt-12 pb-8">
                HOME
            </div>
            <div class="flex justify-center gap-8">
                <HomeGenericCards v-for="x, index in 3" :key="index" />
            </div>
        </div>
        <div class="w-full">
            <div class="w-full text-start text-3xl font-bold pt-12 pb-8">
                Recent Updates
            </div>
            <div class="flex justify-center gap-2">
                <HomeRecentUpdatesCard1 />
                <HomeRecentUpdatesCard2 />
                <HomeRecentUpdatesCard1 />
                <HomeRecentUpdatesCard2 />
            </div>
        </div>
        <div class="w-full pb-20">
            <div class="w-full text-start text-3xl font-bold pt-12 pb-8">
                Trending
            </div>
            <div class="flex justify-center gap-2">
                <HomeTrendingCard1 />
                <HomeTrendingCard2 />
                <HomeTrendingCard1 />
                <HomeTrendingCard2 />
            </div>
        </div>
    </div>
</template>

<script setup>
import HomeGenericCards from '../components/Home/HomeGenericCards.vue';
import HomeRecentUpdatesCard1 from '../components/Home/HomeRecentUpdatesCard1.vue';
import HomeRecentUpdatesCard2 from '../components/Home/HomeRecentUpdatesCard2.vue';
import HomeTrendingCard1 from '../components/Home/HomeTrendingCard1.vue';
import HomeTrendingCard2 from '../components/Home/HomeTrendingCard2.vue';
</script>