// Table.stories.tsx
import React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import CheckboxTable from "./component";

const meta: Meta = {
  title: "CheckboxTable",
  component: CheckboxTable,
} satisfies Meta<typeof CheckboxTable>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        columns: ['Name', 'Age', 'City'],
        data: [
          { 'Name': '-', Age: 30, City: '-' },
          { 'Name': '-', Age: 25, City: '-' },
          { 'Name': '-', Age: 30, City: '-' },
          { 'Name': '-', Age: 25, City: '-' },
          { 'Name': '-', Age: 30, City: '-' },
          { 'Name': '-', Age: 25, City: '-' },
          { 'Name': '-', Age: 30, City: '-' },
          { 'Name': '-', Age: 25, City: '-' },
        ],
      },
};
