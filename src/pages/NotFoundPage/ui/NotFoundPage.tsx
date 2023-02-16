import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}

export const NotFoundPage = (props: NotFoundPageProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.NotFoundPage, {}, [className])}>
            <div className={cls.wrapper}>
                <span className={cls.errorNumber}>404</span>
                <h1>{t('Страница не найдена')}</h1>
            </div>
        </div>
    );
};
