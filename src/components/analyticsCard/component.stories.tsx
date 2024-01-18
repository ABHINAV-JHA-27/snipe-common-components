import type { Meta, StoryObj } from "@storybook/react";
import AnalyticsCard from "./component";

const meta: Meta = {
    title: "AnalyticsCard",
    component: AnalyticsCard,
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Example: Story = {
    args: {
        cardColor: "purple-200",
        heading1: "Total Coins",
        heading2: "240000",
        percentage: 75,
        percentageVisibility: true,
    },
};
