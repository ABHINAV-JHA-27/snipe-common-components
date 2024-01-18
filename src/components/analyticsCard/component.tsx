import clsx from "clsx";

export interface CardProps {
    cardColor: string;
    heading1: string;
    heading2: string;
    percentage: number;
    percentageVisibility?: boolean;
}

const Card: React.FC<CardProps> = ({
    cardColor,
    heading1,
    heading2,
    percentage,
    percentageVisibility = true,
}) => {
    return (
        <div
            className={`bg-${cardColor} bg-purple-200 p-4 rounded-lg shadow-md max-w-xs w-full mx-auto`}
        >
            <h3 className="text-xl text-black">{heading1}</h3>
            <h1 className="text-2xl text-purple-900 my-2">{heading2}</h1>
            {percentageVisibility && (
                <div className="flex items-center">
                    <span
                        className={clsx(
                            "text-white rounded-full px-2 py-1 text-sm",
                            percentage > 0 ? "bg-green-700" : "bg-red-700"
                        )}
                    >
                        {Math.abs(percentage)}&nbsp;%
                    </span>
                </div>
            )}
        </div>
    );
};

export default Card;
