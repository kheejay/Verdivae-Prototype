<template>
    <div class="w-full">
        <div class="w-[44rem] bg-custom-gradient-to-top h-[26rem] mx-auto mt-[10rem] rounded-t-[5rem] relative">
            <NoProfileNav class="absolute w-[7rem] h-auto -top-[3.3rem] left-[0.9rem]" />
            <div class="w-full pl-[9rem] pt-9">
                <p class="text-[2rem] font-bold">Username</p>
                <p class="text-[2rem] font-light">Curious Biologist</p>
            </div>
            <div class="flex justify-center gap-4 mt-[6rem]">
                <div class="text-center w-[12rem]">
                    <p class="text-[1.75rem] font-bold">Posts</p>
                    <p class="text-[1.75rem] font-light tracking-wide">1003</p>
                </div>
                <div class="text-center w-[12rem]">
                    <p class="text-[1.75rem] font-bold">Followers</p>
                    <p class="text-[1.75rem] font-light tracking-wide">450K</p>
                </div>
                <div class="text-center w-[12rem]">
                    <p class="text-[1.75rem] font-bold">Following</p>
                    <p class="text-[1.75rem] font-light tracking-wide">32</p>
                </div>
            </div>
        </div>
        <div class="w-full pb-20 px-9">
            <div class="w-full text-3xl font-bold pt-4 pb-8 flex justify-start items-center">
                <TerrariumPot />
                Your Terrariums
            </div>
            <div class="flex justify-center gap-2">
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
import YourTerrarium1 from '../components/Terrarium/YourTerrarium1.vue';
import YourTerrarium2 from '../components/Terrarium/YourTerrarium2.vue';
</script>