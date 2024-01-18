// TogglePill.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import TogglePill from './component';

const meta: Meta = {
  title: 'TogglePill',
  component: TogglePill,
} satisfies Meta<typeof TogglePill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    option1: 'Show Coins',
    option2: 'Show Monetary Value',
  },
};
