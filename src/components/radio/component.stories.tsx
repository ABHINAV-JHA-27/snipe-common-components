import type { Meta, StoryObj } from "@storybook/react";
import Radio from "./component";

const meta = {
    title: "Radio",
    component: Radio,
    parameters: { layout: "centered" },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        text: "Radio",
        className: "",
        textColor: "",
        fontSize: "",
        radioStyle: "",
        onSelect: () => {
            console.log("Radio selected");
        },
        defaultSelected: false,
    },
};
