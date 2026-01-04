<template>
  <div dir="rtl" class="checkbox">
    <label :for="`${name}--id`" class="label-checkbox">
      <Skeleton :loading="loading" :width="20" :height="20">
        <input
          :id="`${name}--id`"
          type="checkbox"
          :checked="isChecked"
          :disabled="disabled"
          @change="handleCheckbox"
        />
      </Skeleton>
      <Skeleton
        v-if="loading && showLabel"
        :loading="loading && Boolean(label)"
        :width="96"
        class="mx-xs"
      />
      <span
        v-else-if="showLabel"
        class="px-xs text-[12px]"
        :class="{ 'text-text-disabled': disabled }"
      >
        {{ label }}
      </span>
    </label>
  </div>
</template>

<script setup lang="ts">
import { ref, watch, onMounted, toRefs } from "vue";

export interface Props {
  modelValue?: boolean;
  label?: string;
  name: string;
  disabled?: boolean;
  loading?: boolean;
  showLabel?: boolean;
  checked?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  showLabel: true,
  label: "",
  loading: false,
});

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const { checked } = toRefs(props);
const isChecked = ref(false);

const handleCheckbox = (event: Event) => {
  const target = event.target as HTMLInputElement;
  isChecked.value = target.checked;
  emit("update:modelValue", target.checked);
};

onMounted(() => {
  isChecked.value = props.modelValue ?? checked.value ?? false;
});

watch(
  () => props.modelValue,
  (value) => {
    if (value !== undefined) {
      isChecked.value = value;
    }
  }
);

watch(checked, (value) => {
  if (props.modelValue === undefined) {
    isChecked.value = value;
  }
});
</script>

<style lang="scss" scoped>
.checkbox {
  @apply flex items-center;

  .label-checkbox {
    @apply  text-[14px] leading-[24px] flex items-start cursor-pointer;
  }
  input[type="checkbox"] {
    @apply appearance-none w-lg h-lg border-border border-2 rounded-sm grid content-center cursor-pointer bg-surface;
    @apply hover:bg-surface-hover;
    @apply disabled:bg-surface focus:border-2 disabled:border-border-disabled;
    &::before {
      @apply w-lg h-lg rounded-sm scale-0;
      content: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='20.000000000000004' height='20.000000000000004' fill='none'><path id='svg_2' stroke-linejoin='round' stroke-linecap='round' stroke-width='1.5' stroke='white' d='m14,7l-4.99628,6l-3.00372,-3.00372'/></svg>");
      box-shadow: inset -2em 1em #E20054;
    }
    &:checked::before {
      transform: scale(1) translateX(2px);
    }
    &:checked:hover::before {
      box-shadow: inset -2em 1em #E20054;
    }
    &:checked:disabled::before {
      box-shadow: inset -2em 1em #abc5ff;
    }
  }
}
</style>
