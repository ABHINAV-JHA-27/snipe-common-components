import { CommonProps } from '../../@types/common';
import { clsxMerge } from '../../common/utils/classNameUtils';

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonProps {
  children?: React.ReactNode;
  bgColor?: string;
  borderRadius?: string;
  borderWidth?: string;
  borderColor?: string;
  padding?: string;
  extraStyles?: string;
}

const Component: React.FC<CardProps> = ({
  children,
  bgColor,
  borderRadius,
  padding,
  extraStyles,
  borderColor,
  borderWidth,
}) => {
  const borderRadiusClass = `rounded-[${borderRadius}px]` || 'rounded-[3px]';
  return (
    <div
      className={clsxMerge(
        bgColor ? bgColor : 'bg-white',
        // borderRadius ? `rounded-[${borderRadius}px]` : 'rounded-[3px]',
        borderRadiusClass,
        padding ? padding : 'p-[12px]',
        borderColor ? borderColor : 'border-[#eaeaea]',
        borderWidth ? borderWidth : 'border-[2px]',
        extraStyles ? extraStyles : '',
        'overflow-hidden'
      )}
    >
      {children}
    </div>
  );
};

export default Component;
