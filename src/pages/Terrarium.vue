<template>
    <div class="w-full h-fit px-9">
        <div class="w-full">
            <div class="w-full text-start text-3xl font-bold pt-12 pb-8">
                Your Assets
            </div>
            <div class="flex justify-center items-center gap-24">
                <div>
                    <CatPaw class="cursor-pointer active:scale-95 duration-200" />
                    <p class="w-full text-center">Critters</p>
                </div>
                <div>
                    <Ecosystem class="cursor-pointer active:scale-95 duration-200" />
                    <p class="w-full text-center">Ecosystem</p>
                </div>
                <div>
                    <Weather class="cursor-pointer active:scale-95 duration-200" />
                    <p class="w-full text-center">Weather</p>
                </div>
                <div>
                    <Behavior class="cursor-pointer active:scale-95 duration-200" />
                    <p class="w-full text-center">Behavior</p>
                </div>
            </div>
        </div>
        <div class="w-full">
            <div class="w-full text-3xl font-bold pt-12 pb-8 flex justify-start items-center">
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
        <div class="w-full">
            <div class="w-full text-3xl font-bold pt-12 pb-8 flex justify-start items-center gap-2">
                <TrendingAssets />
                Trending Assets
            </div>
            <div class="flex justify-center gap-2">
                <Assets1 />
                <Assets2/>
                <Assets1 />
                <Assets2/>
            </div>
        </div>
        <div class="w-full pb-20">
            <div class="w-full text-3xl font-bold pt-12 pb-8 flex justify-start items-center gap-2">
                <EnrichmentPass />
                EnrichmentPass
            </div>
            <div class="flex justify-center gap-2">
                <Assets1 />
                <Assets2/>
                <Assets1 />
                <Assets2/>
            </div>
        </div>
    </div>
</template>

<script setup>
import CatPaw from '../components/icons/CatPaw.vue'
import Ecosystem from '../components/icons/Ecosystem.vue'
import Weather from '../components/icons/Weather.vue'
import Behavior from '../components/icons/Behavior.vue'
import TerrariumPot from '../components/icons/TerrariumPot.vue'
import YourTerrarium1 from '../components/Terrarium/YourTerrarium1.vue'
import YourTerrarium2 from '../components/Terrarium/YourTerrarium2.vue'
import TrendingAssets from '../components/icons/TrendingAssets.vue'
import Assets1 from '../components/Terrarium/Assets1.vue'
import Assets2 from '../components/Terrarium/Assets2.vue'
import EnrichmentPass from '../components/icons/EnrichmentPass.vue'
</script>