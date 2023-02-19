import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t('Главная', { ns: 'main' })}
        </div>
    );
};

export default MainPage;
