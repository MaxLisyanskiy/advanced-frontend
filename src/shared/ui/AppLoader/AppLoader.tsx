import { classNames } from 'shared/lib/classNames/classNames';
import './AppLoader.scss';

interface AppLoaderProps {
    className?: string
}

export const AppLoader = (props: AppLoaderProps) => {
    const { className } = props;

    return (
        <div className={classNames('lds-roller', {}, [className])}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    );
};
