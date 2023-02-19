import { classNames } from 'shared/lib/classNames/classNames';
import { useEffect, useState } from 'react';
import { AppButton } from 'shared/ui/AppButton/AppButton';
import { useTranslation } from 'react-i18next';

interface BugButtonProps {
    className?: string
}

// Компонент для тестирования
export const BugButton = (props: BugButtonProps) => {
    const { className } = props;
    const { t } = useTranslation();

    const [error, setError] = useState(false);

    const throwError = () => setError(true);

    useEffect(() => {
        if (error) throw new Error();
    }, [error]);

    return (
        <AppButton
            className={classNames('', {}, [className])}
            onClick={throwError}
        >
            {t('throw error')}
        </AppButton>
    );
};
