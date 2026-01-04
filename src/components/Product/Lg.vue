<template>
  <div class="grid items-start grid-cols-12 gap-md">
    <div class="col-span-full xl:col-span-3 max-h[400px]">
      <div class="flex flex-col gap-[12px]">
        <div class="bg-white p-4 rounded-[16px] shadow-sm">
          <Card class="w-full" :customBg="'rounded-xl'">
            <template #header>
              <p>sort</p>
            </template>
          </Card>
        </div>

        <div class="bg-white p-4 rounded-[16px] shadow-sm">
          <Card class="w-full" :customBg="'rounded-xl'">
            <template #header>
              <p>filter</p>
            </template>
          </Card>
        </div>
      </div>
    </div>
    <div
      class="col-span-full xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <Card
        v-for="product in data"
        :key="product.id"
        :customBg="'rounded-xl'"
        class="p-3 flex flex-col h-full"
      >
        <template #header>
          <div v-if="pending">
            <Skeleton :width="220" :height="180" class="w-full mx-auto mb-3" />
            <Skeleton :width="220" :height="30" class="w-full mb-3" />
            <HtButton
              type="secondary"
              size="lg"
              :text="$t('buttons.viewDetails')"
              after-icon="ArrowLeft"
              class="w-full"
              :disabled="true"
            />
          </div>
          <div v-else>
            <img
              :src="product.image"
              class="mx-auto mb-3 rounded-2xl h-[150px]"
              alt=""
            />
            <div
              class="font-bold text-sm text-blue-900 leading-[24px] line-clamp-2 min-h-[48px]"
            >
              {{ product.title }}
            </div>
            <NuxtLink :to="`/product/${product.id}`">
              <HtButton
                type="secondary"
                size="lg"
                :text="$t('buttons.viewDetails')"
                after-icon="ArrowLeft"
                class="w-full mt-md"
              />
            </NuxtLink>
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Product } from "../../types/product";
const data = inject<Ref<Product[]>>("data", ref([]));
const pending = inject<Ref<boolean>>("pending", ref(false));
</script>
