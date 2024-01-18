import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import clsx from 'clsx';
import React, { useState } from 'react';
import { CommonProps } from '../../@types/common';

export interface AccordionProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonProps {
  customComponent?: any;
  customIcon?: any;
  userName?: string;
  userProfile?: any;
  heading?: string;
  buttonText?: string;
}

const Component: React.FC<AccordionProps> = ({
  // customIcon,
  // userProfile,
  // userName,
  // heading,
  buttonText,
  customComponent,
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const handleToggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className=" rounded-[6px] border-Green-600 bg-Green-200 border-2 p-4 w-full">
      <div className="flex w-full justify-between ">
        {/* <div className='flex gap-2 items-center'>
                <div className=''>
                        {customIcon}
                </div>
                <div className='flex flex-col '>
                        <div className='font-[700] flex gap-2 text-[24px]'>{heading}<span className='font-[500] text-center flex items-center text-Green-900 text-[12px]'> Created by:  </span>
                        <span className='flex items-center'>{userProfile}</span>
                        <span  className='font-[500] text-Green-900 text-[12px] flex items-center'> {userName} </span>
                        </div> 
                        <div className='flex gap-2'>
                                <div className='font-[500] text-Grey-400 text-[18px]'>Ratio - <span className='font-[700] text-Grey-500 text-[18px]'>2:1</span></div>
                                <p>|</p>
                                <div className='font-[500] text-[18px]'>Monetized</div>
                                <p>|</p>
                                <div className='font-[500] text-Grey-400 text-[18px]'>Expiration time - <span  className='font-[500] text-Grey-500 text-[18px]'>2 months</span></div>
                        </div>
                </div>
               
          </div> */}
        {customComponent}
        <div className="flex flex-col gap-2 ">
          <button
            className={clsx(
              'flex items-center gap-2 justify-center h-[18px] font-[700] self-end text-white font-DMsans  rounded-[3px] w-[91px] py-[15px] px-[9px] bg-addon-2'
            )}
          >
            {buttonText}
          </button>
          <button
            className="text-Grey-400 text-[18px] font-[400] h-[18px] "
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
      <div>
        {showDetails && (
          <div className="text-Grey-500 text-[12px] h-[400px] w-full bg-white border-2 rounded-lg">
            {/* Your detailed data goes here */}
            Details to be shown when the button is clicked.
          </div>
        )}
      </div>
    </div>
  );
};

export default Component;
