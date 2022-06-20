import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

function Home() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);
  const [search, setSearch] = useState("");
  const [rangeValue, setRangeValue] = useState(250);

  useEffect(() => {
    fetchData();
  }, []);

  console.log("search", search);
  console.log("rangeValue", rangeValue);

  const showFlags = data
    .sort((a, b) => a.name.common.localeCompare(b.name.common))
    .filter((flag) => {
      return flag.name.common.toLowerCase().includes(search.toLowerCase());
    })
    .slice(0, rangeValue)
    .map((country, ix) => {
      return (
        <div key={ix} className="m-3 p-2">
          <img
            className="object-cover w-[150px] h-[100px]"
            src={country.flags.svg}
            alt=""
          />
          <div className="text-center">
            {country.name.common.length > 10
              ? country.name.common.substring(0, 10) + "..."
              : country.name.common}
          </div>
        </div>
      );
    });

  const fetchData = () => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      const data = res.data;
      console.log("data", data);
      setData(data);
      setLoader(false);
    });
  };

  return loader ? (
    <Loader />
  ) : (
    <div className="">
      <div className="text-center text-3xl font-bold text-red-900 m-5">
        World Countries
      </div>
      <div className="text-center text-gray-500 m-5 p-5">
        <input
          type="text"
          className="p-2 rounded rounded-full bg-white outline-none ring-1 focus:ring-2 ring-red-900 border-transparent"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="text-center font-bold text-red-900 m-5 p-5">
        <div>{rangeValue > 1 ? "Countries" : "Country"}: {rangeValue}</div>
        <input
          className="w-[200px] h-2 appearance-none rounded cursor-pointer"
          defaultValue={rangeValue}
          type="range"
          min="1"
          max="250"
          onChange={(e) => {
            setRangeValue(parseInt(e.target.value));
          }}
          value={rangeValue}
        ></input>
        <div className="text-center flex justify-center m-5">
          <div className="flex flex-row h-6 w-24">
            <button
              onClick={() => setRangeValue(rangeValue - 1)}
              className="font-semibold bg-red-900 text-white w-20 flex rounded-l cursor-pointer"
              disabled={rangeValue < 1}
            >
              <span className="m-auto">-</span>
            </button>
            <div className="bg-white w-24 p-2 text-xs flex items-center justify-center cursor-default">
              <span>{rangeValue}</span>
            </div>

            <button
              onClick={() => setRangeValue(rangeValue + 1)}
              className="font-semibold bg-red-900 text-white w-20 flex rounded-r cursor-pointer"
              disabled={rangeValue > 249}
            >
              <span className="m-auto">+</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center">{showFlags}</div>
    </div>
  );
}

export default Home;
