import type { Meta, StoryObj } from "@storybook/react";
import Chips from "./component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import React from "react";
const meta = {
    title: "Chips",
    component: Chips,
    parameters: { layout: "centered", },
} satisfies Meta<typeof Chips>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: { text: "Primary", bg: 'bg-blue-500', textColor: 'text-white', icon: true, textSize: 'text-[18px]',  customIcon:  <FontAwesomeIcon icon={faCheckCircle} />  },
};

export const Secondary: Story = {
    args: { text: "Secondary", bg: 'bg-addon-3', textColor: 'text-white', icon: true, textSize: 'text-[18px]', customIcon:  <FontAwesomeIcon icon={faExclamationCircle} />  },
};

export const Danger: Story = {
    args: { text: "Danger", bg: 'bg-addon-2', icon: true, textColor: 'text-white', textSize: 'text-[18px]', customIcon:  <FontAwesomeIcon icon={faExclamationCircle} />  },
};

// export const Warning: Story = {
//     args: { text: "Warning", color: 'warning'  },
// };

export const Success: Story = {
    args: { text: "Success",bg: 'bg-addon-1', icon: true, textColor: 'text-white', textSize: 'text-[18px]',
    customIcon:  <FontAwesomeIcon icon={faCheckCircle} />
},
};