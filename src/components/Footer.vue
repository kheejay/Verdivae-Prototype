<template>
    <footer class="w-screen h-fit bg-c1"> 
        <div class="flex p-8 justify-between w-full">
            <div class="flex">
                <MascotLogo class="w-[7rem] min-w-[7rem]" />
                <div>
                    <LogoAsName class="h-[4rem] mt-2.5 w-max"/>
                    <p class="text-xl w-full text-center">TAGLINE</p>
                </div>
            </div>
            <div class="flex">
                <div class="w-[16rem] text-center">
                    <p class="text-2xl font-bold py-2">Company</p>
                    <p class="text-lg cursor-pointer hover:underline">About Us</p>
                    <p class="text-lg cursor-pointer hover:underline">Our Services</p>
                    <p class="text-lg cursor-pointer hover:underline">Privacy Policy</p>
                </div>
                <div class="w-[16rem] text-center">
                    <p class="text-2xl font-bold py-2">Get Help</p>
                    <p class="text-lg cursor-pointer hover:underline">FAQs</p>
                    <p class="text-lg cursor-pointer hover:underline">Contact Us</p>
                </div>
            </div>
        </div>
        <div class="py-2 mt-12 text-center">
            © 2024 Technopremiums. All rigths reserved
        </div>
    </footer>
</template>

<script setup> 
import LogoAsName from "./icons/LogoAsName.vue";
import MascotLogo from "./icons/MascotLogo.vue";
</script>