import { CommonProps } from "../../@types/common";
import clsx from "clsx";

export interface ChipsProps extends CommonProps {
    icon?: boolean;
    customIcon?: any;
    bg?: string;
    textColor?: string;
    textSize?: string;
}

const Component: React.FC<ChipsProps> = ({
    text,
    bg,
    icon,
    textColor,
    textSize,
    customIcon,
}) => {
    return (
        <div
            className={clsx(
                "flex flex-row gap-x-2 px-[12px] py-[4px] font-DMSans font-[500] rounded-full",
                bg,
                textColor,
                textSize
            )}
        >
            {text}
            {icon && <span>{customIcon}</span>}
        </div>
    );
};

export default Component;
