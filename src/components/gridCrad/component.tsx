export interface CardWithImageProps {
    imageUrl: string;
    heading1: string;
    heading2: string;
    pillText: string;
}

const CardWithImage: React.FC<CardWithImageProps> = ({
    imageUrl,
    heading1,
    heading2,
    pillText,
}) => {
    return (
        <div className="rounded-md overflow-hidden w-1/6 border-2 border-blue-300">
            <img
                src={imageUrl}
                alt=" "
                className="w-full h-80 object-cover bg-blue-100 "
            />
            <div className="p-4">
                <h1 className="text-xl font-semibold text-blue-600 mb-2">
                    {heading1}
                </h1>
                <h2 className="text-base font-base text-blue-800 mb-4">
                    {heading2}
                </h2>
                <div className="bg-blue-200 text-blue-700 font-base rounded-full w-2/6 px-1 flex items-center space-x-2">
                    <div className="flex items-center space-x-1">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="h-2 w-2 text-blue-700"
                            viewBox="0 0 16 16"
                        >
                            <circle cx="8" cy="8" r="5" />
                        </svg>
                        <div>{pillText}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardWithImage;
