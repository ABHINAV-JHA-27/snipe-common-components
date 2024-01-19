import { CommonProps } from '../../@types/common';
import { clsxMerge } from '../../common/utils/classNameUtils';

export interface BreadcrumbsProp
  extends React.HTMLAttributes<HTMLElement>,
    CommonProps {
  itemTextColor?: string;
  itemTextSize?: string;
  items?: {
    label: string;
    to?: string;
    onClick: () => void;
  }[];
  itemTextActiveColor?: string;
  currentIdx?: number;
  divider?: string;
}

const Component: React.FC<BreadcrumbsProp> = ({
  items = [],
  itemTextColor,
  itemTextSize,
  itemTextActiveColor,
  currentIdx,
  divider,
}) => {
  return (
    <nav className="p-4">
      <ol className="flex">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <>
                {divider ? (
                  <span className="mx-1 text-Grey-200 w-6 text-2xl">
                    {divider}
                  </span>
                ) : (
                  <span className="mx-1 text-Grey-200 w-6 text-2xl">
                    &rarr;
                  </span>
                )}
              </>
            )}

            <p
              className={clsxMerge(
                'text-[18px] font-DMSans cursor-pointer',
                currentIdx === index
                  ? `${itemTextActiveColor} font-[700]`
                  : ` ${itemTextColor} font-[400]`,
                itemTextSize ? itemTextSize : 'text-[18px]'
              )}
            >
              {item.label}
            </p>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Component;
