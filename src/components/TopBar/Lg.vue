<template>
  <header
    class="w-full bg-white fixed top-0 left-0 z-50 h-[120px] flex items-center px-[80px] shadow-md"
  >
    <button class="bg-red-500 text-white rounded-[16px] px-4 py-2 font-medium">
      دکمه سمت چپ
    </button>

    <nav class="absolute left-1/2 transform -translate-x-1/2 flex space-x-10">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="flex items-center cursor-pointer"
        @mouseenter="hoverIndex = index"
        @mouseleave="hoverIndex = null"
      >
        <span
          :class="[
            'text-sm',
            hoverIndex === index ? 'text-red-500' : 'text-blue-900',
          ]"
        >
          {{ t(item.label) }}
        </span>

        <Icon
          :name="item.icon"
          :class="[
            'ml-2 text-sm',
            hoverIndex === index ? 'text-red-500' : 'text-blue-900',
          ]"
        />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { t } = useI18n();

const menuItems = [
  { icon: "teacher", label: "menu.products" },
  { icon: "cup", label: "menu.consulting" },
  { icon: "faq", label: "menu.faq" },
  { icon: "faq", label: "menu.about" },
];

const hoverIndex = ref<number | null>(null);
</script>
