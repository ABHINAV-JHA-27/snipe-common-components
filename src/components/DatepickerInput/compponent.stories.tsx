import type { Meta, StoryObj } from "@storybook/react";
import DatePickerInput from "./component";

const meta = {
    title: "DatePickerInput",
    component: DatePickerInput,
} satisfies Meta<typeof DatePickerInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        selectedDate: null,
        onSelectDate: (date: Date | null) => {
            console.log("Selected date:", date);
        },
        isRequired: true,
    },
};
