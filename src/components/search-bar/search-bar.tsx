import { useQueryStore } from "./query";

export default function SearchBar() {
  const query = useQueryStore((state) => state.query);
  const updateQuery = useQueryStore((state) => state.setQuery);

  return (
    <>
      <div className="searchbar grid grid-cols-12 content-center justify-center p-4">
        <div className="col-span-1 flex items-center justify-center ">
          <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </div>
        <div className="col-span-11  w-full p-2">
          <form
            action={() => {
              const URl = `https://unduck.link?q=${query}`;
              window.location.href = URl
            }}
          >
            <input
              type="text"
              id="search-input"
              className="search-input"
              autoComplete="off"
              placeholder="Enter Search Query"
              onChange={(e) => updateQuery(e.target.value)}
              autoFocus
            />
          </form>
        </div>
        <div className="hidden" id="search-btn">
          <button>Go</button>
        </div>
      </div>
    </>
  );
}
