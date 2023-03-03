import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppText.module.scss';

export enum AppTextTheme {
    PRIMARY = 'primary',
    ERROR = 'error'
}

interface AppTextProps {
    className?: string;
    title?: string;
    text?: string,
    theme?: AppTextTheme
}

export const AppText = (props: AppTextProps) => {
    const {
        className, title, text, theme = AppTextTheme.PRIMARY,
    } = props;

    return (
        <div className={classNames(cls.AppText, { [cls[theme]]: true }, [className])}>
            {title && <p className={cls.title}>{title}</p>}
            {text && <p className={cls.text}>{text}</p>}
        </div>
    );
};
