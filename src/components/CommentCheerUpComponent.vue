<template>
    <div class="text-left px-4 mx-4 bg-gray-400 my-4 rounded-3xl">
        <h1 class="text-xl font-bold">{{ props.username }}</h1>
        <p class="text-lg">{{ props.comment }}</p>
    </div>
</template>

<script setup lang="ts">
import type { CommentDetail } from '@/types';



const props = defineProps<CommentDetail>();

</script>

<style scoped></style>