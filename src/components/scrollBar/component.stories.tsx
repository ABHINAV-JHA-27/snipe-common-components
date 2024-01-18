import { Meta, StoryObj } from "@storybook/react";
import Scrollbar from "./component";

const meta = {
  title: "Scrollbar",
  component: Scrollbar,
} satisfies Meta<typeof Scrollbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    contentHeight: 500,
    containerHeight: 200,
    onScroll: (scrollPercentage) => {
      console.log(`Scroll percentage: ${scrollPercentage}`);
    },
  },
};
