import { CommonProps } from "../../@types/common";

import React, { useState } from "react";
export interface Modals
    extends React.HTMLAttributes<HTMLDivElement>,
        CommonProps {
    btnright?: string;
    btnleft?: string;
    heading?: string;
    arrow?: React.ReactNode;
    customComponent?: React.ReactNode;
    cancel?: React.MouseEventHandler<HTMLButtonElement>;
    start?: React.MouseEventHandler<HTMLButtonElement>;
}

const Component: React.FC<Modals> = ({
    btnright,
    btnleft,
    customComponent,
    heading,
    arrow,
    text,
    cancel,
    start,
}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            {!isModalOpen && (
                <button
                    type="button"
                    className="bg-btns-5 p-2 rounded-lg"
                    onClick={handleOpenModal}
                >
                    Open Modal
                </button>
            )}

            {isModalOpen && (
                <div className="bg-white flex gap-4 flex-col w-[816px] rounded-[12px] px-8 py-2">
                    <div className="flex  h-[36px] justify-between ">
                        <h3 className="text-btns-12 text-[36px] h-[36px] font-cardo font-[700] text-left">
                            {heading}
                        </h3>
                        <button
                            type="button"
                            className="text-btns-12  my-2 text-end"
                            onClick={handleCloseModal}
                        >
                            <svg
                                className="w-5 h-5 my-2 "
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                        </button>
                    </div>
                    <p className="font-[400] my-2 text-[18px] leading-[23px] w-[684px] h-[46px] text-states-9">
                        {text}
                    </p>

                    {customComponent}
                    <div className="flex justify-between">
                        <button
                            type="button"
                            className="rounded-[6px] w-[107px] h-[42px] text-start text-states-9 "
                            onClick={cancel}
                        >
                            {arrow}{" "}
                            <span className="pl-1 text-[24px]  font-[400] font-DMSans">
                                {btnleft}
                            </span>
                        </button>
                        <button
                            type="button"
                            className="text-white w-[91px] h-[48px] rounded-[3px] bg-btns-6  text-btns-1 font-[700] font-DMSans text-[24px]"
                            onClick={start}
                        >
                            {btnright}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default Component;
