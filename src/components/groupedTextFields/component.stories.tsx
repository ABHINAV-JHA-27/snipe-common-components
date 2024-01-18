// TwoTextFieldsRow.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import TwoTextFieldsRow from "./component";

const meta = {
  title: "TwoTextFieldsRow",
  component: TwoTextFieldsRow,
} as Meta<typeof TwoTextFieldsRow>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    label1: "Enter Cap Value",
    label2: "Enter percentage",
    placeholder1: "Input 1",
    placeholder2: "Input 2",
    isChecked1: true,
    onCheckboxChange1: (checked: boolean) => {
      console.log(`Checkbox 1 checked: ${checked}`);
    },

  },
};
