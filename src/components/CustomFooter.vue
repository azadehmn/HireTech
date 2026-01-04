<template>
    <footer class="bg-white px-[80px] py-[40px]">
      <div class="mx-auto grid grid-cols-12 gap-6">
        <div
          class="col-span-12 md:col-span-5 text-body3 leading-[24px] text-gray-700 lg:mt-[130px]"
        >
          {{ $t("footer.workingHours") }}
        </div>
  
        <div class="col-span-12 md:col-span-2 text-right">
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
  
        <div class="col-span-12 md:col-span-2 text-right">
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
  
        <div class="col-span-12 md:col-span-2 text-right">
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
  