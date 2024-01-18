export interface CircleButtonProps {
    onClick: () => void;
    icon: React.ReactNode;
}

const CircleButton: React.FC<CircleButtonProps> = ({ onClick, icon }) => {
    return (
        <button
            className="w-12 h-12 flex items-center justify-center bg-purple-100 border border-purple-300 rounded-full"
            onClick={onClick}
        >
            {icon}
        </button>
    );
};

export default CircleButton;
