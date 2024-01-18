import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { useState } from "react";
import { CommonProps } from "../../@types/common";

export interface HeaderProps extends CommonProps {
    btnText?: string;
    icon?: boolean;
    btn?: boolean;
    textSize?: string;
    // onClick?: () => void;
    dropdownItems?: { label: string; onClick: () => void }[];
    customIcon?: any;
    textColor?: string;
    btnColor?: string;
}

const Component: React.FC<HeaderProps> = ({
    btnText,
    btnColor,
    text,
    customIcon,
    // onClick,
    btn,
    dropdownItems,
    icon,
    // @ts-ignore
    classname = "",
    textSize,
    textColor,
}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handleDropdownItemClick = (itemOnClick: () => void) => {
        setIsDropdownOpen(false);
        itemOnClick();
    };

    return (
        <header
            className={clsx("p-4 h-9 w-full flex items-center justify-between")}
        >
            <text
                className={clsx(
                    " text-btns-12 font-[700] font-Cardo",
                    textSize,
                    textColor
                )}
            >
                {text}
            </text>

            {btn && (
                <div className="relative">
                    <button
                        className={clsx(
                            "flex gap-1  font-[700] font-DMSans items-center border-solid h-9 w-[162px] border-2 border-Purple-100 rounded-[18px] py-[9px]",
                            { "justify-center": !icon }
                        )}
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        {icon && <span className="mr-1">{customIcon}</span>}
                        <span className={clsx(btnColor)}>{btnText}</span>
                        <FontAwesomeIcon icon={faCaretDown} className="mr-2" />
                    </button>

                    {isDropdownOpen && (
                        <div
                            className={clsx(
                                "absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            )}
                        >
                            {dropdownItems?.map((item, index) => (
                                <div
                                    key={index}
                                    className={clsx("py-1")}
                                    role="none"
                                    onClick={() =>
                                        handleDropdownItemClick(item.onClick)
                                    }
                                >
                                    {item.label}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </header>
    );
};

export default Component;
