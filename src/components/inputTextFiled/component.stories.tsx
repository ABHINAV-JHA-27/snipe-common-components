import type { Meta, StoryObj } from "@storybook/react";
import TextFieldInput from "./component";

const meta = {
    title: "TextFieldInput",
    component: TextFieldInput,
} satisfies Meta<typeof TextFieldInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        checkboxLabel: "Enter cap value",
        isChecked: false,
        onCheckboxChange: (checked: boolean) => {
            console.log(`Checkbox state changed to: ${checked}`);
        },
    },
};
export const Secondary: Story = {
    args: {
        inputLabel: "Enter percentage",
    },
};
