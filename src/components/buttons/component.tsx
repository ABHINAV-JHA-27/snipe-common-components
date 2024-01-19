import { CommonProps } from '../../@types/common';
import { clsxMerge } from '../../common/utils/classNameUtils';

export interface ButtonProps
  extends React.HTMLAttributes<HTMLElement>,
    CommonProps {
  bg?: string;
  // text?: string;
  borderColor?: string;
  lefticon?: boolean;
  righticon?: boolean;
  iconComponent?: any;
  textSize?: string;
  name?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

const Component: React.FC<ButtonProps> = ({
  textSize,
  bg,
  text,
  iconComponent,
  onClick,
  borderColor,
  lefticon,
  righticon,
}) => {
  return (
    <>
      <button
        className={clsxMerge(
          'flex items-center gap-2 justify-center  rounded-[9px] mx-auto  py-[18px] px-[9px]',
          borderColor,
          textSize,
          bg
        )}
        onClick={onClick}
      >
        {lefticon && iconComponent && (
          <span className="ml-2">{iconComponent}</span>
        )}
        {text}
        {righticon && iconComponent && (
          <span className="ml-2">{iconComponent}</span>
        )}
      </button>
    </>
  );
};

export default Component;
