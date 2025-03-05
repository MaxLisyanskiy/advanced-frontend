import { useTranslation } from "react-i18next";

import cls from "./not-found-page.module.scss";

const NotFoundPage = () => {
  const { t } = useTranslation();
  return <div className={cls.NotFoundPage}>{t("Страница не найден")}</div>;
};

export default NotFoundPage;
