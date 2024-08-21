import React from 'react';
import { StoryFn, Meta } from '@storybook/react';
import Button from './Button';

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;

const Template: StoryFn = (args: any) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: 'Click me',
};
