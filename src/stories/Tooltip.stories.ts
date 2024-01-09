import type { Meta, StoryObj } from '@storybook/react';

import { Button } from "../components";
import Tip from "../components/Tip";
import Tooltip from "../components/Tooltip";

const meta = {
  title: 'Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Tooltip>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Left: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'left' }
  },
};

export const LeftTop: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'left-top' }
  },
};

export const LeftBottom: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'left-bottom' }
  },
};

export const Right: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'right' }
  },
};

export const RightTop: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'right-top' }
  },
};

export const RightBottom: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'right-bottom' }
  },
};

export const Bottom: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'bottom' }
  },
};

export const BottomLeft: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'bottom-left' }
  },
};

export const BottomRight: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'bottom-right' }
  },
};

export const Top: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'top' }
  },
};

export const TopLeft: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'top-left' }
  },
};

export const TopRight: Story = {
  args: {
    children: 'Нажмите кнопку',
    tip: { hint: 'Текст подсказки', position: 'top-right' }
  },
};
