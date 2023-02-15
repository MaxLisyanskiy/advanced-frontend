import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string
}

export const LangSwitcher = (props: LangSwitcherProps) => {
    const { className } = props;
    const { t, i18n } = useTranslation();

    const onToggle = () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };

    return (
        <AppButton
            className={classNames(cls.LangSwitcher, {}, [className])}
            onClick={onToggle}
        >
            {t('Язык')}
        </AppButton>
    );
};
