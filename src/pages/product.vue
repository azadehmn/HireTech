<template>
  <div class="flex flex-col items-center justify-center p-10">
    <p>{{ $t("hello") }}</p>
    <Icon
      class="text-[#4567] hover:text-primary text-lg font-bold"
      name="teacher"
    />

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 w-full max-w-4xl">
      <Header
        title="Card 1"
        description="Sample card using Tailwind + Design Tokens."
      />
      <Header
        title="Card 2"
        description="Ready to start building your project."
      />
    </div>
  </div>
</template>

<script setup lang="ts">

</script>
