<template>
  <div class="card" :class="customBg">
    <div><slot name="header" /></div>
    <div class="h-full"><slot name="main" /></div>
    <div><slot name="footer" /></div>
  </div>
</template>

<script setup lang="ts">
import { toRefs } from "vue";

export interface Props {
  customBg?: string;
}
const props = withDefaults(defineProps<Props>(), {
  customBg: "bg-surface-white rounded-xl",
});
const { customBg } = toRefs(props);
</script>
<style lang="scss" scoped>
@use "./card.scss";
</style>
