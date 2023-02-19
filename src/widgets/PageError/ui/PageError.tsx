import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string
}

export const PageError = (props: PageErrorProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const reloadPage = () => {
        window.location.reload();
    };

    return (
        <div className={classNames(cls.PageError, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <AppButton onClick={reloadPage}>
                {t('Обновить страницу')}
            </AppButton>
        </div>
    );
};
