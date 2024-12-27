import { Meta, StoryFn } from '@storybook/react';
import LoginButton from './LoginButton';

export default {
  title: 'Components/LoginButton',
  component: LoginButton,
  parameters: {
    docs: {
      description: {
        component: 'ログイン用のボタンコンポーネントです。'
      }
    }
  }
} as Meta<typeof LoginButton>;

const Template: StoryFn<typeof LoginButton> = (args) => (
  <LoginButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  onClick: () => alert('ログインボタンがクリックされました')
};
