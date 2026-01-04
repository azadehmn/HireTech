import { ProductDetail } from "../types/product";

export const useProductDetail = () => {
  const route = useRoute();
  const productId = route.params.id;

  const data = ref<ProductDetail | null>(null); // Use Show Product  or null
  const error = ref<string | null>(null); // Error state
  const pending = ref<boolean>(false); // Loading state

  // Fetch Show of Product Item
  const fetchData = async () => {
    pending.value = true;
    error.value = null;

    try {
      const response = await fetch(
        `https://fakestoreapi.com/products/${productId}`
      );
      const result: ProductDetail = await response.json();
      data.value = result;
    } catch (err) {
      error.value = "err";
    } finally {
      pending.value = false;
    }
  };

  const refetch = () => {
    fetchData(); // Call fetchData to refetch the data
  };

  fetchData();

  return { data, error, pending, refetch };
};
