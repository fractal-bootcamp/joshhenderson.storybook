import type { Meta, StoryObj } from '@storybook/react'
import { fn } from "@storybook/test";
import Task from './Tasklist';

const meta: Meta<typeof Task> = {
    component: Task,
    parameters: {
        backgrounds: { default: 'dark' }
    },
    argTypes: {
        backgroundColor: { control: 'color' },
        borderColor: { control: 'color' }
    },
    title: 'Task',

};


export default meta;
type Story = StoryObj<typeof Task>;

export const Default = {
    args: {
        task: {
            title: 'test',
            description: 'wefegrhtjt',
        },
    },
};

export const ActionData = {
    onComplete: fn()
};

