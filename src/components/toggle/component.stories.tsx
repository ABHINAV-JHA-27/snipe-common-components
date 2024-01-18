import type { Meta, StoryObj } from "@storybook/react";
import Toggle from "./component";

const meta = {
    title: "Toggle",
    component: Toggle,
    parameters: { layout: "centered" },
} satisfies Meta<typeof Toggle>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        dev: () => alert("Cancel"),
      production: () => alert("Start"),
        toggle: true,
        textLeft: 'Development',
        textRight: 'Production'
    },
};
