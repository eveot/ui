import type { Meta, StoryObj } from '@storybook/react';

import { Checkbox } from "../components";

const meta = {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const IsActive: Story = {
  args: {
    isActive: true,
    label: 'Content',
  },
};

export const IsDeactivated: Story = {
  args: {
    isActive: false,
    label: 'Content',
  },
};
