import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "./component";

const meta = {
    title: "SearchBar",
    component: SearchBar,
} satisfies Meta<typeof SearchBar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        onSearch: (query: string) => {
            console.log(`Searching for: ${query}`);
        },
    },
};
