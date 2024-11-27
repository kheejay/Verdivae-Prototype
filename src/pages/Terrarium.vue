<template>
    <div class="w-full h-fit px-2 lg:px-9">
        <div class="w-full">
            <div class="w-full text-3xl font-bold pt-12 pb-8 flex justify-start items-center">
                <CatPaw class="w-[3.5rem] mr-2.5" />
                Your Animals
            </div>
            <div class="flex justify-center gap-2 overflow-x-scroll no-scrollbar">
                <YourAnimals1 />
                <YourAnimals2 />
                <YourAnimals3 />
                <YourAnimals4 />
            </div>
        </div>
        <div class="w-full">
            <div class="w-full text-3xl font-bold pt-12 pb-8 flex justify-start items-center gap-2">
                <Ecosystem class="w-[3.5rem] mr-2" />
                Ecosystem
            </div>
            <div class="flex justify-center gap-2 overflow-x-scroll no-scrollbar">
                <Ecosystem1 />
                <Ecosystem2 />
                <Ecosystem3 />
                <Ecosystem4 />
            </div>
        </div>
        <div class="w-full">
            <div class="w-full text-3xl font-bold pt-12 pb-8 flex justify-start items-center gap-2">
                <Weather class="w-[3.5rem] mr-2" />
                Visual Effects
            </div>
            <div class="flex justify-center gap-2 overflow-x-scroll no-scrollbar">
                <VisualEffects1 />
                <VisualEffects2 />
                <VisualEffects3 />
                <VisualEffects4 />
            </div>
        </div>
        <div class="w-full pb-40">
            <div class="w-full text-3xl font-bold pt-12 pb-8 flex justify-start items-center gap-2">
                <Behavior class="w-[3.5rem] mr-2" />
                Behavior
            </div>
            <div class="flex justify-center gap-2 overflow-x-scroll no-scrollbar">
                <Behavior1 />
                <Behavior2 />
                <Behavior3 />
                <Behavior4 />
            </div>
        </div>
    </div>
</template>

<script setup>
import CatPaw from '../components/icons/CatPaw.vue'
import Ecosystem from '../components/icons/Ecosystem.vue'
import Weather from '../components/icons/Weather.vue'
import Behavior from '../components/icons/Behavior.vue'
import Ecosystem1 from '../components/Terrarium/Ecosystem1.vue'
import Ecosystem2 from '../components/Terrarium/Ecosystem2.vue'
import Ecosystem3 from '../components/Terrarium/Ecosystem3.vue'
import Ecosystem4 from '../components/Terrarium/Ecosystem4.vue'
import YourAnimals1 from '../components/Terrarium/YourAnimals1.vue'
import YourAnimals2 from '../components/Terrarium/YourAnimals2.vue'
import YourAnimals3 from '../components/Terrarium/YourAnimals3.vue'
import YourAnimals4 from '../components/Terrarium/YourAnimals4.vue'
import VisualEffects1 from '../components/Terrarium/VisualEffects1.vue'
import VisualEffects2 from '../components/Terrarium/VisualEffects2.vue'
import VisualEffects3 from '../components/Terrarium/VisualEffects3.vue'
import VisualEffects4 from '../components/Terrarium/VisualEffects4.vue'
import Behavior1 from '../components/Terrarium/Behavior1.vue'
import Behavior2 from '../components/Terrarium/Behavior2.vue'
import Behavior3 from '../components/Terrarium/Behavior3.vue'
import Behavior4 from '../components/Terrarium/Behavior4.vue'
</script>