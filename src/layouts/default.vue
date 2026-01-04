<script setup lang="ts"></script>
<template>
  <div class="flex flex-col min-h-screen">
    <TopBarMain />
    <main class="flex-grow bg-surface-background mb-[68px]">
      <slot />
    </main>
    <CustomFooter />
  </div>
</template>
