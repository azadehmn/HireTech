import { ref } from "vue";
import { Product } from "../types/product";

export const useProducts = () => {
  const data = ref<Product[] | null>(null); // Use Product array or null
  const error = ref<string | null>(null); // Error state
  const pending = ref<boolean>(false); // Loading state

  // Fetch ProductList
  const fetchData = async () => {
    pending.value = true;
    error.value = null;

    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const result: Product[] = await response.json();
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

  // Initial fetch when the composable is used
  fetchData();

  return { data, error, pending, refetch };
};
