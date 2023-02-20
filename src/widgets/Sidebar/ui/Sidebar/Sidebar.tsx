import React, { useState } from 'react';

import { classNames } from 'shared/lib/classNames/classNames';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { BugButton } from 'app/providers/ErrorBoundary';
import { useTranslation } from 'react-i18next';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string
}

export const Sidebar = (props: SidebarProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(!collapsed);
    };

    return (
        <aside
            data-testid="sidebar"
            className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
        >
            <AppButton
                data-testid="sidebar-toggle"
                onClick={onToggle}
            >
                {t('toggle')}
            </AppButton>
            <div className={cls.switcher}>
                <ThemeSwitcher />
            </div>
            <LangSwitcher />
            <BugButton />
        </aside>
    );
};
