<script setup lang="ts">
import { defineProps, ref, onMounted } from 'vue'

import type { CountryDetail } from '@/types'
import CountryDetailService from '@/services/CountryDetailService'

import { useRoute, useRouter } from 'vue-router';
import { detailCountry } from '@/stores/counter';

const countrydetail = ref<CountryDetail | null>(null)


// const router = useRouter()
const route = useRoute();
const countryId = route.params.id as string;




onMounted(() => {
    // OlympicsDetailService.getOlympicsDetailById(parseInt(props.id))
    //     .then(response => {
    //         olympicsdetail.value = response.data
    //     })
    //     .catch((error) => {
    //         if (error.response && error.response.status === 404) {
    //             router.push({ name: '404-resource-view', params: { resource: 'event' } })
    //         } else {
    //             router.push({ name: 'network-error-view' })
    //         }
    //     })

    CountryDetailService.getCountryDetail(parseInt(countryId))
        .then(response => {
            countrydetail.value = response.data
        })
        .catch((error) => {
            console.error('There was an error fetching country details:', error)
        })
})
</script>

<template>
    <div class="bg-white shadow-md rounded-lg p-4 mx-auto max-w-md sm:max-w-lg lg:max-w-2xl">
        <div class="flex items-center justify-between mb-4">
            <h2 class="text-lg font-medium text-gray-900">CountryDetail</h2>
            <span class="text-sm text-gray-500">id: {{ countrydetail?.id }}</span>
        </div>
        <div class="grid grid-cols-1 gap-4">
            <div class="flex items-center">
                <i class="w-6 mr-2 text-gray-400 bi bi-bank2 icon-country-detail"></i>
                <p class="text-gray-700 px-2 sm:px-6">City Name: {{ countrydetail?.capital }}</p>
            </div>
            <div class="flex items-center">
                <i class="w-6 mr-2 text-gray-400 bi bi-people-fill icon-country-detail"></i>
                <p class="text-gray-700 px-2 sm:px-6">Population : {{ countrydetail?.population }}</p>
            </div>
            <div class="flex items-center">
                <i class="w-6 mr-2 text-gray-400 bi bi-card-text icon-country-detail"></i>
                <p class="text-gray-700 px-2 sm:px-6">Traditional Food : {{ countrydetail?.traditional_food }}</p>
            </div>
        </div>
    </div>
</template>


<style>
.icon-country-detail {
    color: blue;
    font-size: 30px;
}
</style>