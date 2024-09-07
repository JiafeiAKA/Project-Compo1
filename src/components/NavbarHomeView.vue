<template>
    <header class="flex justify-between items-center bg-violet-500 shadow-md h-[80px] px-5 lg:px-24 relative z-10 p-10">
        <div class="font-extrabold text-blue-600 hover:text-blue-700 cursor-pointer text-xl  bg-white p-2 rounded-full">
            <router-link to="/"><i class="bi bi-code"></i>Medal Table</router-link>
        </div>
        <nav class="flex flex-col md:flex-row gap-4 md:gap-10 px-6 md:static absolute bg-white md:bg-transparent shadow-md md:shadow-none md:w-auto md:my-0 left-0 w-full 
        duration-500"
         :class="[ open ? 'top-0' : 'top-[-390%]']"
         @click="navigateToCheerup">
            <router-link to="/" class="text-slate-500 hover:text-slate-700 text-lg font-medium bg-white rounded-full p-4">Cheer Up !!!</router-link>
       
        </nav>
        <div class="text-4xl text black cursor-pointer md:hidden z-20" @click="menuOpen">
            <i :class="[open ? 'bi bi-x' : 'bi bi-list']"></i>
        </div>
    </header>
</template>

<script setup lang="ts">

import { RouterLink, useRouter } from 'vue-router';
import {ref} from 'vue';
const router = useRouter();
const open= ref(false);

const menuOpen = ()=>{
    open.value = !open.value
}

const navigateToCheerup=()=>{
  router.push({name : 'cheer-up'});
}


</script>

<style scoped>



</style>