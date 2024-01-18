import { CommonProps } from "../../@types/common";
export interface RewardsProps
    extends React.HTMLAttributes<HTMLDivElement>,
        CommonProps {
    activeIndex?: number;
    items: string[];
}

const Component: React.FC<RewardsProps> = () => {
    return <div className="flex gap-2"></div>;
};

export default Component;
