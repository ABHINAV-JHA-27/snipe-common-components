export interface DatePickerInputProps {
    selectedDate: Date | null;
    onSelectDate: (date: Date | null) => void;
    isRequired: boolean;
}

const DatePickerInput: React.FC<DatePickerInputProps> = ({
    selectedDate,
    onSelectDate,
    isRequired,
}) => {
    return (
        <div className="bg-blue-100 p-4 w-1/4">
            <div className="flex flex-col space-y-2">
                <label htmlFor="startDate" className="text-Grey-400 text-sm">
                    Start date{" "}
                    {isRequired && <span className="text-red-500">*</span>}
                </label>
                <input
                    type="date"
                    id="startDate"
                    value={
                        selectedDate
                            ? selectedDate.toISOString().split("T")[0]
                            : ""
                    }
                    onChange={(e) => onSelectDate(new Date(e.target.value))}
                    className="border p-2 rounded-md border-purple-300 focus:outline-none focus:border-blue-500"
                    required={isRequired}
                />
            </div>
        </div>
    );
};

export default DatePickerInput;
