<template>
  <div class="root">
    <div class="root__vector">
      <Illustration :name=vector " />
    </div>
    <Skeleton v-if="loading" :width="300" :height="20" class="w-full mx-auto my-3 text-center" />

    <div v-else class="root__title">
      {{ title }}
    </div>
    <Skeleton v-if="loading" :width="300" :height="20" class="w-full mx-auto mb-3 text-center" />
    <div v-else class="root__description">{{ description }}</div>
    <div class="root__action">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  title?: string;
  description: string;
  vector: string;
  loading?:boolean
}
defineProps<Props>();
</script>

<style lang="scss" scoped>
@use "./emptyState.scss";
</style>
