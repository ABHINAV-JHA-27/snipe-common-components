import { useEffect, useState } from "react";

export interface SearchBarProps {
    onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchQuery, setSearchQuery] = useState("");

    const handleSearch = () => {
        onSearch(searchQuery);
    };

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            handleSearch();
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
    }, [searchQuery]);

    return (
        <div className="flex items-center gap-2">
            <div className="relative">
                <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-1/2 left-3 transform -translate-y-1/2 text-gray-500"
                >
                    <path
                        d="M10.513 5.61449C10.2178 5.31853 9.86707 5.08384 9.48087 4.92388C9.09468 4.76393 8.68068 4.68187 8.26267 4.68243C7.84466 4.68187 7.43066 4.76393 7.04447 4.92388C6.65827 5.08384 6.30749 5.31853 6.01229 5.61449M13.1246 13.1246L16.5 16.5M8.26267 15.0253C11.9977 15.0253 15.0253 11.9977 15.0253 8.26267C15.0253 4.52769 11.9977 1.5 8.26267 1.5C4.52769 1.5 1.5 4.52769 1.5 8.26267C1.5 11.9977 4.52769 15.0253 8.26267 15.0253Z"
                        stroke="#727272"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
                <input
                    type="text"
                    placeholder="- search in Milestone -"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-96 p-2 pl-8 border-2 border-purple-300 rounded-lg bg-purple-50 rounded-3px outline-none  focus:border-purple-100"
                />
            </div>
        </div>
    );
};

export default SearchBar;
