import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppButton.module.scss';

export enum ThemeButton {
    CLEAR = 'clear',
    CLEAR_INVERTED = 'clearInverted',
    OUTLINE = 'outline',
}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string,
    theme?: ThemeButton,
    disabled?: boolean
}

export const AppButton: FC<AppButtonProps> = (props) => {
    const {
        className, children, theme, disabled, ...otherProps
    } = props;

    const mods: Record<string, boolean> = {
        [cls.disabled]: disabled,
    };

    return (
        <button
            type="button"
            disabled={disabled}
            className={classNames(cls.AppButton, mods, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    );
};
