import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/ThemeProvider';
import { AppText, AppTextTheme } from './AppText';

export default {
    title: 'shared/AppText',
    component: AppText,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof AppText>;

const Template: ComponentStory<typeof AppText> = (args) => <AppText {...args} />;

export const FullText = Template.bind({});
FullText.args = {
    title: 'Title',
    text: 'Text',
};

export const Error = Template.bind({});
Error.args = {
    title: 'Title',
    text: 'Text',
    theme: AppTextTheme.ERROR,
};

export const OnlyWithTitle = Template.bind({});
OnlyWithTitle.args = {
    title: 'Title',
};

export const OnlyWithText = Template.bind({});
OnlyWithText.args = {
    text: 'Text',
};

export const FullTextDark = Template.bind({});
FullTextDark.args = {
    title: 'Title',
    text: 'Text',
};
FullTextDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyWithTitleDark = Template.bind({});
OnlyWithTitleDark.args = {
    title: 'Title',
};
OnlyWithTitleDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyWithTextDark = Template.bind({});
OnlyWithTextDark.args = {
    text: 'Text',
};
OnlyWithTextDark.decorators = [ThemeDecorator(Theme.DARK)];
