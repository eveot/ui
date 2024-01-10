import type { Meta, StoryObj } from '@storybook/react';

import Dropdown from "../components/Dropdown";

const meta = {
  title: 'Dropdown',
  component: Dropdown,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dropdown>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Close: Story = {
  args: {
    children: 'Нажмите кнопку',
    callbacks: [
      {
        value: 'Open',
        callback: {
          click: () => alert('Callback Click')
        }
      },
      {
        value: 'Clear',
        callback: {
          mouseLeave: () => alert('Callback Mouse Leave')
        }
      },
      {
        value: 'Close',
        callback: {
          mouseMove: () => alert('Callback Mouse Move')
        }
      }
    ]
  },
};
