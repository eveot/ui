/// <reference types="react" />
import type { StoryObj } from '@storybook/react';
declare const meta: {
    title: string;
    component: ({ isActive, onClick, label, ...props }: import("../components/Checkbox/Checkbox").ButtonProps) => import("react").JSX.Element;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const IsActive: Story;
export declare const IsDeactivated: Story;
