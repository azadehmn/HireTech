import { Product } from "../types/product";

export const useProducts = () => {
  const data = ref<Product[] | null>(null);
  const error = ref<string | null>(null);
  const pending = ref<boolean>(false);
  const route = useRoute();

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
      const url = `https://fakestoreapi.com/products?${queryString}`;

      const response = await fetch(url);
      const result: Product[] = await response.json();
      data.value = result;
    } catch (err) {
      error.value = "Error fetching products";
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
