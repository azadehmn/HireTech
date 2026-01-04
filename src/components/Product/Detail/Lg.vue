<template>
  <Card class="w-full">
    <template #header>
      <Skeleton :loading="pending" :width="524" :height="30" class="mb-xl mt-md">
        <p class="font-bold text-lg text-blue-900 leading-[24px] mb-xl mt-md">
          {{ data?.title }}
        </p></Skeleton
      >
      <Skeleton :loading="pending" :width="800" :height="200" class="mt-2xs mx-auto">
        <img :src="data?.image" class="m-auto rounded-2xl max-h-[300px]" alt=""
      /></Skeleton>
    </template>
  </Card>
</template>
<script setup lang="ts">
import { ProductDetail } from "../../../types/product";

const data = inject<Ref<ProductDetail>>("data", ref({} as ProductDetail));
const pending = inject<Ref<boolean>>("pending");
</script>
