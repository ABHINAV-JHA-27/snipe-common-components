import type { Meta, StoryObj } from "@storybook/react";
import Header from "./component";
import React, { useState } from "react";
import profile from "../../../public/assests/profile.png";

const meta = {
    title: "Header",
    component: Header,
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Headers: Story = {
    args: {
        text: "Home",
        btnText: "ROG-IO 👋",
        icon: true,
        btn: true,
        btnColor: "text- Purple-900",
        textSize: "text-[36px]",
        textColor: "text-Purple-900",
        onClick: () => alert("Button Clicked"),
        dropdownItems: [
            { label: "Option 1", onClick: () => alert("Option 1 Clicked") },
            { label: "Option 2", onClick: () => alert("Option 2 Clicked") },
        ],
        customIcon: (
            <img src={profile} width={24} height={24} className="ml-4" />
        ),
    },
};
