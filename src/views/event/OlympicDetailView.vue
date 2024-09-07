<script setup lang="ts">
import CardSport from '@/components/CardSport.vue';
import { detailCountry } from '@/stores/counter';
import type { Detail } from '@/types';


const { detail } = detailCountry()
const sports: Detail[] | undefined = detail?.detail;
</script>

<template>
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 my-10">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <CardSport v-for="sport in sports" v-bind:key="sport.name" :detail="sport" />
        </div>
    </div>
</template>

