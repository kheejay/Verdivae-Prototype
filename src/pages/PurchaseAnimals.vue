<template>
    <div class="my-4 w-screen flex items-center justify-center flex-col">
        <p class="py-2 text-3xl lg:text-5xl tracking-widest font-bold text-amber-400 animate-pulse" style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.75)">{{ infoIndex == 0 ? 'Classic Lion' : infoIndex == 1 ? 'Classic Tiger' : 'Blue Butterflies'}}</p>
        <video v-show="infoIndex === 0" width="200" loop autoplay class="lg:w-[30rem] w-full h-auto">
            <source src="/src/assets/Lion.mp4" type="video/mp4" />
        </video>
        <video v-show="infoIndex === 1" width="200" loop autoplay class="lg:w-[30rem] w-full h-auto">
            <source src="/src/assets/tiger.mp4" type="video/mp4" />
        </video>
        <video v-show="infoIndex === 2" width="200" loop autoplay class="lg:w-[30rem] w-full h-auto">
            <source src="/src/assets/butterflies.mp4" type="video/mp4" />
        </video>
        <div class="w-full text-center text-2xl font-bold py-4">
            Php {{ infoIndex == 0 ? '19.00' : infoIndex == 1 ? '25.50' : '7.00' }}
        </div>
        <div class="w-full flex justify-center items-center gap-8 lg:gap-0">
            <ArrowLeft @click="previous" :class="`w-[2.5rem] h-auto hover:scale-125 active:scale-125 duration-200 lg:mx-[4rem] ${ infoIndex <= 0 && 'text-zinc-100' }`" />
            <button class="px-8 py-2 bg-black text-white text-lg lg:text-xl text-nowrap uppercase font-bold rounded-sm hover:bg-white hover:text-black duration-200 border-2 border-black active:scale-105">
                Buy Now
            </button>
            <ArrowRight @click="next" :class="`w-[2.5rem] h-auto hover:scale-125 active:scale-125 duration-200 lg:mx-[4.2rem] ${ infoIndex >= 2 && 'text-zinc-100' }`" />
        </div>
    </div>
</template>


<script setup>
import { ref } from 'vue';
import ArrowLeft from '../components/icons/ArrowLeft.vue'
import ArrowRight from '../components/icons/ArrowRight.vue'

const infoIndex = ref(1)

const next = () => {
    if(infoIndex.value < 2)  
        infoIndex.value += 1
}

const previous = () => {
    if(infoIndex.value > 0)  
        infoIndex.value -= 1
}

</script>