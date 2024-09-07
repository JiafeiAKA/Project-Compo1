<script setup lang="ts">
import OlympicComponent from '@/components/OlympicComponent.vue';
import type { OlympicsDetail } from '@/types';
import { ref, onMounted, computed, watchEffect } from 'vue';
import OlympicsDetailService from '@/services/OlympicsDetailService';
import HeaderListComponent from '@/components/HeaderListComponent.vue';
import PagnitationComponent from '@/components/PagnitationComponent.vue';
import ChoosePageSizeComponent from '@/components/ChoosePageSizeComponent.vue';

const Olympics = ref<OlympicsDetail[] | null>(null);
const totalEvent = ref(0);

let page = computed<number>(() => props.page);
const pageSize = computed<number>(() => props.pageSize);

// const pageSizes = [2, 4, 6, 8, 10];
// const pageSize = ref(pageSizes[1]);
// var totalPage = computed<number>(() => Math.ceil(totalEvent.value / pageSize.value));



const props = defineProps({
  page: {
    type: Number,
    required: true
  },
  pageSize: {
    type: Number,
    required: true
  }
});

onMounted(() => {
  watchEffect(() => {
    Olympics.value = null;
    OlympicsDetailService.getOlympicsDetails(pageSize.value, page.value)
      .then((response) => {
        Olympics.value = response.data;
        totalEvent.value = parseInt(response.headers['x-total-count'], 10);
      })
      .catch((error) => {
        console.error('There was an error!', error);
      });
  });
});





async function fetchData() {
  try {
    const response = await OlympicsDetailService.getOlympicsDetails(pageSize.value, page.value);
    const data = await response.data;
    Olympics.value = data;
    totalEvent.value = parseInt(response.headers['x-total-count'], 10);

  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();






</script>

<template>

  <ChoosePageSizeComponent />


  <h1 class="flex justify-center items-center py-4">Olympics</h1>



  <div>
    <HeaderListComponent />
  </div>

  <div>
    <OlympicComponent v-for="olympic in Olympics" :key="olympic.id" :olympicsdetail="olympic" />

  </div>

  <div class="min-h-screen flex flex-col items-center">
    <footer class="py-4 fixed bottom-0  ">
      <PagnitationComponent :page="page" :pageSize="pageSize" />
    </footer>
  </div>






</template>




<style scoped></style>