import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from './component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const meta: Meta = {
  title: 'Button',
  component: Button,
  parameters: { layout: 'centered' },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const PrimaryFilled: Story = {
  args: {
    text: 'Button',
    name: 'primaryfilled',
    bg: 'bg-blue-500',
    righticon: false,
    textSize: 'text-lg',
    lefticon: true,
    onClick: () => alert('Clicked'),
    iconComponent: <FontAwesomeIcon icon={faCoffee} />,
  },
};

export const Primary: Story = {
  args: {
    text: 'Button',
    name: 'primary',
    borderColor: 'border-solid border-2 border-blue-500',
    onClick: () => alert('Clicked'),
    textSize: 'text-lg',
    righticon: false,
    lefticon: true,
    iconComponent: <FontAwesomeIcon icon={faCoffee} />,
  },
};
export const Secondary: Story = {
  args: {
    text: 'Add a Subscriber',
    name: 'secondary',
    borderColor: 'border-solid border-2 rounded-[6px] border-addon-3',
    onClick: () => alert('Clicked'),
    textSize: 'text-lg',
    righticon: false,
    lefticon: true,
    iconComponent: <FontAwesomeIcon icon={faUser} />,
  },
};

export const SecondaryFilled: Story = {
  args: {
    text: 'Button',
    name: 'secondaryfilled',
    bg: 'bg-addon-3',
    righticon: false,
    lefticon: true,
    textSize: 'text-lg',
    onClick: () => alert('Clicked'),
    iconComponent: <FontAwesomeIcon icon={faCoffee} />,
  },
};
export const TextButton: Story = {
  args: {
    text: 'Button',
    name: 'textbutton',
    borderColor: 'focus:outline-none',
    onClick: () => alert('Clicked'),
    textSize: 'text-lg',
    border: true,
    righticon: false,
    lefticon: true,
    iconComponent: <FontAwesomeIcon icon={faCoffee} />,
  },
};
