<template>
  <div class="min-h-screen flex flex-col">
    <!-- TopBar -->
    <TopBarMain />
    <!-- Main content -->
    <main class="mt-[150px]">
        <slot />
    </main>
  </div>
</template>

<script setup lang="ts"></script>
