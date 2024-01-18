import type { Meta, StoryObj } from "@storybook/react";
import List from "./component";

const meta = {
    title: "List",
    component: List,
    parameters: { layout: "centered" },
} satisfies Meta<typeof List>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        heading: "Campaign name",
        text: "",
        points: [
            { label: "Sent on - Nov 05, 2023 at 10:00 PM" },
            { label: "Opened on - Nov 05, 2023 at 11:00 PM" },
        ],
        customIcon: "",
        isLocal: false,
    },
};
