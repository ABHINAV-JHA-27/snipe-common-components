import { CommonProps } from '../../@types/common';
import { clsxMerge } from '../../common/utils/classNameUtils';

export interface TabBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonProps {
  selectedTab: string;
  setSelectedTab: (tab: string) => void;
  items: string[];
  bottomBarVisible?: boolean;
  bottomBarColor?: string;
  tabTextSize?: number;
  tabTextColor?: string;
  selectedTabTextColor?: string;
  selectedTabBottomBarColor?: string;
  textColors?: string;
}

const Component: React.FC<TabBarProps> = ({
  selectedTab,
  setSelectedTab,
  items = [],
  bottomBarVisible = false,
  bottomBarColor,
  tabTextSize,
  tabTextColor,
  selectedTabTextColor,
  selectedTabBottomBarColor,
}) => {
  return (
    <div className="flex flex-col w-full mt-5">
      <div className="flex flex-row w-full items-center gap-x-3">
        {items.map((item) => (
          <div
            className="flex flex-col cursor-pointer relative"
            onClick={() => {
              setSelectedTab(item);
            }}
          >
            <span
              className={clsxMerge(
                'text-[14] font-[700] font-DMSans',
                tabTextSize ? `text-[${tabTextSize}]` : 'text-[14]'
              )}
              style={{
                color:
                  selectedTab === item
                    ? selectedTabTextColor
                      ? `text-[${selectedTabTextColor}]`
                      : 'text-Purple-500'
                    : tabTextColor
                      ? `text-[${tabTextColor}]`
                      : 'text-[#000000]',
              }}
            >
              {item}
            </span>
            {selectedTab === item ? (
              <div
                className={clsxMerge(
                  'flex flex-1 border-[2px] rounded-[2px] absolute bottom-[-6px] left-0 right-0',
                  selectedTabBottomBarColor
                    ? `border-${selectedTabBottomBarColor}`
                    : 'border-Purple-500'
                )}
              />
            ) : null}
          </div>
        ))}
      </div>
      {bottomBarVisible ? (
        <div
          className={clsxMerge(
            'flex flex-1 border-[2px] rounded-[2px] mt-[2px]',
            bottomBarColor ? `border-${bottomBarColor}` : 'border-btns-5'
          )}
        />
      ) : null}
    </div>
  );
};

export default Component;
