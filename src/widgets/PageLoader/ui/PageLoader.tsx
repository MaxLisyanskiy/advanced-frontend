import { classNames } from 'shared/lib/classNames/classNames';
import { AppLoader } from 'shared/ui/AppLoader/AppLoader';
import cls from './PageLoader.module.scss';

interface AppPageLoaderProps {
    className?: string
}

export const PageLoader = (props: AppPageLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames(cls.AppPageLoader, {}, [className])}>
            <AppLoader />
        </div>
    );
};
