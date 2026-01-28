import { useDebounce } from "./useDebounce";

export function useSearchQuery(delay = 700) {
  const route = useRoute();
  const router = useRouter();

  const searchTerm = ref("");
  const searchPending = ref(false);

  // URL → state (source of truth)
  watch(
    () => route.query.search,
    (search) => {
      searchTerm.value = typeof search === "string" ? search : "";
    },
    { immediate: true }
  );

  // state → URL
  const updateSearch = useDebounce(() => {
    searchPending.value = false;

    router.replace({
      query: {
        ...route.query,
        search: searchTerm.value || undefined,
      },
    });
  }, delay);

  watch(searchTerm, () => {
    searchPending.value = true;
    updateSearch();
  });

  const clearSearch = () => {
    searchTerm.value = "";
  };

  return {
    searchTerm,
    searchPending,
    clearSearch,
  };
}
