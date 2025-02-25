import SearchBar from "./components/search-bar/search-bar";

function App() {
  return (
    <>
      <div className="grid grid-cols-12 p-3 m-3" id="main">
        <div className="col-span-4 flex justify-center">
          
        </div>
        <div className="col-span-4 flex justify-center ">
          <SearchBar />
        </div>
        <div className="col-span-4 flex justify-center"></div>
      </div>
    </>
  );
}

export default App;
