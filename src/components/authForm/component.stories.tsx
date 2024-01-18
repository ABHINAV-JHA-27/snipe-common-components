import type { Meta, StoryObj } from "@storybook/react";
import AuthForm from "./component";

const meta = {
    title: "AuthForm",
    component: AuthForm,
} satisfies Meta<typeof AuthForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        type: "login",
    },
};
