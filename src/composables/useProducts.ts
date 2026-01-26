export const useProducts = () => {
  const data = ref<Product[] | null>(null);
  const error = ref<string | null>(null);
  const config = useRuntimeConfig();
  const pending = ref<boolean>(false);
  const route = useRoute();
  const { errorHandler } = useErrorHandler();
  const errorMessage = ref<string | null>(null);
  watch(error, (newError) => {
    if (newError) {
      errorMessage.value = errorHandler(newError);
    } else {
      errorMessage.value = null;
    }
  });
  const fetchData = async () => {
    pending.value = true;
    error.value = null;

    try {
      const queryParams = { ...route.query };
      for (const key in queryParams) {
        if (Array.isArray(queryParams[key])) {
          queryParams[key] = queryParams[key].join(",");
        }
      }

      const queryString = new URLSearchParams(
        queryParams as Record<string, string>
      ).toString();

      const response = await fetch(
        `${config.public.apiBase}/products?${queryString}`
      );
      const result: Product[] = await response.json();
      data.value = result;
    } catch (err:any) {
      error.value = err;
    } finally {
      pending.value = false;
    }
  };

  watch(() => route.query, fetchData, { immediate: true, deep: true });

  const filteredProducts = computed(() => {
    if (!data.value) return [];
    return data.value;
  });

  return { data, error, pending, filteredProducts, refetch: fetchData };
};
