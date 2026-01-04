<script setup lang="ts"></script>
<template>
  <div>
    <TopBarMain />
    <main class="flex-grow bg-surface-background mb-[68px] mt-[150px]">
      <slot />
    </main>
    <CustomFooter />
  </div>
</template>
