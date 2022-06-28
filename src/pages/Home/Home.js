import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [rangeValue, setRangeValue] = useState(250);
  const [selectedRadio, setSelectedRadio] = useState("");
  const continents = ["Africa", "Europe", "Asia", "Oceania", "America"];

  // API
  const fetchData = () => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      const data = res.data;
      setData(data);
      setLoader(false);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const showFlags = data
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
    .filter((country) => country.continents[0].includes(selectedRadio))
    .filter((flag) => {
      return flag.name.common.toLowerCase().includes(search.toLowerCase());
    })
    .slice(0, rangeValue)
    .map((country, ix) => {
      return (
        <Link
          key={ix}
          to={`/country/${country.name.common}`}
          state={{ country }}
        >
          <div className="m-3 p-2 cursor-pointer hover:animate-pulse">
            <img
              className="object-cover w-[150px] h-[100px] rounded-xl shadow-lg shadow-zinc-600"
              src={country.flags.svg}
              alt=""
            />
            <div className="text-center text-white font-semibold">
              {country.name.common.length > 15
                ? country.name.common.substring(0, 15) + "..."
                : country.name.common}
            </div>
          </div>
        </Link>
      );
    });

  return loader ? (
    <Loader />
  ) : (
    <>
      <Link to="/">
        <div className="text-center text-8xl font-bold text-indigo-500 m-3 cursor-pointer hover:animate-spin">
          🌎
        </div>
      </Link>
      <div className="text-center font-bold text-indigo-500 m-2">
        <div>
          {rangeValue} {rangeValue > 1 ? "Countries" : "Country"}
        </div>
        <input
          className="w-[200px] h-2 appearance-none rounded cursor-pointer"
          type="range"
          min="0"
          max="250"
          value={rangeValue}
          onChange={(e) => {
            setRangeValue(parseInt(e.target.value));
          }}
        ></input>
        <div className="text-center flex justify-center m-3">
          <div className="flex flex-row h-6 w-24">
            <button
              onClick={() => setRangeValue(rangeValue - 1)}
              className="font-semibold bg-indigo-500 text-black w-20 flex rounded-l cursor-pointer"
              disabled={rangeValue < 1}
            >
              <span className="m-auto text-white">-</span>
            </button>
            <div className="bg-white w-24 text-indigo-500 p-2 text-xs flex items-center justify-center cursor-default">
              <span>{rangeValue}</span>
            </div>

            <button
              onClick={() => setRangeValue(rangeValue + 1)}
              className="font-semibold bg-indigo-500 text-black w-20 flex rounded-r cursor-pointer"
              disabled={rangeValue > 249}
            >
              <span className="m-auto text-white">+</span>
            </button>
          </div>
        </div>
        <ul className="flex flex-wrap justify-center">
          {continents.map((continent, ix) => {
            return (
              <li className="m-3 text-indigo-500" key={ix}>
                <input
                  checked={continent === selectedRadio}
                  type="radio"
                  name="continentRadio"
                  id={continent}
                  onChange={(e) => {
                    setSelectedRadio(e.target.id);
                    // setRangeValue(
                    //   showFlags &&
                    //   showFlags.length
                    // );
                  }}
                />
                <label className="p-0.5" htmlFor={continent}>
                  {continent}
                </label>
              </li>
            );
          })}
        </ul>

        {selectedRadio && (
          <button
            className="text-center"
            onClick={() => {
              setSelectedRadio("");
              setRangeValue(250);
            }}
          >
            ❌ Cancel
          </button>
        )}
      </div>
      <div className="text-center m-2">
        <input
          type="text"
          className="p-2 rounded rounded-full outline-none ring-1 focus:ring-2 ring-indigo-500 border-transparent"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="flex flex-wrap justify-center">{showFlags}</div>
    </>
  );
}

export default Home;
