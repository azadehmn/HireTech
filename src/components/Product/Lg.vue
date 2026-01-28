<template>
  <div class="grid items-start grid-cols-12 gap-md">
    <div class="col-span-full xl:col-span-3 max-h-[400px] mb-xl">
      <div class="flex flex-col gap-[12px]">
        <Card class="w-full mb-md" :customBg="'rounded-xl'">
          <template #header>
            <div class="mb-md">
              <input
                type="text"
                v-model="searchTerm"
                placeholder="جستجو ..."
                class="w-full p-2 border rounded-md mb-md"
              />
              <HtButton
                type="primary"
                size="lg"
                :text="$t('buttons.search')"
                class="w-full"
              />
            </div>
          </template>
        </Card>

        <Card class="w-full" :customBg="'rounded-xl'">
          <template #header>
            <h2 class="font-medium mb-4 text-gray-700 text-body3 mb-md">
              {{ $t("product.filter.category") }}
            </h2>
            <div v-if="pending || searchPending">
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
              v-else
              v-for="category in groupedByCategory"
              :key="category.name"
              class="flex gap-2 justify-between mb-sm"
            >
              <CheckboxCustom
                :label="category.name"
                :name="category.name"
                v-model="selectedCategories[category.name]"
                @change="updateUrl"
              />
              <p
                :class="{
                  'bg-black': !selectedCategories[category.name],
                  'bg-red-500': selectedCategories[category.name],
                }"
                class="font-yekanFa text-white hover:bg-red-500 bg-black text-body2 w-[24px] py-[3px] text-center item-center rounded-md"
              >
                {{ category.count }}
              </p>
            </div>
          </template>
        </Card>
      </div>
    </div>

    <div
      class="col-span-full xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
    >
      <Card class="xl:col-span-9 col-span-full">
        <template #header>
          <div class="flex items-start">
            <p class="xl:w-1/4 w-full">
              {{ $t("product.filter.selectedfiterItem") }}
            </p>
            <div
              v-if="pending || searchPending"
              class="flex flex-wrap gap-2 ms-auto justify-end"
            >
              <Skeleton
                v-for="i in 2"
                :key="i"
                :loading="true"
                :width="126"
                :height="35"
                class="mx-xs ms-auto"
              />
            </div>

            <div v-else class="flex flex-wrap gap-2 ms-auto justify-end">
              <!-- search button -->
              <HtButton
                v-if="searchTerm"
                type="info"
                size="lg"
                :text="searchTerm"
                after-icon="Close"
                befor-icon="Search"
                :afterIconProps="{ onClick: clearSearch }"
              />

              <!-- category buttons -->
              <HtButton
                v-for="categoryName in selectedCategoryNames"
                :key="categoryName"
                type="info"
                size="lg"
                :text="categoryName"
                after-icon="Close"
                :afterIconProps="{ onClick: () => clearCategory(categoryName) }"
              />
            </div>
          </div>
        </template>
      </Card>

      <ProductLoading v-if="pending || searchPending" />
      <ProductList v-else :filteredProducts="filteredProducts" />
    </div>
  </div>
</template>
<script setup lang="ts">
import { reactive, computed, watchEffect, inject, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

/* ------------------ data ------------------ */

const data = inject<Ref<Product[]>>("data", ref([]));
const pending = inject<Ref<boolean>>("pending", ref(false));

/* ------------------ search (composable) ------------------ */

const { searchTerm, searchPending, clearSearch } = useSearchQuery(700);

/* ------------------ categories ------------------ */

const selectedCategories = reactive<Record<string, boolean>>({});

const groupedByCategory = computed(() => {
  const map: Record<string, { name: string; count: number }> = {};

  data.value?.forEach((product) => {
    const category = product.category ?? "--";
    if (!map[category]) map[category] = { name: category, count: 0 };
    map[category].count += 1;
  });

  return Object.values(map);
});

const selectedCategoryNames = computed(() =>
  Object.keys(selectedCategories).filter((cat) => selectedCategories[cat])
);

const updateUrl = () => {
  const activeCategories = selectedCategoryNames.value;

  router.push({
    query: {
      ...route.query,
      categories: activeCategories.length
        ? activeCategories.join(",")
        : undefined,
    },
  });
};

const clearCategory = (categoryName: string) => {
  selectedCategories[categoryName] = false;
  updateUrl();
};

/* ------------------ filters ------------------ */

const filteredProducts = computed(() => {
  let products = data.value ?? [];

  if (selectedCategoryNames.value.length) {
    products = products.filter((p) =>
      selectedCategoryNames.value.includes(p.category ?? "--")
    );
  }

  if (searchTerm.value.trim()) {
    const term = searchTerm.value.toLowerCase();
    products = products.filter((p) => p.title.toLowerCase().includes(term));
  }

  return products;
});

/* ------------------ URL → categories ------------------ */

watchEffect(() => {
  const fromUrl = route.query.categories?.toString().split(",") ?? [];

  groupedByCategory.value.forEach((cat) => {
    selectedCategories[cat.name] = fromUrl.includes(cat.name);
  });
});
</script>
