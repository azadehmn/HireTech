// src/composables/global/useI18n.ts
import { useI18n } from "vue-i18n";

export default function useGlobalI18n() {
  const { t } = useI18n();
  return { t };
}
