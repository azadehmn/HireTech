<template>
  <footer>
    <div class="mx-auto grid grid-cols-12 gap-6 bg-white px-[80px] py-[40px]">
      <div
        class="col-span-12 xl:col-span-5 lg:col-span-3 text-body3 leading-[24px] text-gray-700 lg:mt-[130px]"
      >
        {{ $t("footer.workingHours") }}
      </div>

      <div class="col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-4 text-right">
        <h2 class="text-md leading-[24px] text-gray-900 font-bold mb-xl">
          {{ $t("footer.quickAccess") }}
        </h2>
        <ul>
          <li
            v-for="item in columnOneLinks"
            :key="item.name"
            class="text-body3 leading-[24px] text-gray-700 lg:font-medium my-[12px] hover:text-red-500"
          >
            <a :href="item.link" target="_blank">{{ $t(item.name) }}</a>
          </li>
        </ul>
      </div>

      <div class="col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-4 text-right">
        <h2 class="text-md leading-[24px] text-gray-900 font-bold mb-xl">
          {{ $t("footer.siteGuide") }}
        </h2>
        <ul>
          <li
            v-for="item in columnTwoGroupOne"
            :key="item.name"
            class="text-body3 leading-[24px] text-gray-700 lg:font-medium my-[12px] hover:text-red-500"
          >
            <a :href="item.link">{{ $t(item.name) }}</a>
          </li>
        </ul>
      </div>

      <div class="col-span-12 xl:col-span-2 lg:col-span-3 md:col-span-4 text-right item-end">
        <h2 class="text-md leading-[24px] text-gray-900 font-bold mb-xl">
          {{ $t("footer.socialNetworks") }}
        </h2>

        <ul>
          <li
            v-for="item in columnThreeLinks"
            :key="item.name"
            class="text-body3 leading-[24px] text-gray-700 lg:font-medium my-[12px] hover:text-red-500"
          >
            <a
              :href="item.link"
              target="_blank"
              class="flex items-center gap-2 hover:underline"
            >
              <img
                :src="item.src"
                :alt="$t(item.name)"
                class="w-[24px] h-[24px]"
              />
              <span>{{ $t(item.name) }}</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-5 items-center text-center bg-gray-15 p-6 md:p-[40px] gap-6"
    >
      <div
        class="col-span-1 flex flex-col items-center text-center gap-4 order-3 md:order-1"
      ></div>
      <div
        class="col-span-1 md:col-span-3 flex flex-col items-center text-center gap-4 order-1 md:order-2"
      >
        <div class="text-body3 text-gray-700 max-w-[320px]">
          {{ $t("footer.copyright") }}
        </div>
        <div class="flex items-center justify-center md:justify-end gap-3">
          <Icon
            name="telegram"
            class="text-red-200 w-[24px] h-[24px] hover:text-red-500"
          />
          <Icon
            name="instagram"
            class="text-red-200 w-[24px] h-[24px] hover:text-red-500"
          />
          <Icon
            name="twitter"
            class="text-red-200 w-[24px] h-[24px] hover:text-red-500"
          />
          <Icon
            name="linkedin"
            class="text-red-200 w-[24px] h-[24px] hover:text-red-500"
          />
        </div>
      </div>
      <div
        class="col-span-1 flex flex-col items-center md:items-end text-center md:text-right gap-6 order-2 md:order-3"
      >
        <div class="flex items-center justify-end gap-3">
          <img src="/img/enamad.svg" />
          <img src="/img/footer.svg" />
        </div>
      </div>
    </div>
  </footer>
</template>
<script setup lang="ts">
import { ref } from "vue";

const columnOneLinks = ref<{ name: string; link: string }[]>([
  { name: "footer.aboutUs", link: "/#" },
  { name: "footer.blog", link: "/#" },
  { name: "footer.contactUs", link: "/#" },
  { name: "footer.afterSalesService", link: "/#" },
]);
const columnTwoGroupOne = ref<{ name: string; link: string }[]>([
  { name: "footer.termsAndPrivacy", link: "#" },
  { name: "footer.getConsultation", link: "#" },
  { name: "footer.feedback", link: "#" },
]);
const columnThreeLinks = ref<{ name: string; link: string; src: string }[]>([
  {
    name: "footer.instagram",
    link: "#",
    src: "/img/instagram.svg",
  },
  { name: "footer.linkedin", link: "#", src: "/img/linkedin.svg" },
  { name: "footer.telegram", link: "#", src: "/img/telegram.svg" },
]);
</script>
