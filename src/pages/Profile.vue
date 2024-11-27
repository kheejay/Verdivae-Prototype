<template>
    <div class="w-full">
        <div class="lg:w-[44rem] w-[90%] bg-custom-gradient-to-top h-[26rem] mx-auto mt-[10rem] rounded-t-[5rem] relative">
            <NoProfileNav class="absolute w-[5rem] lg:w-[7rem] h-auto -top-[2.25rem] lg:-top-[3.3rem] left-[0.9rem]" />
            <div class="w-full text-center lg:text-start lg:pl-[9rem] pt-9">
                <p class="text-[2rem] font-bold">Username</p>
                <p class="text-[2rem] font-light">Curious Biologist</p>
            </div> 
            <div class="flex justify-center mt-[4rem] lg:mt-[6rem] text-[1.25rem] lg:text-[1.75rem]">
                <div class="text-center w-1/3">
                    <p class="font-bold">Posts</p>
                    <p class="font-light tracking-wide">1003</p>
                </div>
                <div class="text-center w-1/3">
                    <p class="font-bold">Followers</p>
                    <p class="font-light tracking-wide">450K</p>
                </div>
                <div class="text-center w-1/3">
                    <p class="font-bold">Following</p>
                    <p class="font-light tracking-wide">32</p>
                </div>
            </div>
           
        </div>
        <div class="w-full pb-40 px-4 lg:px-9">
            <div class="w-full text-3xl font-bold pt-4 pb-8 flex gap-2 justify-center items-center">
                <ThumbsUp class="w-12 h-12" />
                Recent Posts
            </div>
            <div class="flex flex-col sm:flex-row justify-center items-center gap-2 overflow-y-scroll max-h-[24rem] sm:h-max no-scrollbar">
                <YourTerrarium1 />
                <YourTerrarium2 />
                <YourTerrarium1 />
                <YourTerrarium2 />
            </div>
        </div>
    </div>
</template>

<script setup>
import NoProfileNav from '../components/icons/NoProfileNav.vue'
import ThumbsUp from '../components/icons/ThumbsUp.vue';
import YourTerrarium1 from '../components/Terrarium/YourTerrarium1.vue';
import YourTerrarium2 from '../components/Terrarium/YourTerrarium2.vue';
</script>