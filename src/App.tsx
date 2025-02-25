import SearchBar from "./components/search-bar/search-bar";
import ToDo from "./components/to-do/to-do";


function App() {
  return (
    <div className="main">
      <div className="grid grid-cols-12 p-3 m-3">
        <div className="col-span-4 flex justify-center">
          <ToDo />
        </div>
        <div className="col-span-4 flex justify-center ">
          {/* <SearchBar /> */}
        </div>
        <div className="col-span-4 flex justify-center">
          <iframe
            src="https://t3.chat/chat"
            className="rounded-xl border border-gray-900 bg-[#191919] p-4 w-250 h-200"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
