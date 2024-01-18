import type { Meta, StoryObj } from "@storybook/react";
import SideBar from "./components";

const meta = {
    title: "SideBar",
    component: SideBar,
} satisfies Meta<typeof SideBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        topItemData: [
            {
                text: "Dashboard",
                icon: "/icons/dashboard.svg",
                onClick: () => {},
            },
            {
                text: "Users",
                icon: "/icons/users.svg",
                onClick: () => {},
            },
            {
                text: "Settings",
                icon: "/icons/settings.svg",
                onClick: () => {},
            },
        ],
        bottomItemData: [
            {
                text: "Logout",
                icon: "/icons/logout.svg",
                onClick: () => {},
            },
        ],
    },
};
