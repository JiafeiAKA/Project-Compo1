<script setup lang="ts">
import { computed, defineProps, ref } from 'vue';
import type { Detail, OlympicsDetail } from '@/types';
import { RouterLink, useRouter, type RouteParams } from 'vue-router';
import { detailCountry } from '@/stores/counter';




const isShowDetail = ref(false);

const router = useRouter();


function showDetail() {
  isShowDetail.value = !isShowDetail.value;

}


const props = defineProps<{
  olympicsdetail: OlympicsDetail
}>();


const { setDetail, detail } = detailCountry();




function navigateToCountryDetail(d: OlympicsDetail) {
  setDetail(d)
  router.push({
    name: 'event-layout-view', params: { id: d.id }
  });
}



const details: Detail[] = props.olympicsdetail.detail;



</script>


<template>
  <div class="flex items-center border-b py-2 mx-4 md:mx-10 justify-between space-y-2 md:space-y-0">
    <div class="w-2/12 md:w-1/12 text-sm font-medium text-gray-900">{{ props.olympicsdetail.id }}</div>

    <div class="w-2/12 md:w-1/12 px-2">
      <!-- flag -->
      <country-flag :country="props.olympicsdetail.symbol" size='big' class="cursor-pointer"
        @click="navigateToCountryDetail(props.olympicsdetail)" />
    </div>

    <div class="w-4/12 md:w-3/12 px-2 text-base font-medium text-left">{{ props.olympicsdetail.name }}</div>

    <div class="w-2/12 md:w-1/12 text-md">{{ props.olympicsdetail.gold_medals }}</div>
    <div class="w-2/12 md:w-1/12 text-md">{{ props.olympicsdetail.silver_medals }}</div>
    <div class="w-2/12 md:w-1/12 text-md">{{ props.olympicsdetail.bronze_medals }}</div>
    
    <div class="w-2/12 md:w-1/12 text-md cursor-pointer" @click="showDetail">
      <i class="bi bi-plus-circle-fill icon-plus"></i>
    </div>
  </div>

  <div v-if="isShowDetail">
    <div class="flex items-center border-b py-2 mx-4 md:mx-10 justify-between bg-stone-400">
      <div class="w-4/12 md:w-[10%] px-2 text-sm">Name</div>
      <div class="w-2/12 md:w-[8%] px-2 text-sm">Gender</div>
      <div class="w-4/12 md:w-[10%] px-2 text-sm">Sport</div>
      <div class="w-2/12 md:w-[8%] px-2 text-sm">Medal</div>
    </div>

    <div v-for="detail in details" :key="detail.gender">
      <div class="flex items-center border-b py-2 mx-4 md:mx-10 justify-between">
        <div class="w-4/12 md:w-[10%] px-2 text-sm">{{ detail.name }}</div>
        <div class="w-2/12 md:w-[8%] px-2 text-sm">{{ detail.gender }}</div>
        <div class="w-4/12 md:w-[10%] px-2 text-sm">{{ detail.sport }}</div>
        <div class="w-2/12 md:w-[8%] px-2 text-sm">{{ detail.medal }}</div>
      </div>
    </div>
  </div>
</template>



<style scoped>
.icon-plus {
  color: blueviolet;
  font-size: 25px;
}
</style>
