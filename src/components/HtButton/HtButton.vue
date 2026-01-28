<template>
  <button
    class="ht-button"
    :class="[
      `ht-button--${type}`,
      `ht-button--${size}`,
      !text ? 'ht-button--icon-only' : '',
    ]"
    @click="$emit('click', $event)"
  >
    <!-- before icon -->
    <Icon
      v-if="beforIcon"
      v-bind="beforIconProps"
      :name="beforIcon"
      class="ht-button__icon ht-button__icon--before"
    />
    <!-- icon only -->
    <Icon v-if="icon" v-bind="iconProps" :name="icon" class="ht-button__icon" />
    <!-- text -->
    <span v-if="text" class="ht-button__label">{{ text }}</span>
    <!-- after icon -->
    <Icon
      v-if="afterIcon"
      v-bind="afterIconProps"
      :name="afterIcon"
      class="ht-button__icon ht-button__icon--after"
    />
  </button>
</template>

<script setup lang="ts">
const props = defineProps<{
  type?: "primary" | "secondary" | "outline" | "info";
  size?: "lg" | "sm";
  beforIcon?: string;
  icon?: string;
  afterIcon?: string;
  text?: string;
  beforIconProps?: Record<string, any>;
  iconProps?: Record<string, any>;
  afterIconProps?: Record<string, any>;
}>();

defineEmits(["click"]);
</script>

<style lang="scss" scoped>
@use "./htButton.scss";
</style>
