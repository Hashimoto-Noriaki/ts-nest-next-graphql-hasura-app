// src/components/SignupButton.stories.tsx

import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SignupButton from './SignupButton';

// ストーリーブックのMeta情報を設定
export default {
  title: 'Components/SignupButton',  // Storybook内での表示名
  component: SignupButton,          // 表示するコンポーネント
  argTypes: {
    onClick: { action: 'clicked' },  // クリックアクションをStorybookでトラッキング
  },
} as Meta;

// Storyの定義
const Template: StoryFn<typeof SignupButton> = (args) => <SignupButton {...args} />;
// const Template: StoryFn<typeof LoginButton> = (args) => (
// コンポーネントの例
export const Default = Template.bind({});
Default.args = {
  onClick: () => console.log('新規登録ボタンがクリックされました'),
};
