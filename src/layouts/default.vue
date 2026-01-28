<template>
  <!-- Loading Overlay -->
  <div v-if="isLoading" class="loading-overlay">
    <div class="loading-overlay__content">
      <img src="/img/logo2.png" alt="hiroteck" class="loading-overlay__logo" />
      <div class="loading-overlay__progress">
        <div
          class="loading-overlay__bar loading-overlay__bar--indeterminate"
        ></div>
      </div>
    </div>

    <div class="loading-overlay__bottom-logo">
      <img src="/img/logo.png" alt="hiroteck" class="loading-overlay__logo" />
    </div>
  </div>
  <!-- Main Layout -->
  <div v-else class="min-h-screen flex flex-col">
    <TopBarMain />

    <main class="flex-1 bg-surface-background mb-[68px] mt-[122px]">
      <Breadcrumb class="product container-xl" />
      <slot />
    </main>

    <CustomFooter />
  </div>
</template>
<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 700);
});
</script>
<style lang="scss" scoped>
@use "./default.scss";
</style>
