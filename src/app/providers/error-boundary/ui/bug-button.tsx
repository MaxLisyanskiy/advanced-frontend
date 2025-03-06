import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { AppButton } from "shared/ui/app-button/app-button";

// Компонент для тестирования ErrorBoundary
export const BugButton = () => {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const handleThrowError = () => setError(true);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return <AppButton onClick={handleThrowError}>{t("throw error")}</AppButton>;
};
