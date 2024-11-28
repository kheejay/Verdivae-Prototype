<template>
	<TransitionGroup 
		enter-active-class="transition-opacity ease-out duration-300" 
		enter-from-class="opacity-0" 
		enter-to-class="opacity-100" 
		leave-active-class="transition-opacity ease-in duration-300" 
		leave-from-class="opacity-100" 
		leave-to-class="opacity-0" v-if="!onCam">
		<Header />
			<RouterView />
		<Footer class="hidden lg:block" />
		<FooterMobile class="lg:hidden" />
	</TransitionGroup>
	<Camera v-if="onCam" :resolution="resolution" autoplay
      style="position: fixed; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;">
	  <div class="w-screen h-screen z-[2] bg-image fixed top-0 left-0">
		  <div class="absolute bottom-[1.5rem] left-[4.5rem]">
			  <div v-if="preLoad" class="w-max h-max left-1/2 transform -translate-x-1/2 top-[0.25rem] absolute flex items-center justify-center">
				  <img src="/src/assets/images/propeller.png" alt="" class="w-[7rem] h-auto opacity-100 animate-spin">
			  </div>
			  <EarthButton @click="preLoadExit" class="w-[1.5rem] scale-[500%] active:scale-[700%] duration-200 " />
		  </div>
	  </div>
	</Camera>
	<Transition 
		enter-active-class="transition-opacity ease-out duration-300" 
		enter-from-class="opacity-0" 
		enter-to-class="opacity-100" 
		leave-active-class="transition-opacity ease-in duration-300" 
		leave-from-class="opacity-100" 
		leave-to-class="opacity-0">
		<div v-if="readyOpenControl" class="fixed z-[3] w-screen h-screen top-0 left-0 bg-white flex items-center justify-center text-amber-500 flex-col">
			<p>{{ messagePrefix }}</p><p class="font-bold text-green-800 text-2xl">{{ userAliases[Math.floor(Math.random() * userAliases.length)] + "!"}}</p>
		</div>
  	</Transition>  
	<Transition enter-active-class="transition ease-out duration-[3000ms]" enter-from-class="translate-x-full"
	  	enter-to-class="translate-x-0" leave-active-class="transition ease-in duration-[3000ms]"
	  	leave-from-class="translate-x-0" leave-to-class="translate-x-full">
	  	<div v-show="readyOpen" :class="`w-[75vw] ${ readyOpenControl ? 'z-[4] opacity-100' : 'z-[-1] opacity-0'} top-0 h-screen right-full fixed`">
			<img src="/src/assets/images/fogLeft.png" alt="" class="w-screen h-screen scale-[300%]">
		</div>
	</Transition>
	<Transition enter-active-class="transition ease-out duration-[3000ms]" enter-from-class="-translate-x-full"
	  	enter-to-class="translate-x-0" leave-active-class="transition ease-in duration-[3000ms]"
	  	leave-from-class="translate-x-0" leave-to-class="-translate-x-full">
	  	<div v-show="readyOpen" :class="`w-[75vw] ${ readyOpenControl ? 'z-[4] opacity-100' : 'z-[-1] opacity-0'} top-0 h-screen left-full fixed`">
			<img src="/src/assets/images/fogRight.png" alt="" class="w-screen h-screen scale-[300%]">
		</div>
	</Transition>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import FooterMobile from './components/FooterMobile.vue';
import { provide, ref } from 'vue';
import Camera from "simple-vue-camera";
import EarthButton from './components/EarthButton.vue';
import { useDebounceFn } from '@vueuse/core';

const resolution = ref({ width: 320, height: 1920 });

const onCam = ref(false)
const readyOpen = ref(false)
const readyOpenControl = ref(false)
const messagePrefix = ref('')
const userAliases = ref([
  "EcoRanger",
  "BiomeCrafter",
  "ARborist",
  "TerraNomad",
  "EcoSeeker",
  "BioWarden",
  "GreenGuardian",
  "EcoVirtuoso",
  "HoloNaturalist",
  "EarthShaper",
  "HabitatHero",
  "NatureMorpher",
  "GaiaExplorer",
  "FloraFuser",
  "FaunaForge"
])

const openCam = () => {
	messagePrefix.value = 'Welcome back'
	readyOpen.value = true;
	readyOpenControl.value = true
	onCam.value = true
	setTimeout(() => {
		readyOpenControl.value = false
	}, 3000)
}

const closeCam = useDebounceFn(() => {
	messagePrefix.value = 'Goodbye'
	preLoad.value = false
	readyOpenControl.value = true
	readyOpen.value = false
	onCam.value = false
	setTimeout(() => {
		readyOpenControl.value = false
	}, 3000)
}, 1500)

const preLoad = ref(false)

const preLoadExit = (() => {
	preLoad.value = true
	closeCam()
})

provide('state', {
	openCam
})
</script>

<style scoped>
.bg-image {
    background-image: url('/src/assets/images/cameraFrame.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
</style>