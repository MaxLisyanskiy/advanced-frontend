import { classNames } from 'shared/lib/classNames/classNames';
import React from 'react';
import { Theme, useTheme } from 'app/providers/ThemeProvider';

import { AppButton } from 'shared/ui/AppButton/AppButton';
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';

interface ThemeSwitcherProps {
    className?: string
}

export const ThemeSwitcher = (props: ThemeSwitcherProps) => {
    const { className } = props;
    const { theme, toggleTheme } = useTheme();

    return (
        <AppButton
            className={classNames('', {}, [className])}
            onClick={() => toggleTheme()}
        >
            {theme === Theme.LIGHT ? <LightIcon /> : <DarkIcon />}
        </AppButton>

    );
};
