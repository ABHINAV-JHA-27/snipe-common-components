import type { Meta, StoryObj } from "@storybook/react";
import Modals from "./component";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationCircle,faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const meta = {
    title: "Modals",
    component: Modals,
    // parameters: { layout: "centered", },
} satisfies Meta<typeof Modals>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {  btnright: 'Start',btnleft: 'Cancel', heading: "Forward mail to inbox", text: 'Lorem ipsum dolor sit amet consectetur. Eget egestas quis cursus elementum laoreet leo. Blandit cras pulvinar odio mauris sagittis ut dolor viverra accumsan.',
      arrow:  <FontAwesomeIcon icon={faArrowLeft} className="arrow-icon" />,
      cancel: () => alert("Cancel"),
      start: () => alert("Start"),
      customComponent:   <div className='flex flex-col gap-4'>
        <label className='font-[500] text-[15px] text-[#5F5E76] font-DMSans'>Existing email address</label>
        <input className='border border-2 rounded-[4px] p-3 border-btns-5'
          type="text"
        //   value={inputValue}
        //   onChange={handleInputChange}
        />
          <div className="error-container p-3 rounded-[3px] bg-btns-3 flex gap-2">
          <FontAwesomeIcon icon={faExclamationCircle} className='text-states-9' />
            <span className="font-[400] text-[12px] text-states-9 font-DMSans">Lorem ipsum dolor sit amet consectetur. Molestie sit tellus praesent egestas. Quisque facilisi eu</span>
          </div>
        
      </div>
    },
};

