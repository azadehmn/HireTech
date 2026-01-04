<template>
  <header
    class="fixed top-0 left-0 z-50 w-full py-md bg-white flex items-center justify-between px-6 shadow-md rounded-tl-[8px] rounded-tr-[8px] rounded-bl-[32px] rounded-br-[32px]"
  >
    <HtButton
      type="outline"
      size="lg"
      :after-icon="isOpen ? 'close' : 'menu'"
      @click="toggleMenu"
    />
    <HtButton type="outline" size="lg" after-icon="call" />
  </header>

  <transition name="overlay">
    <div
      v-if="isOpen"
      class="fixed inset-0 z-40 bg-black/40"
      @click="toggleMenu"
    />
  </transition>
  <transition name="drawer">
    <aside
      v-if="isOpen"
      class="fixed left-0 right-0 z-50 h-full w-full bg-white text-right p-6 top-[90px]"
    >
      <nav class="flex flex-col gap-6">
        <div
          v-for="item in menuItems"
          :key="item.label"
          class="flex items-center gap-3 text-blue-900 hover:text-red-500 transition-colors cursor-pointer"
        >
          <Icon :name="item.icon" />
          <span class="text-base font-medium">
            {{ t(item.label) }}
          </span>
        </div>
      </nav>
    </aside>
  </transition>
</template>

<script setup lang="ts">
import { ref } from "vue";

const { t } = useI18n();
const isOpen = ref(false);
const toggleMenu = () => {
  isOpen.value = !isOpen.value;
};
const menuItems = [
  { icon: "product", label: "menu.products" },
  { icon: "cup", label: "menu.consulting" },
  { icon: "faq", label: "menu.faq" },
  { icon: "call", label: "menu.about" },
];
</script>

<style scoped>
/* Overlay fade */
.overlay-enter-active,
.overlay-leave-active {
  transition: opacity 0.3s ease;
}
.overlay-enter-from,
.overlay-leave-to {
  opacity: 0;
}

/* Drawer slide from right */
.drawer-enter-active,
.drawer-leave-active {
  transition: transform 0.35s ease;
}
.drawer-enter-from,
.drawer-leave-to {
  transform: translateX(100%);
}
</style>
