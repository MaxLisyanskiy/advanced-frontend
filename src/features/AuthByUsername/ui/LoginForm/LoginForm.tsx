import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';
import { AppInput } from 'shared/ui/AppInput/AppInput';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}

export const LoginForm = (props: LoginFormProps) => {
    const { className } = props;
    const { t } = useTranslation();

    return (
        <div className={classNames(cls.LoginForm, {}, [className])}>
            <AppInput
                autofocus
                type="text"
                className={cls.input}
                placeholder={t('Введите username')}
            />
            <AppInput
                type="text"
                className={cls.input}
                placeholder={t('Введите пароль')}
            />
            <AppButton theme={ThemeButton.OUTLINE} className={cls.loginBtn}>
                {t('Войти')}
            </AppButton>
        </div>
    );
};
