export interface TextFieldInputProps {
    checkboxLabel?: string;
    isChecked?: boolean;
    onCheckboxChange?: (checked: boolean) => void;
    inputLabel?: string;
}

const TextFieldInput: React.FC<TextFieldInputProps> = ({
    checkboxLabel,
    isChecked,
    onCheckboxChange,
    inputLabel,
}) => {
    return (
        <div className="bg-blue-100 p-4 w-1/4">
            <div className="flex flex-col space-y-2">
                {checkboxLabel && (
                    <div className="flex items-center">
                        <input
                            type="checkbox"
                            id="checkbox"
                            checked={isChecked}
                            onChange={(e) =>
                                onCheckboxChange &&
                                onCheckboxChange(e.target.checked)
                            }
                            className="mr-2 outline-none focus:outline-none"
                        />
                        <label
                            htmlFor="checkbox"
                            style={{
                                textDecoration: isChecked
                                    ? "none"
                                    : "line-through",
                            }}
                            className="text-Grey-400"
                        >
                            {checkboxLabel}
                        </label>
                    </div>
                )}
                {inputLabel && (
                    <label htmlFor="input" className="mb-1 text-Grey-400">
                        {inputLabel}
                    </label>
                )}
                {isChecked !== false && (
                    <input
                        type="text"
                        id="input"
                        placeholder="- eg: 0.5, 1, 2.5, or 3.5 -"
                        className="border-2 border-blue-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />
                )}
            </div>
        </div>
    );
};

export default TextFieldInput;
