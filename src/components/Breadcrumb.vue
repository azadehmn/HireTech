<template>
  <nav class="flex items-center gap-2 text-sm text-gray-500 my-xl">
    <NuxtLink to="/home" class="flex items-center gap-1 hover:text-red-500">
      <Icon
        name="home"
        class="w-[20px] h-[20px] font-bold pointer text-gray-500 hover:text-red-500"
      />
    </NuxtLink>

    <span
      v-for="(crumb, index) in computedCrumbs"
      :key="index"
      class="flex items-center gap-1"
    >
      <Icon
        name="ArrowLeft"
        class="w-[20px] h-[20px] text-bold pointer hover:text-red-500"
      />

      <NuxtLink
        v-if="crumb.to"
        :to="crumb.to"
        class="hover:text-red-500 font-bold text-gray-500 text-sm"
      >
        {{ crumb.name }}
      </NuxtLink>
      <span class="font-bold text-gray-500 text-sm hover:text-red-500" v-else>{{
        crumb.name
      }}</span>
    </span>
  </nav>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";

const { t } = useI18n();
const routeMap: Record<string, string> = {
  home: t("menu.home"),
  product: t("menu.products"),
  faq: t("menu.faq"),
  contactUs: t("menu.about"),
  consulting: t("menu.consulting"),
};
const route = useRoute();
const computedCrumbs = computed(() => {
  const paths = route.path.split("/").filter(Boolean);
  const crumbs: { name: string; to?: string }[] = [];
  let accumulatedPath = "";

  paths.forEach((segment, i) => {
    accumulatedPath += `/${segment}`;
    crumbs.push({
      name: routeMap[segment] || segment,
      to: i !== paths.length - 1 ? accumulatedPath : undefined,
    });
  });

  return crumbs;
});
</script>
