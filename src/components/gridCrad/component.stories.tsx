import type { Meta, StoryObj } from "@storybook/react";
import CardWithImage from "./component";

const meta: Meta = {
    title: "CardWithImage",
    component: CardWithImage,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        imageUrl: "",
        heading1: "Timer Notification",
        heading2: "Timer Notification info",
        pillText: "Target 1",
    },
};
