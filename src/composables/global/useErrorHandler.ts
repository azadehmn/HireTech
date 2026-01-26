import { useI18n } from "vue-i18n";

export const useErrorHandler = () => {
  const { t } = useI18n();

  const errorHandler = (error: any) => {
    let message = "";

    const statusCode = error?.response?.status || error?.status;
    const errorText = error?.message || error;

    switch (statusCode) {
      case 404:
        message = t("errors.404");
        break;
      case 500:
        message = t("errors.serverError");
        break;
      case 401:
        message = t("errors.unauthorized");
        break;
      default:
        if (errorText === "Failed to fetch") {
          message = t("errors.networkError");
        } else {
          message = errorText || t("errors.unexpectedError");
        }
    }

    return message;
  };

  return {
    errorHandler,
  };
};
