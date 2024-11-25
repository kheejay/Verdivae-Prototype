<template>
    <div class="w-full flex items-center py-20 flex-col gap-20">
        <div class="w-[40rem] h-[5rem] bg-custom-gradient rounded-[1.75rem] border border-c2 border-opacity-40 flex relative">
            <MascotLogo class="absolute -left-[4rem] top-1/2 -translate-y-1/2" />
            <p class="w-3/5 text-3xl font-bold h-full flex items-center justify-end">User Rank 1</p>
            <p class="h-full w-1/3 text-2xl flex items-center justify-center">1005</p>
            <Crown class="absolute -right-[1.5rem] -top-[5.5rem]" />
        </div>
        <div>
            <div v-for="x of 6" :key="x" class="w-[32rem] h-[5rem] bg-custom-gradient rounded-[1.75rem] border border-c2 border-opacity-40 flex relative mt-6">
                <p v-if="x === 1" class="absolute -top-[1.5rem] left-[11.5rem]">User Name</p>
                <p v-if="x === 1" class="absolute -top-[1.5rem] right-[3.5rem]">Prosperity Value</p>
                <MascotLogoWithHat class="absolute -left-[4rem] top-1/2 -translate-y-1/2" />
                <p class="w-3/5 text-3xl font-bold h-full flex items-center justify-end">User Rank {{x}}</p>
                <p class="h-full w-1/3 text-2xl flex items-center justify-center">100{{6-x}}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import Crown from "../components/icons/Crown.vue";
import MascotLogo from "../components/icons/MascotLogo.vue";
import MascotLogoWithHat from '../components/icons/MascotLogoWithHat.vue'
</script>