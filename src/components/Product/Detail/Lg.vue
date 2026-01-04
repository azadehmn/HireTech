<template>
  <Card class="w-full">
    <template #header>
      <Skeleton
        :loading="pending"
        :width="524"
        :height="30"
        class="mb-xl mt-md"
      >
        <p class="font-bold text-lg text-blue-900 leading-[24px] mb-xl mt-md">
          {{ data?.title }}
        </p></Skeleton
      >
      <Skeleton
        :loading="pending"
        :width="800"
        :height="200"
        class="mt-2xs mx-auto"
      >
        <img :src="data?.image" class="m-auto rounded-2xl max-h-[300px]" alt=""
      /></Skeleton>
    </template>
  </Card>
  <Card class="w-full mt-xl mb-[68px]">
    <template #header>
      <p class="font-bold text-md text-blue-900 leading-[24px] mb-xl mt-md">
        {{ $t("product.detail.technicalSpecifications") }}
      </p>
      <div class="p-4">
        <div class="flex flex-col gap-3">
          <div
            v-for="(item, index) in productSpecifications"
            :key="index"
            class="flex flex-col sm:flex-row gap-3"
          >
            <div
              class="w-full sm:w-[172px] font-medium text-sm text-gray-600 bg-gray-25 p-4 rounded-[16px]"
            >
              <span class="font-medium">{{ $t(item.specification) }}</span>
            </div>
            <div
              class="flex-1 font-YekanBakhFaNum bg-gray-25 p-4 rounded-[16px]"
            >
              <Skeleton
                v-if="pending"
                :width="524"
                :height="30"
                class="mb-xl mt-md"
              ></Skeleton>
              <span v-else>
                {{ item.value || "--" }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>
<script setup lang="ts">
import { ProductDetail } from "../../../types/product";

const data = inject<Ref<ProductDetail>>("data", ref({} as ProductDetail));
const pending = inject<Ref<boolean>>("pending");
const productSpecifications = ref([
  { specification: "product.detail.price", value: "--" },
  { specification: "product.detail.decsription", value: "--" },
  { specification: "product.detail.category", value: "--" },
  { specification: "product.detail.rating", value: "--" },
]);

watchEffect(() => {
  if (data.value) {
    productSpecifications.value = [
      {
        specification: "product.detail.price",
        value: data.value?.price + " تومان" || "--",
      },
      {
        specification: "product.detail.decsription",
        value: data.value?.description || "--",
      },
      {
        specification: "product.detail.category",
        value: data.value?.category || "--",
      },
      {
        specification: "product.detail.rating",
        value: data.value?.rating?.count || "--",
      },
    ];
  }
});
</script>
