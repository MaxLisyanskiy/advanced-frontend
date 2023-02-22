import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { BugButton } from 'app/providers/ErrorBoundary';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

// icons
import SidebarCloseIcon from 'shared/assets/icons/sidebar-toggle-close.svg';
import SidebarOpenIcon from 'shared/assets/icons/sidebar-toggle-open.svg';
import AboutIcon from 'shared/assets/icons/about-page.svg';
import MainIcon from 'shared/assets/icons/main-page.svg';

import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;

    const [collapsed, setCollapsed] = useState(false);

    const { t } = useTranslation();

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <MainIcon className={cls.icon} />
                    <span className={cls.link}>{t('Главная')}</span>
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} />
                    <span className={cls.link}>{t('О сайте')}</span>
                </AppLink>
            </div>
            <AppButton
                theme={ThemeButton.CLEAR}
                data-testid="sidebar-toggle"
                onClick={onToggle}
                className={cls.collapsedBtn}
            >
                {collapsed ? <SidebarCloseIcon /> : <SidebarOpenIcon />}
            </AppButton>
            <div className={cls.switcher}>
                <ThemeSwitcher />
            </div>
            <LangSwitcher />
            <BugButton />
        </aside>
    );
};
