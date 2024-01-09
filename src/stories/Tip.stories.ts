import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "../components";
import Tip from "../components/Tip";

const meta = {
  title: 'Tip',
  component: Tip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    mode: 'default',
    text: ['Нажмите'],
    tip: 'Enter'
  },
};

export const Primary: Story = {
  args: {
    mode: 'primary',
    text: ['Нажмите', 'для продолжения'],
    tip: 'Enter'
  },
};

export const Grey: Story = {
  args: {
    mode: 'grey',
    text: ['Нажмите'],
    tip: 'Enter'
  },
};
