<script setup lang="ts">
// import { RouterLink, useRoute, useRouter } from 'vue-router';
// import { ref } from 'vue';
import NavbarHomeView from './components/NavbarHomeView.vue';



// const pageSizes = [2, 4, 6, 8, 10];
// const pageSize = ref(pageSizes[1]);
// const router = useRouter();
// const route = useRoute();

// const updatePageSize = () => {
//   router.push({
//     name: 'Event-List-View',
//     query: { ...route.query, pageSize: pageSize.value, page: 1 }
//   });
// };
</script>

<template>


  <header >
     
 
    <NavbarHomeView />       

  
 <!-- <nav>
   <RouterLink :to="{ name: 'Event-List-View', query:{ pageSize: pageSize} }">Home</RouterLink>
 </nav> -->
 

</header>    

 <main>
 <!-- <div class="flex justify-center items-center"> 
    <div class="bg-gray-100 p-4 rounded-md"> 
      <label for="page-size">Events per page</label>
    <select id="page-size" v-model="pageSize" @change="updatePageSize">
      <option v-for="size in pageSizes" :key="size" :value="size">{{ size }}</option>
    </select>
  </div>
</div>  -->
  <RouterView />
 </main>
  
  
    
</template>

<style>
#layout {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
nav {
  padding: 30px;
}
nav a {
  font-weight: bold;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px
}
</style>
