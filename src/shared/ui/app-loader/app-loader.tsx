import { classNames } from "shared/lib/class-names/class-names";
import "./app-loader.scss";

interface AppLoaderProps {
  className?: string;
}

export const AppLoader = ({ className }: AppLoaderProps) => (
  <div className={classNames("lds-ellipsis", {}, [className])}>
    <div />
    <div />
    <div />
    <div />
  </div>
);
