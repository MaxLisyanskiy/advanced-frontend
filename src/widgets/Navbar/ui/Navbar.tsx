import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppModal } from 'shared/ui/AppModal/AppModal';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string
}

export const Navbar = (props: NavbarProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal((prev) => !prev);
    }, []);

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppButton
                type="button"
                theme={ThemeButton.CLEAR_INVERTED}
                className={cls.links}
                onClick={onToggleModal}
            >
                {t('Войти')}
            </AppButton>
            <AppModal
                isOpen={isAuthModal}
                onClose={onToggleModal}
            >
                {/* eslint-disable */}
                asdsad
            </AppModal>
        </div>
    );
};
