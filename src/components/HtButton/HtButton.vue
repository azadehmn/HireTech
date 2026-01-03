<template>
  <button
    class="ht-button font-YekanBakh"
    :class="[
      `ht-button--${type}`,
      `ht-button--${size}`,
      !text ? 'ht-button--icon-only' : '',
    ]"
    @click="$emit('click', $event)"
  >
    <!-- before icon -->
    <Icon
      v-if="beforeIcon"
      :name="beforeIcon"
      class="ht-button__icon ht-button__icon--before"
    />
    <!-- icon only -->
    <Icon v-if="icon" :name="icon" class="ht-button__icon" />
    <!-- text -->
    <span v-if="text" class="ht-button__label">{{ text }}</span>
    <!-- after icon -->
    <Icon
      v-if="afterIcon"
      :name="afterIcon"
      class="ht-button__icon ht-button__icon--after"
    />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: "primary" | "secondary" | "outline";
  size?: "lg" | "sm";
  beforeIcon?: string;
  icon?: string;
  afterIcon?: string;
  text?: string;
}>();

defineEmits(["click"]);
</script>

<style lang="scss" scoped>
@use "./htButton.scss";
</style>
