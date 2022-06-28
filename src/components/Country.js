import React from "react";
import { Link, useLocation } from "react-router-dom";

function Card() {
  const location = useLocation();
  return (
    <div className="flex flex-col h-screen items-center justify-evenly">
      <div className="text-center text-7xl font-bold text-indigo-500 m-1">
        {location.state.country.name.common} {location.state.country.flag}
      </div>
      <div className="max-w-sm overflow-hidden rounded-xl shadow-md duration-200 hover:scale-105 hover:shadow-xl">
        <img
          src={location.state.country.flags.svg}
          alt=""
          className="h-auto w-full"
        />
        <div className="p-5">
          <p className="text-center mb-5">
            <a
              target="_blank"
              rel="noreferrer"
              className="cursor-pointer text-indigo-500"
              href={location.state.country.maps.googleMaps}
            >
              See on Map
            </a>
          </p>
          {location.state.country.capital && (
            <p className="text-center mb-5 text-white">
              Capital : {location.state.country.capital[0]}
            </p>
          )}

          <p className="text-center mb-5 text-white">
            Population : {location.state.country.population}
          </p>
          <Link to="/countries">
            <div className="w-full rounded-md bg-indigo-600 text-center  py-2 text-indigo-100 hover:bg-indigo-500 hover:shadow-md duration-75">
              Go Back
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Card;
