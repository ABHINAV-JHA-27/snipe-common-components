import { CommonProps } from '../../@types/common';
import clsx from 'clsx';

export interface ToggleProps
  extends React.HTMLAttributes<HTMLDivElement>,
    CommonProps {
  textLeft?: string;
  textRight?: string;
  toggle?: boolean;
}

const Component: React.FC<ToggleProps> = ({ textLeft, textRight }) => {
  return (
    <>
      <div
        className={clsx(
          ' border-[1px]  bg-Purple-50 rounded-[24px] border-Purple-100 flex gap-2 py-3 px-[6px]'
        )}
      >
        <span className="font-[500] text-[18px] text-Purple-700">
          {textLeft}
        </span>
        <label className="relative inline-flex items-center cursor-pointer justify-center">
          <input type="checkbox" value="" className="sr-only peer" />
          <div className="w-[36px] h-[23px]  bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full  peer-checked:after:border-white after:content-[''] after:absolute  after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-[18px] after:mt-[2px] after:w-[16px] after:transition-all peer-checked:bg-[#2A106B]"></div>
        </label>
        <span className="font-[700] text-[18px] text-Purple-900">
          {textRight}
        </span>
      </div>
      <input type="checkbox" value="" className="sr-only peer" />
    </>
  );
};

export default Component;
