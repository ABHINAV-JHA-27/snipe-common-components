import { useState } from "react";
import { CommonProps } from "../../@types/common";
import clsx from "clsx";

export interface RadioProps
    extends React.HTMLAttributes<HTMLDivElement>,
        CommonProps {
    onSelect: () => void;
    defaultSelected: boolean;
    textColor?: string;
    fontSize?: string;
    radioStyle?: string;
}

const Component: React.FC<RadioProps> = ({
    onSelect,
    defaultSelected,
    text,
    className,
    textColor,
    fontSize,
    radioStyle,
}) => {
    const [selected, setSelected] = useState(defaultSelected || false);
    return (
        <div
            className={clsx(
                "flex items-center p-3 border rounded-[24px] gap-2 border-Purple-100",
                selected ? "bg-Blue-200" : "bg-Purple-50",
                className || ""
            )}
        >
            <input
                type="radio"
                value=""
                name="bordered-radio"
                className={clsx(
                    "w-[18px] h-[18px] ",
                    selected
                        ? "text-Purple-500 bg-Blue-200"
                        : " text-Blue-800 bg-Purple-50",
                    radioStyle || ""
                )}
                checked={selected}
                onClick={() => {
                    if (!selected) onSelect();
                    setSelected(!selected);
                }}
            />
            <label
                className={clsx(
                    " text-[18px] font-DMSans",
                    selected
                        ? "font-[500] text-Purple-500"
                        : "font-[400] text-Blue-800",
                    textColor || "",
                    fontSize || ""
                )}
            >
                {text}
            </label>
        </div>
    );
};

export default Component;
