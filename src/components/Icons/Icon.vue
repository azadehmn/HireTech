<template>
  <component :is="iconComponent" v-bind="$attrs" :width="size" :height="size" />
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name: string;
  size?: number;
}

const props = defineProps<Props>();

const size = computed(() => props.size ?? 24);

const icons = import.meta.glob("./icon/*.vue", { eager: true });

const iconComponent = computed(() => {
  const key = Object.keys(icons).find((k) =>
    k.toLowerCase().includes(props.name.toLowerCase())
  );
  if (!key) {
    return null;
  }
  return (icons[key] as any).default;
});
</script>
