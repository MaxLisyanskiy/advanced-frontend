import { classNames } from "shared/lib/class-names/class-names";
import { AppLoader } from "shared/ui/app-loader/app-loader";
import cls from "./page-loader.module.scss";

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(cls.pageLoader, {}, [className])}>
    <AppLoader />
  </div>
);
