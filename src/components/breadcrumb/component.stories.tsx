import type { Meta, StoryObj } from "@storybook/react";
import Breadcrumb from "./component";

const meta = {
    title: "Breadcrumb",
    component: Breadcrumb,
    // parameters: { layout: "centered" }
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        items: [
            { label: "Select template", to: "/", onClick: () => {} },
            { label: "Select contacts", to: "/category", onClick: () => {} },
            {
                label: "Add details",
                to: "/category/subcategory",
                onClick: () => {},
            },
            { label: "Review", to: "/review", onClick: () => {} },
            { label: "Schedule and Send", onClick: () => {} },
        ],
        itemTextActiveColor: "text-Purple-500 ",
        itemTextSize: "",
        text: "",
        itemTextColor: "text-Grey-200",
        currentIdx: 0,
    },
};
