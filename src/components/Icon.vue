<template>
  <component
    v-if="iconComponent"
    :is="iconComponent"
    v-bind="$attrs"
    :width="size"
    :height="size"
  />
</template>

<script setup lang="ts">
import { computed } from "vue";

interface Props {
  name: string;
  size?: number;
}

const props = defineProps<Props>();
const size = computed(() => props.size ?? 16);
const icons = import.meta.glob("~/icons/*.vue", { eager: true });
const iconComponent = import.meta.server
  ? null
  : computed(() => {
      const key = Object.keys(icons).find(k =>
        k.toLowerCase().includes(props.name.toLowerCase())
      );
      return key ? (icons[key] as any).default : null;
    });

</script>
