<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import type { OlympicsDetail } from '@/types'
import { detailCountry } from '@/stores/counter'

const olympicsdetail = ref<OlympicsDetail | null>(null)
const router = useRouter();

const { detail } = detailCountry()

var totalMedal = computed<number>(() => {
    const gold = Number(detail?.gold_medals ?? 0)
    const silver = Number(detail?.silver_medals ?? 0)
    const beonze = Number(detail?.bronze_medals ?? 0)

    return gold + silver + beonze;
});

const navigateCountryDetail = () => {
    router.push({
        name: 'event-detail-view', params: { id: detail?.id ?? 1 }
    });
}

const navigateToSportList = () => {
    router.push({
        name: 'event-olympicdetail-view', params: { id: detail?.id ?? 1 }
    });
}

olympicsdetail.value = detail;
</script>

<template>
    <div class="px-4 sm:px-8 space-y-6">
      <!-- Olympics Event Details Section -->
      <div class="p-4 rounded bg-white text-blue-500 shadow-md">
        <h2 class="text-xl sm:text-2xl font-bold">{{ olympicsdetail?.name }}</h2>
        <p class="text-sm sm:text-base mt-2">
          Welcome to the {{ olympicsdetail?.name }} detail page. Explore the details and sports involved in this grand event.
        </p>
        <div class="flex flex-col sm:flex-row sm:space-x-4 space-y-2 sm:space-y-0 mt-4">
          <button class="bg-blue-500 text-white hover:bg-blue-100 rounded px-4 py-2 transition-colors duration-200"
            @click="navigateCountryDetail">
            {{ detail?.name }} Details
          </button>
          <button class="bg-blue-500 text-white hover:bg-blue-100 rounded px-4 py-2 transition-colors duration-200"
            @click="navigateToSportList">
            Sport List
          </button>
        </div>
      </div>
  
      <!-- Country Details Section -->
      <div class="bg-blue-500 text-white p-4 rounded-lg flex flex-col sm:flex-row items-center justify-between shadow-md">
        <div>
          <h2 class="text-xl sm:text-2xl font-bold">{{ detail?.name }}</h2>
          <p class="text-sm">{{ detail?.symbol }}</p>
        </div>
        <div class="mt-4 sm:mt-0">
          <country-flag :country="detail?.symbol" size='big' class="h-12 w-auto" />
        </div>
      </div>
  
      <!-- Medal Count Section -->
      <div class="bg-blue-100 p-4 rounded-lg shadow-md">
        <h2 class="text-xl sm:text-2xl font-bold mb-4">Medal Count</h2>
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div class="bg-yellow-100 text-center py-6 sm:py-8 rounded-lg">
            <p class="text-2xl sm:text-4xl font-bold">{{ detail?.gold_medals }}</p>
            <p class="text-gray-500">Gold</p>
          </div>
          <div class="bg-gray-200 text-center py-6 sm:py-8 rounded-lg">
            <p class="text-2xl sm:text-4xl font-bold">{{ detail?.silver_medals }}</p>
            <p class="text-gray-500">Silver</p>
          </div>
          <div class="bg-orange-100 text-center py-6 sm:py-8 rounded-lg">
            <p class="text-2xl sm:text-4xl font-bold">{{ detail?.bronze_medals }}</p>
            <p class="text-gray-500">Bronze</p>
          </div>
          <div class="bg-blue-200 text-center py-6 sm:py-8 rounded-lg">
            <p class="text-2xl sm:text-4xl font-bold">{{ totalMedal }}</p>
            <p class="text-gray-500">Total</p>
          </div>
        </div>
      </div>
  
      <!-- Router View for Additional Content -->
      <RouterView />
    </div>
  </template>
  

<style>
.icon-country-detail {
    color: blue;
    font-size: 30px;
}
</style>