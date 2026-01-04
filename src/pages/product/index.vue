<template>
  <div class="product container-xl">
    <ProductMain />
  </div>
</template>

<script setup lang="ts">
const { data, error, pending, refetch } = useProducts();
provide("data", data);
provide("error", error);
provide("pending", pending);
provide("refetch", refetch);
</script>
