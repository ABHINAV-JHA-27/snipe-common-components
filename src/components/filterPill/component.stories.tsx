// FilterPill.stories.tsx
import React, { useState } from 'react';
import { Meta, StoryObj } from '@storybook/react';
import FilterPill from './component';

const meta = {
  title: 'FilterPill',
  component: FilterPill,
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    parameter: 'Category',
    filterOptions: ['Option 1', 'Option 2', 'Option 3'],
    onSelect: (selectedOption: string) => {
      console.log(`Selected: ${selectedOption}`);
    },
  },
};

