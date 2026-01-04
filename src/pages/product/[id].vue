<template>
  <div class="product-detail container-xl w-full">
    <ProductDetailMain />
  </div>
</template>

<script setup lang="ts">
const { data, error, pending, refetch } = useProductDetail();
provide("data", data);
provide("error", error);
provide("pending", pending);
provide("refetch", refetch);
</script>
