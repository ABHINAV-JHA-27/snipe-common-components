interface TwoTextFieldsRowProps {
    label1: string;
    label2: string;
    placeholder1: string;
    placeholder2: string;
    isChecked1: boolean;
    onCheckboxChange1: (checked: boolean) => void;
}

const TwoTextFieldsRow: React.FC<TwoTextFieldsRowProps> = ({
    label1,
    label2,
    placeholder1,
    placeholder2,
    isChecked1,
    onCheckboxChange1,
}) => {
    return (
        <div className="bg-blue-100 p-4 w-2/6">
            <div className="flex space-x-4">
                <div className="flex flex-col">
                    <label
                        className={`text-Grey-400 ${
                            isChecked1 ? "" : "line-through"
                        }`}
                    >
                        <input
                            type="checkbox"
                            checked={isChecked1}
                            onChange={(e) =>
                                onCheckboxChange1(e.target.checked)
                            }
                            className="mr-2"
                        />
                        {label1}
                    </label>
                    <input
                        type="text"
                        placeholder={placeholder1}
                        className={`border-2 border-blue-300 p-2 rounded-md focus:outline-none focus:border-blue-500 ${
                            !isChecked1 ? "opacity-50" : ""
                        }`}
                        disabled={!isChecked1}
                    />
                </div>
                <div className="flex flex-col">
                    <label className="text-Grey-400">{label2}</label>
                    <input
                        type="text"
                        placeholder={placeholder2}
                        className="border-2 border-blue-300 p-2 rounded-md focus:outline-none focus:border-blue-500"
                    />
                </div>
            </div>
        </div>
    );
};

export default TwoTextFieldsRow;
