import { FaSearch } from "react-icons/fa";

function SearchInput() {
  return (
    <form className="flex h-9 w-60 rounded-[6px] border border-[rgba(229,233,235,1)] p-2">
      <button type="submit">
        <FaSearch className="text-[rgba(14,_115,_246,_1)] w-5 h-5 " />
      </button>
      <input
        type="search"
        name="search"
        placeholder="Поиск по ID"
        className=" outline-none  h-full p-2 w-full"
      />
    </form>
  );
}

export default SearchInput;
