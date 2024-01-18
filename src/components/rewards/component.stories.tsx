import type { Meta, StoryObj } from "@storybook/react";
import Rewards from "./component";
import React from "react";
import { Headers } from "../header/component.stories";
const meta = {
    title: "Rewards",
    component: Rewards,
    // parameters: { layout: "centered" },
    
} satisfies Meta<typeof Rewards>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {

    args: {
    
        activeIndex: 0,
        items: ["Monetized", "Non-Monetized"],
       
    },
};
