import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import LoginButton from './LoginButton';

export interface LoginButtonProps {
    onClick?: () => void;
}

// Meta に型を指定
export default {
  title: 'Components/LoginButton',
  component: LoginButton,
  argTypes: {
    onClick: { action: 'clicked' },
  },
} as Meta<LoginButtonProps>;

// テンプレートを作成
const Template: StoryFn<LoginButtonProps> = (args: LoginButtonProps) => <LoginButton {...args} />;

// 各ストーリーをエクスポート
export const Default = Template.bind({});
Default.args = {}; // デフォルトの状態
