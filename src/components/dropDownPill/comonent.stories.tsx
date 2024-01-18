// DropdownPill.stories.tsx
import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import DropdownPill from './component';

const meta = {
  title: 'DropdownPill',
  component: DropdownPill,
} as Meta<typeof DropdownPill>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    options: ['Option 1', 'Option 2', 'Option 3'],
    onSelect: (selectedOption: string) => {
      console.log(`Selected: ${selectedOption}`);
    },
  },
};
