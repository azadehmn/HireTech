export const useProductDetail = () => {
  const route = useRoute();
  const productId = route.params.id;
  const data = ref<ProductDetail | null>(null); // Use Show Product  or null
  const error = ref<string | null>(null); // Error state
  const pending = ref<boolean>(false); // Loading state
  const config = useRuntimeConfig();
  const { errorHandler } = useErrorHandler();
  const errorMessage = ref<string | null>(null);

  watch(error, (newError) => {
    if (newError) {
      errorMessage.value = errorHandler(newError);
    } else {
      errorMessage.value = null;
    }
  });
  // Fetch Show of Product Item
  const fetchData = async () => {
    pending.value = true;
    error.value = null;

    try {
      const response = await fetch(
        `${config.public.apiBase}/products/${productId}`
      );
      const result: ProductDetail = await response.json();
      data.value = result;
    } catch (err: any) {
      error.value = err;
    } finally {
      pending.value = false;
    }
  };

  const refetch = () => {
    fetchData();
  };

  fetchData();

  return { data, error, pending, refetch };
};
