<template>
  <div class="min-h-screen flex flex-col">
    <TopBarMain />

    <main class="flex-1 bg-surface-background mb-[68px] mt-[150px]">
      <slot />
    </main>

    <CustomFooter />
  </div>
</template>
<script setup lang="ts"></script>
