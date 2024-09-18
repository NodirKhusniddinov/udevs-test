/* eslint-disable react/prop-types */
import { MdAccessTime } from "react-icons/md";

function TimeBox({ time }) {
  return (
    <div className="flex justify-center items-center gap-2 rounded-[6px] h-9 w-[92px] border border-[rgba(229,233,235,1)] p-2">
      <MdAccessTime className="text-[rgba(14,_115,_246,_1)] w-5 h-5" />
      <div>{time}</div>
    </div>
  );
}

export default TimeBox;
