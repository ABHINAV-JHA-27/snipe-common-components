import { useState } from "react";

interface TogglePillProps {
    parameter: string;
    option1: string;
    option2: string;
    onSelect: (selectedOption: string) => void;
}

const TogglePill: React.FC<TogglePillProps> = ({
    option1,
    option2,
    onSelect,
}) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
    };

    return (
        <div className="flex space-x-2">
            <div className="bg-blue-200 text-gray-600 rounded-full px-1 py-1 w-1/8 flex items-center">
                <div className="flex space-x-4">
                    <div
                        className={`cursor-pointer text-sm font-semibold ${
                            selectedOption === option1
                                ? "bg-white text-grey-900"
                                : "text-purple-800"
                        } py-1 px-1 rounded-full`}
                        onClick={() => handleOptionClick(option1)}
                    >
                        {option1}
                    </div>
                    <div
                        className={`cursor-pointer text-sm font-semibold ${
                            selectedOption === option2
                                ? "bg-white text-grey-900"
                                : "text-purple-800"
                        } py-1 px-1 rounded-full`}
                        onClick={() => handleOptionClick(option2)}
                    >
                        {option2}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TogglePill;
