<template>
  <div class="root">
    <ProductDetailLg v-if="!lg" />
  </div>
</template>

<script setup lang="ts">
const { lg } = useSize();
</script>
