import type { Meta, StoryObj } from "@storybook/react";
import TabBar from "./component";

const meta = {
    title: "TabBar",
    component: TabBar,
    parameters: { layout: "centered" },
} satisfies Meta<typeof TabBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        selectedTab: "all",
        setSelectedTab: (item: string) => {
            console.log(item);
        },
        items: ["all", "favourites"],
        bottomBarVisible: true,
    },
};
