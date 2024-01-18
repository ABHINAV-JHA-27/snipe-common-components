import { useState } from "react";

interface DropdownPillProps {
    options: string[];
    onSelect: (selectedOption: string) => void;
}

const DropdownPill: React.FC<DropdownPillProps> = ({ options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState<string | null>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = (option: string) => {
        setSelectedOption(option);
        onSelect(option);
        setIsOpen(false);
    };

    return (
        <div className="relative inline-block text-left ml-24 ">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex  items-center px-4 py-2 border-2 text-sm font-medium rounded-md text-gray-700 bg-blue-100 border-purple-100 hover:bg-gray-50 focus:outline-none focus:ring focus:border-purple-300"
            >
                <span className="text-purple-800 ">
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
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {options.map((option) => (
                            <div
                                key={option}
                                onClick={() => handleOptionClick(option)}
                                className="block px-4 py-2 text-sm text-purple-700 hover:bg-gray-100 cursor-pointer"
                                role="menuitem"
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownPill;
