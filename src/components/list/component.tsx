import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { CommonProps } from '../../@types/common';
import { clsxMerge } from '../../common/utils/classNameUtils';

export interface ListProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonProps {
  heading?: string;
  points?: { label: string }[];
  customIcon?: any;
  isLocal: boolean;
}

const Component: React.FC<ListProps> = ({
  heading,
  customIcon,
  points,
  isLocal = false,
}) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <>
      <div className="bg-btns-1 w-[633px] px-4 pt-4">
        <div className="flex justify-between mb-1">
          <div className="font-[500] flex gap-2 text-[18px]  font-DMSans text-btns-9 px-1">
            <img
              src={isLocal ? require(customIcon) : customIcon}
              width={80}
              height={80}
            />
            {heading}
          </div>
          <div className="flex gap-2">
            <div className="flex flex-row gap-x-2  font-DMSans px-[12px] py-[4px] text-[9px] items-center bg-states-8 font-[500] text-white rounded-full">
              A/B Test
            </div>
            <div className="flex flex-row gap-x-2  font-DMSans px-[12px] py-[4px] text-[9px] items-center bg-states-8 font-[500] text-white rounded-full">
              Delivered
            </div>
            <div className="flex flex-row gap-x-2  font-DMSans px-[12px] py-[4px] text-[9px] text-center items-center bg-states-8 font-[500] text-white rounded-full">
              AMP
            </div>
          </div>
        </div>

        <div className=" flex justify-between p-2">
          <div className=" border-l-4 border-blue-500 pl-4">
            {points?.map((point, index) => (
              <p
                key={index}
                className={clsxMerge(
                  'leading-6 text-[15px]  font-DMSans font-[500] text-states-9',
                  index > 0 && !showDetails && 'hidden'
                )}
              >
                {point.label}
              </p>
            ))}
          </div>
          <button
            className="text-states-9 text-[15px] self-end "
            onClick={handleToggleDetails}
          >
            {showDetails ? (
              <>
                Hide Details <FontAwesomeIcon icon={faChevronUp} />
              </>
            ) : (
              <>
                Show Details <FontAwesomeIcon icon={faChevronDown} />
              </>
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Component;
