<template>
  <header
    dir="ltr"
    class="w-full bg-white fixed top-0 left-0 z-50 h-[120px] flex items-center px-[80px] shadow-md"
  >
    <HtButton
      type="primary"
      size="lg"
      :text="t('buttons.call')"
      befor-icon="call"
    />
    <nav class="absolute left-1/2 -translate-x-1/2 flex gap-10">
      <NuxtLink
        v-for="item in menuItems"
        :key="item.label"
        class="group flex items-center cursor-pointer"
        :to="item.to"
      >
        <span
          :class="route.path === item.to ? 'text-red-500' : ''"
          class="text-sm whitespace-nowrap font-medium text-blue-900 group-hover:text-red-500 transition-colors"
        >
          {{ t(item.label) }}
        </span>
        <Icon
          :name="item.icon"
          :class="route.path === item.to ? 'text-red-500' : ''"
          class="ml-2 text-sm text-blue-900 group-hover:text-red-500 transition-colors"
        />
      </NuxtLink>
    </nav>
  </header>
</template>

<script setup lang="ts">
const { t } = useI18n();
const route = useRoute();

const menuItems = [
  { icon: "call", label: "menu.about", to: "/contactUs" },
  { icon: "faq", label: "menu.faq", to: "/faq" },
  { icon: "cup", label: "menu.consulting", to: "/consulting" },
  { icon: "product", label: "menu.products", to: "/product" },
];
</script>
