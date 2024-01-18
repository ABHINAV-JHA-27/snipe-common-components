import { useState } from "react";

interface CheckboxTableProps {
    columns: string[];
    data: {
        "Rule Name": string;
        [key: string]: string | number;
    }[];
}

const CheckboxTable: React.FC<CheckboxTableProps> = ({ columns, data }) => {
    const [selectedRows, setSelectedRows] = useState<string[]>([]);

    const handleCheckboxChange = (rowKey: string) => {
        if (selectedRows.includes(rowKey)) {
            setSelectedRows(selectedRows.filter((key) => key !== rowKey));
        } else {
            setSelectedRows([...selectedRows, rowKey]);
        }
    };

    return (
        <div className="w-full overflow-x-auto">
            <table className="w-full text-sm border-collapse border-2 border-purple-200 rounded-lg">
                <thead>
                    <tr className="bg-purple-100">
                        <th className="font-semibold text-base p-2 text-Grey-400">
                            Rule Name
                        </th>
                        {columns.map((column, index) => (
                            <th
                                key={index}
                                className="font-semibold text-base p-2 text-Grey-400"
                            >
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((row, rowIndex) => (
                        <tr
                            key={rowIndex}
                            className={
                                rowIndex % 2 === 0
                                    ? "bg-Yellow-300"
                                    : "bg-Green-300"
                            }
                        >
                            <td className="p-2">
                                <input
                                    type="checkbox"
                                    checked={selectedRows.includes(
                                        rowIndex.toString()
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange(
                                            rowIndex.toString()
                                        )
                                    }
                                />
                            </td>
                            {columns.map((column, colIndex) => (
                                <td
                                    key={colIndex}
                                    className="p-2 text-center text-purple-800 text-base font-semibold"
                                >
                                    {row[column]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default CheckboxTable;
