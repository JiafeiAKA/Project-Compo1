<template>
  <div class="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 sm:p-8">
    <!-- Header -->
    <div class="text-center mb-10">
      <h1 class="text-4xl font-bold text-purple-700 mb-4">Choose Country</h1>
    </div>

    <!-- Form -->
    <div class="bg-white shadow-md rounded-lg p-8 w-full sm:w-3/4 lg:w-2/4 max-w-full lg:max-w-lg">
      <form @submit.prevent="submitComment">
        <div class="grid grid-cols-1 gap-6">
          <!-- Country Select -->
          <select 
            v-model="countryName" 
            @change="chooseCountry" 
            class="border border-gray-300 rounded-lg p-2 text-gray-700">
            <option v-for="country in countryDetail" :key="country.name" :value="country.name">
              {{ country.name }}
            </option>
          </select>

          <!-- Username Input -->
          <input 
            type="text" 
            placeholder="Username (Optional)" 
            v-model="userName" 
            class="border border-gray-300 rounded-lg p-2 text-gray-700" />

          <!-- Comment Textarea -->
          <textarea 
            placeholder="Write your comment" 
            v-model="comment" 
            class="border border-gray-300 rounded-lg p-2 text-gray-700 h-28 resize-none"></textarea>

          <!-- Warning Message -->
          <p v-if="warningMessage" class="text-red-500">{{ warningMessage }}</p>

          <!-- Submit Button -->
          <button
            type="submit"
            class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          >
            Submit
          </button>
        </div>
      </form>
    </div>

    <!-- Comments Section -->
    <div class="mt-10 w-full sm:w-3/4 lg:w-2/4 lg:max-w-lg">
      <ul>
        <li v-for="comment in filteredComments" :key="comment.comment" class="mb-4">
          <CommentCheerUpComponent 
            :username="comment.username" 
            :comment="comment.comment" 
            :timestamp="comment.timestamp"
            class="text-wrap"/>
        </li> 
      </ul>
    </div>
  </div>
</template>


  
  
  <script setup lang="ts">
  import OlympicsDetailService from '@/services/OlympicsDetailService'
  import type { CommentDetail, Comments, OlympicsDetail } from '@/types'
  import { useCounterStore, commentStore } from '@/stores/counter'
  import { computed, ref } from 'vue'
  import CommentCheerUpComponent from '@/components/CommentCheerUpComponent.vue'

  
  const countryDetail = ref<OlympicsDetail[] | null>(null)
  const countryName = ref('')
  const userName = ref('')
  const comment = ref('')
  const warningMessage = ref('')

  // const { count, increment } = useCounterStore();
  const { comments, addComment } = commentStore()
  
  const submitComment = () => {

    if (!comment.value) {
    warningMessage.value = "Please write a comment before submitting.";
    return;
  }

   warningMessage.value = ''
   
   const commentDetailV: CommentDetail = {
    comment: comment.value,
    username: userName.value || "Anonymous",
    timestamp: new Date().getTime(), // Timestamp is now a valid property
  };
  
  const commentsV: Comments = {
    id: 1,
    comments: [commentDetailV],
    country: countryName.value,
  };
    
  
    addComment(commentsV)
  }
  
  const chooseCountry = () => {
    console.log(countryName.value)
  }
  
  const filteredComments = computed(() => {
  const com = comments.filter((comment) => comment.country === countryName.value);
  const empty: CommentDetail[] = [];

  return com[0]?.comments.sort((a, b) => b.timestamp - a.timestamp) ?? empty;
});
  
  async function fetchData() {
    try {
      const response = await OlympicsDetailService.getAllCountry()
      const data = response.data
      countryDetail.value = data
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }
  
  fetchData()
  </script>
  