import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  const [data, setData] = useState([]);

  // console.log(value);

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    // our api to fetch the search results
    // console.log("search", searchTerm);
  };

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="app">
      <h1 className="text-4xl font-semiboldmt-5">Search Your Medicine</h1>
      <div className="search-container mt-5">
        <div className="search-inner">
          <form>
            <div className="flex">
              <input
                type="text"
                value={value}
                onChange={onChange}
                className="border border-black text-xl"
              />
              {/* <button
              onClick={() => onSearch(value)}
              className="border border-black px-4 font-semibold"
            >
              Search
            </button> */}
              <input
                type="submit"
                value="Add"
                className="w-[80px] border border-black px-4 font-semibold"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="dropdown">
        {data
          .filter((item) => {
            const searchTerm = value.toLocaleLowerCase();
            const MedicineName = item.name.toLocaleLowerCase();
            return (
              searchTerm &&
              MedicineName.startsWith(searchTerm) &&
              MedicineName !== searchTerm
            );
          })
          .map((item) => (
            <div className="dropdown-row" onClick={() => onSearch(item.name)}>
              {item.name}
            </div>
          ))}
      </div>

      <div className="text-4xl">{value}</div>
    </div>
  );
}

export default App;
