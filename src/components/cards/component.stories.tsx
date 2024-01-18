import type { Meta, StoryObj } from "@storybook/react";
import Card from "./component";

const meta = {
    title: "Card",
    component: Card,
    parameters: { layout: "centered" },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        children: "Hello World",
        borderRadius: "10",
        padding: "p-[20px]",
        extraStyles: "shadow-md bg-red-500",
    },
};
