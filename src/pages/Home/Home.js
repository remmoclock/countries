import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  const showFlags = data.map((country) => {
    return (
      <countryiv key={country.name.common} className="m-3 p-2">
        {/* {d.name.common} */}
        {/* <div className="text-9xl">{d.flag}</div> */}
        <img className="object-cover w-[150px] h-[100px]" src={country.flags.svg} alt="" />
      </div>
    );
  });

  const fetchData = () => {
    axios.get(`https://restcountries.com/v3.1/all`).then((res) => {
      const data = res.data;
      console.log("data", data);
      setData(data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="">
      <div className="text-center text-3xl font-bold text-red-900 mb-5">
        World Flags
      </div>
      <div className="flex flex-wrap ">{showFlags}</div>
    </div>
  );
}

export default Home;
