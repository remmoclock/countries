import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  const [data, setData] = useState([]);

  const flags = data.map((d) => {
    return <h1 className="text-3xl font-bold text-red-900">{d.flag}</h1>;
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
    <div>
      <h1 className="text-3xl font-bold text-red-900">World Flags</h1>
      {flags}
    </div>
  );
}

export default Home;
