<script setup lang="ts">
import { ref } from 'vue';


const pageSizes = [2, 4, 6, 8, 10];
const pageSize = ref(pageSizes[1])
import { useRouter, useRoute } from 'vue-router';
const router = useRouter();
const route = useRoute();

const updatePageSize = () => {

  router.push({
    name: 'Event-List-View',
    query: { ...route.query, pageSize: pageSize.value, page: 1 }
  });
};



</script>

<template>

  <div class="flex justify-center items-center">
    <div class="bg-gray-100 p-4 rounded-md">
      <label for="page-size">Events per page</label>
      <select id="page-size" v-model="pageSize" @change="updatePageSize">
        <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}</option>
      </select>
    </div>
  </div>
</template>



<style scoped></style>