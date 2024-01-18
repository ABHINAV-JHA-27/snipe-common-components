import type { Meta, StoryObj } from "@storybook/react";
import NoDataFound from "./component";
const meta = {
    title: "No Data Found",
    component: NoDataFound,
    parameters: { layout: "centered" },
} satisfies Meta<typeof NoDataFound>;

export default meta;
type Story = StoryObj<typeof meta>;

export const NoData: Story = {
    args: {
        text: "  .. hmm.. it’s time to start some campaigns ..",
        textSize: "text-[24px]",
        bg: "bg-Blue-100",
        textColor: "text-Purple-700",
        customIcon:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVRqpPHzfkvvGwYaHrCC_pg0u7B3ujpsDhE4Yili3o3tR3Q-Ge&s",
        isLocal: false,
    },
};
