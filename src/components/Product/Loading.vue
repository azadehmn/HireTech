<template>
  <div
    class="col-span-full xl:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
  >
    <Card
      v-for="index in 3"
      :key="index"
      :customBg="'rounded-xl'"
      class="p-3 flex flex-col h-full"
    >
      <template #header>
        <div>
          <Skeleton :width="220" :height="180" class="w-full mx-auto mb-3" />
          <Skeleton :width="220" :height="30" class="w-full mb-3" />
          <Skeleton :width="220" :height="30" class="w-full mb-3" />
        </div>
      </template>
    </Card>
  </div>
</template>
