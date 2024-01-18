import type { Meta, StoryObj } from "@storybook/react";
import Accordion from "./component";

const meta = {
    title: "Accordion",
    component: Accordion,
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        // customIcon: (
        //     <img src={accordionicon} width={60} height={60} className="" />
        // ),
        // userProfile: <img src={profile} width={24} height={24} className="" />,
        userName: "User name",
        heading: "Token name 1",
        buttonText: "Modify",
        // customComponent: <div></div>,
    },
};

// {<div className='flex gap-2 items-center'>
// <div className='flex items-center'>
//     <img src={accordionicon} width={60} height={60} className=''/>,
// </div>
// <div className='flex flex-col '>
//         <div className='font-[700] flex gap-2 text-Grey-500 text-[24px]'>Token name 1<span className='font-[500] text-center flex items-center text-Green-900 text-[12px]'> Created by:  </span>
//         <span className='flex items-center'><img src={profile} width={24} height={24} className=''/></span>
//         <span  className='font-[500] text-Green-900 text-[12px] flex items-center'> User name </span>
//         </div>
//         <div className='flex gap-2'>
//                 <div className='font-[500] text-Grey-400 text-[18px]'>Ratio - <span className='font-[700] text-Grey-500 text-[18px]'>2:1</span></div>
//                 <p>|</p>
//                 <div className='font-[500] text-[18px]'>Monetized</div>
//                 <p>|</p>
//                 <div className='font-[500] text-Grey-400 text-[18px]'>Expiration time - <span  className='font-[500] text-Grey-500 text-[18px]'>2 months</span></div>
//         </div>
// </div>
// </div>}
