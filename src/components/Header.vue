<template>
  <div class="p-6 bg-white rounded-lg shadow-md border border-gray-50">
    <h2 class="text-xl font-semibold text-blue-900 mb-2">{{ title }}</h2>
    <p class="text-gray-600 text-sm">{{ description }}</p>
  </div>
</template>
<script setup lang="ts">
defineProps<{ title: string; description: string }>();
</script>
