import { FaClipboardList } from "react-icons/fa";

function StyledSelect() {
  return (
    <div className="flex justify-center items-center gap-2 rounded-[6px] h-9 w-[149px] border border-[rgba(229,233,235,1)] p-2">
      <FaClipboardList className="text-[rgba(14,_115,_246,_1)] w-5 h-5" />
      <select
        name="quantity"
        className="outline-none"
        style={{ WebkitAppearance: "none" }}
      >
        <option value="all">Всего:115</option>
        <option value="tes2">123</option>
      </select>
    </div>
  );
}

export default StyledSelect;
