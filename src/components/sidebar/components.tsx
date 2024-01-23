import { useEffect, useState } from 'react';
import { CommonProps } from '../../@types/common';
import { clsxMerge } from '../../common/utils/classNameUtils';

export interface SideBarProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonProps {
  width?: string;
  logo?: string;
  logoStyle?: string;
  backgroundColor?: string;
  topItemData: {
    icon: string;
    text: string;
    onClick: () => void;
  }[];
  bottomItemData?: {
    icon: string;
    text: string;
    onClick: () => void;
  }[];
  defaultSelected?: string;
  itemTextColor?: string;
  itemTextSize?: string;
  itemTextHoverColor?: string;
  itemTextActiveColor?: string;
  itemIconStyle?: string;
}

const Component: React.FC<SideBarProps> = ({
  width,
  logo,
  logoStyle,
  backgroundColor,
  defaultSelected,
  topItemData = [],
  bottomItemData = [],
  itemTextColor,
  itemTextSize,
  itemTextHoverColor,
  itemTextActiveColor,
  itemIconStyle,
}) => {
  const [selected, setSelected] = useState<string>(defaultSelected || '');

  useEffect(() => {
    setSelected(topItemData[0]?.text || '');
  }, []);

  return (
    <div
      className={clsxMerge(
        'ss text-[16px] h-screen flex flex-col justify-between pb-[50px] sticky left-0 top-0',
        backgroundColor ? `bg-[${backgroundColor}]` : 'bg-[#141627]',
        width ? `[w-${width}]` : 'w-[16vw]'
      )}
    >
      <div>
        <div className="flex mb-[40px] pt-5 pl-[36px]">
          {logo ? (
            <img
              src={logo}
              alt="logo"
              className={clsxMerge(
                'w-[80%] object-contain',
                logoStyle && logoStyle
              )}
            />
          ) : null}
        </div>
        <ul>
          {topItemData.map((item, index) => (
            <li
              className={clsxMerge(
                'py-3 cursor-pointer px-[40px] flex items-center gap-3 text-Blue-50',
                selected === item.text
                  ? ' border-l-4 border-[#C9E0EF] pl-[36px] font-bold  text-Blue-50'
                  : '',
                itemTextColor ? `text-[${itemTextColor}]` : ' text-Blue-50',
                itemTextSize ? `text-[${itemTextSize}]` : 'text-[14px]',
                selected === item.text
                  ? itemTextActiveColor
                    ? `text-[${itemTextActiveColor}]`
                    : 'text-Blue-50'
                  : 'text-Blue-50',
                itemTextHoverColor
                  ? `hover:text-[${itemTextHoverColor}]`
                  : 'hover:text-Blue-50'
              )}
              onClick={() => {
                item.onClick();
                setSelected(item.text);
              }}
              key={`${item.text}-${index}-top`}
            >
              <img
                src={item.icon}
                className={clsxMerge(
                  'w-[15px] h-[15px]',
                  itemIconStyle ? itemIconStyle : ''
                )}
                alt={item.text}
              />
              {item.text}
            </li>
          ))}
        </ul>
      </div>
      <ul>
        {bottomItemData.map((item, index) => (
          <li
            className={clsxMerge(
              'py-3 cursor-pointer px-[40px] flex items-center gap-3 text-Blue-50',
              selected === item.text
                ? ' border-l-4 border-[#C9E0EF] pl-[36px] font-bold  text-Blue-50'
                : '',
              itemTextColor ? `text-[${itemTextColor}]` : ' text-Blue-50',
              itemTextSize ? `text-[${itemTextSize}]` : 'text-[14px]',
              selected === item.text
                ? itemTextActiveColor
                  ? `text-[${itemTextActiveColor}]`
                  : 'text-Blue-50'
                : 'text-Blue-50',
              itemTextHoverColor
                ? `hover:text-[${itemTextHoverColor}]`
                : 'hover:text-Blue-50'
            )}
            onClick={() => {
              item.onClick();
              setSelected(item.text);
            }}
            key={`${item.text}-${index}-bottom`}
          >
            <img
              src={item.icon}
              className={clsxMerge(
                'w-[15px] h-[15px]',
                itemIconStyle && itemIconStyle
              )}
              alt="users"
            />
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Component;
