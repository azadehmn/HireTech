
<template>
  <div class="root">
    <TopBarLg v-if="!lg" />
    <TopBarMd v-if="lg" />
  </div>
</template>

<script setup lang="ts">
const { lg } = useSize();
</script>

