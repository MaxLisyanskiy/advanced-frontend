import { render, screen } from '@testing-library/react';
import { AppButton, ThemeButton } from 'shared/ui/AppButton/AppButton';

describe('AppButton', () => {
    test('Test render', () => {
        render(<AppButton>TEST</AppButton>);
        expect(screen.getByText('TEST')).toBeInTheDocument();
    });

    test('Test clear theme', () => {
        render(<AppButton theme={ThemeButton.CLEAR}>TEST</AppButton>);
        expect(screen.getByText('TEST')).toHaveClass('clear');
        screen.debug();
    });
});
