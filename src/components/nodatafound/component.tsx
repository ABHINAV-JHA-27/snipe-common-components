import { CommonProps } from '../../@types/common';
import { clsxMerge } from '../../common/utils/classNameUtils';

export interface NoDataFound
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonProps {
  textSize?: string;
  customIcon?: any;
  bg: string;
  textColor: string;
  isLocal: boolean;
}

const Component: React.FC<NoDataFound> = ({
  text,
  textColor,
  className = '',
  customIcon,
  textSize,
  bg,
  isLocal = false,
}) => {
  return (
    <div
      className={clsxMerge(
        'flex flex-col items-center w-full h-[210px] px-0 py-6 gap-3 rounded-[12px]',
        bg,
        className
      )}
    >
      <img
        src={isLocal ? require(customIcon) : customIcon}
        width={120}
        height={120}
      />
      <p
        className={clsxMerge(
          'w-[1320px] h-6 italic font-cardo font-[400] text-center ',
          textColor,
          textSize,
          className
        )}
      >
        {text}
      </p>
    </div>
  );
};

export default Component;
