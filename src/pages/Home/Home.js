import { useEffect, useState } from "react";
import axios from "axios";
import Loader from "../../components/Loader/Loader";

function Home() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(true);

  const showFlags = data.map((country, ix) => {
    return (
      <div key={ix} className="m-3 p-2">
        <img
          className="object-cover w-[150px] h-[100px]"
          src={country.flags.svg}
          alt=""
        />
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

  useEffect(() => {
    fetchData();
  }, []);

  return loader ? (
    <Loader />
  ) : (
    <div className="">
      <div className="text-center text-3xl font-bold text-red-900 m-5">
        World Flags
      </div>
      <div className="flex flex-wrap justify-evenly">{showFlags}</div>
    </div>
  );
}

export default Home;
