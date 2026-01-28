<template>
  <div
    class="col-span-full xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <Card
      v-if="filteredProducts.length === 0"
      class="xl:col-span-9 col-span-full"
    >
      <template #header>
        <EmptyState
          class="pt-2xl"
          :description="$t('empty.title')"
          vector="Product"
        />
      </template>
    </Card>
    <Card
      v-else
      v-for="product in filteredProducts"
      :key="product.id"
      :customBg="'rounded-xl'"
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
</template>

<script setup lang="ts">
const props = defineProps({
  filteredProducts: {
    type: Array as () => Product[],
    required: true,
  },
});
</script>
