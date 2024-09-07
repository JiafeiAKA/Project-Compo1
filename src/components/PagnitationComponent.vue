<template>
    
  <nav aria-label="Page navigation example">
  <ul class="inline-flex -space-x-px text-sm">

    <li>
     
     
      <RouterLink class="cursor-pointer  flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
       id="page-prev" :to="{ name: 'Event-List-View', query: { page: page > 1 ? page - 1 : page, pageSize: pageSize } }" rel="prev"  :is="page<=1" :event="page<=1 ? '' : 'click'">&#60; Prev</RouterLink>
    </li>
    
  
    <li v-for="index in totalPage" v-bind:key="index">
  <router-link :to="{ name: 'Event-List-View', query: { page: index, pageSize: pageSize } }" class="cursor-pointer flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 
 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"> 

    {{ index }}
  </router-link>
</li>

    <li>
   <RouterLink class="cursor-pointer  flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      id="page-next" :to="{ name: 'Event-List-View', query: { page: page < totalPage ? page + 1 : page, pageSize: pageSize } }" rel="next" >Next &#62;</RouterLink> 
      <!--  v-if="hasNextPage" -->
  
    </li>
  </ul>
</nav>

</template>

<script setup lang="ts">
import OlympicsDetailService from '@/services/OlympicsDetailService';
import { computed, onMounted, ref, watchEffect } from 'vue';


const totalEvent = ref(0);
let page = computed<number>(() => props.page);
const pageSize = computed<number>(() => props.pageSize);
var totalPage  =  computed<number>(() =>    Math.ceil(totalEvent.value / pageSize.value));

const hasNextPage = computed(() => {
  var total = Math.ceil(totalEvent.value / pageSize.value);  
  return page.value < total;
});


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




async function fetchData() {
  try {
    const response = await  OlympicsDetailService.getOlympicsDetails(pageSize.value, page.value);

    totalEvent.value = parseInt(response.headers['x-total-count'], 10);
       
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

fetchData();


</script>

<style  scoped>



</style>