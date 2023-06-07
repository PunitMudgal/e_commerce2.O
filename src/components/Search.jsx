import { FaSearch } from "react-icons/fa";
import { UseFilterContext } from "../context/FilterContext";

function Search() {
  const { getSortingValues,filter:{search} } = UseFilterContext();
  // const [input, setInput] = useState("");
 
  return (
    <div className="flex border-2 p-2 gap-1 border-slate-900 rounded-md">
      <form
        action="submit"
        className="flex"
         onSubmit={(e) => e.preventDefault()}
      >
        <FaSearch size={22} />
        <input
          value={search}
          name="search"
          onChange={getSortingValues}
          className="border-none outline-none bg-transparent"
          type="text"
          placeholder="Search By Keyword..."
        />
      </form>
    </div>
  );
}

export default Search;
