<template>
  <div class="grid items-start grid-cols-12 gap-md">
    <div class="col-span-full xl:col-span-3 max-h[400px]">
      <div class="flex flex-col gap-[12px]">
        <!-- <div class="bg-white p-4 rounded-[16px] shadow-sm"> -->
          <!-- <Card class="w-full" :customBg="'rounded-xl'">
            <template #header> </template>
          </Card> -->
        <!-- </div> -->

        <Card class="w-full" :customBg="'rounded-xl'">
          <template #header>
            <h2 class="font-medium mb-4 text-gray-700 text-body3 mb-md"> {{ $t("product.filter.category") }}</h2>
            <div v-if="pending">
              <CheckboxCustom
                v-for="index in 3"
                :key="index"
                :loading="true"
                label="loading text"
                name="loading text"
                class="my-sm"
              />
            </div>

            <div
              v-for="category in groupedByCategory"
              :key="category.name"
              v-else
              class="flex gap-2 justify-between mb-sm"
            >
              <CheckboxCustom
                :label="category.name"
                :name="category.name"
                v-model="selectedCategories[category.name]"
              />
              <p class="font-yekanFa text-white hover:bg-red-500 bg-black text-body2 w-[24px] py-[3px] text-center item-center rounded-md">{{ category.count }}</p>
            </div>
          </template>
        </Card>
      </div>
    </div>
    <div
      class="col-span-full xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <ProductLoading v-if="pending" />
      <Card
        v-else
        v-for="product in filteredProducts"
        :key="product.id"
        :customBg="'rounded-xl'"
        class="p-3 flex flex-col h-full"
      >
        <template #header>
          <div>
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

const filteredProducts = computed(() => {
  const activeCategories = Object.keys(selectedCategories).filter(
    (cat) => selectedCategories[cat]
  );
  if (activeCategories.length === 0) return data.value ?? [];
  return (data.value ?? []).filter(
    (p) => p.category && activeCategories.includes(p.category)
  );
});

const groupedByCategory = computed(() => {
  if (!data.value) return [];

  const map: Record<string, { name: string; count: number }> = {};

  data.value.forEach((product) => {
    const category = product.category ?? "--";
    if (!map[category]) map[category] = { name: category, count: 0 };
    map[category].count += 1;
  });

  return Object.values(map);
});
const selectedCategories = reactive<Record<string, boolean>>({});

watchEffect(() => {
  groupedByCategory.value.forEach((cat) => {
    if (!(cat.name in selectedCategories)) selectedCategories[cat.name] = false;
  });
});
</script>
