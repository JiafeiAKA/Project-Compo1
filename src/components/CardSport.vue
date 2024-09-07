<template>
    <div class="bg-blue-200 text-center py-8 rounded-lg card">
        <p class="text-4xl font-bold">{{ props.detail.sport }}</p>
        <p class="text-gray-500">{{ props.detail.medal }}</p>
    </div>
</template>

<script setup lang="ts">
import type { Detail } from '@/types';


const props = defineProps<{
    detail: Detail
}>();

</script>

<style scoped></style>