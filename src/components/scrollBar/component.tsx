import { useRef, useEffect, useState } from "react";

export interface ScrollbarProps {
    contentHeight: number;
    containerHeight: number;
    onScroll: (scrollPercentage: number) => void;
}

const Scrollbar: React.FC<ScrollbarProps> = ({
    contentHeight,
    containerHeight,
    onScroll,
}) => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const scrollbarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (scrollbarRef.current) {
            const handleScroll = () => {
                const { scrollTop, scrollHeight, clientHeight } =
                    scrollbarRef.current!;
                const newScrollPosition =
                    (scrollTop / (scrollHeight - clientHeight)) * 100;
                setScrollPosition(newScrollPosition);
                onScroll(newScrollPosition);
            };

            scrollbarRef.current.addEventListener("scroll", handleScroll);

            return () => {
                scrollbarRef.current!.removeEventListener(
                    "scroll",
                    handleScroll
                );
            };
        }
        return;
    }, [onScroll]);

    const handleScrollbarClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (scrollbarRef.current) {
            const { top, height } =
                scrollbarRef.current.getBoundingClientRect();
            const clickPosition = event.clientY - top;
            const newScrollPosition = (clickPosition / height) * 100;
            setScrollPosition(newScrollPosition);
            onScroll(newScrollPosition);

            const targetScrollTop =
                (newScrollPosition / 100) * (contentHeight - containerHeight);
            scrollbarRef.current.scrollTop = targetScrollTop;
        }
    };

    return (
        <div
            ref={scrollbarRef}
            className="overflow-y-auto scrollbar-w-2 scrollbar-track-bg scrollbar-thumb-bg"
            style={{ maxHeight: `${containerHeight}px` }}
        >
            <div
                className="h-full"
                style={{ height: `${contentHeight}px`, position: "relative" }}
                onClick={handleScrollbarClick}
            ></div>
            <div
                className={`absolute top-0 right-0 w-2 cursor-pointer`}
                style={{
                    height: `${containerHeight}px`,
                    background: "#471AB4",
                }}
            >
                <div
                    className={`bg-purple-10 h-full`}
                    style={{
                        height: `${scrollPosition}%`,
                        background: "linear-gradient(#471AB4, #471AB4)",
                    }}
                />
            </div>
        </div>
    );
};

export default Scrollbar;
