import { AppButton } from "shared/ui/app-button/app-button";

import { useTranslation } from "react-i18next";
import { classNames } from "shared/lib/class-names/class-names";

import cls from "./error-fallback.module.scss";

interface ErrorFallbackProps {
  className?: string;
}

export const ErrorFallback = ({ className }: ErrorFallbackProps) => {
  const { t } = useTranslation();

  const handleResetPage = () => location.reload();

  return (
    <div className={classNames(cls.error, {}, [className])}>
      <p>{t("Произошла ошибка!")}</p>
      <AppButton onClick={handleResetPage}>{t("Обновить страницу")}</AppButton>
    </div>
  );
};
