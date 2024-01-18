import { useState } from "react";

interface FilterPillProps {
    parameter: string;
    filterOptions: string[];
    onSelect: (selectedOption: string) => void;
}

const FilterPill: React.FC<FilterPillProps> = ({
    parameter,
    filterOptions,
    onSelect,
}) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="flex space-x-2">
            <div className="bg-blue-200 text-grey-600 rounded-full px-1 py-1 w-1/8 flex items-center">
                <span className="text-sm py-1 px-2">{parameter}:</span>
                <div className="relative inline-block text-left bg-white rounded-full">
                    <div className="relative inline-block text-left">
                        <button
                            type="button"
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-700 bg-transparent focus:outline-none"
                        >
                            <span className="text-grey-900">
                                {selectedOption || "Select an option"}
                            </span>
                            <svg
                                className="-mr-1 ml-2 h-5 w-5"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 12a1 1 0 01-.707-.293l-3-3a1 1 0 011.414-1.414L10 9.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-.707.293z"
                                    clipRule="evenodd"
                                />
                            </svg>
                        </button>

                        {isOpen && (
                            <div className="origin-top-right absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                                <div
                                    className="py-1"
                                    role="menu"
                                    aria-orientation="vertical"
                                    aria-labelledby="options-menu"
                                >
                                    {filterOptions.map((option) => (
                                        <div
                                            key={option}
                                            onClick={() =>
                                                handleOptionClick(option)
                                            }
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                            role="menuitem"
                                        >
                                            {option}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FilterPill;
