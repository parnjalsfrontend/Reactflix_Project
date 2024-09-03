import { useState, useEffect } from "react";
import { fetchData } from "../api/api";

const List = ({ title }) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const result = await fetchData();
      setList(result);
    };
    fetchDataAsync();
  }, []);

  // Define the posters array here
  const posters = [
    "https://www.movieposters.com/cdn/shop/files/transformers_one_21617b9f-a6a2-4297-bb25-345c52cf5d80_480x.progressive.jpg?v=1724167759",
    "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/darkknight.building.24x36_20e90057-f673-4cc3-9ce7-7b0d3eeb7d83_500x749.jpg?v=1707491191",
    "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/scan_78cface5-e199-4a21-b714-4c1a6d2b20ca_500x749.jpg?v=1718312413",
    "https://cdn.shopify.com/s/files/1/0057/3728/3618/files/jurassicpark.mpw_500x749.jpg?v=1713805481"
    // Add more poster URLs as needed
  ];

  return (
    <div className="list">
      <div className="row">
        <h2 className="text-white title">{title}</h2>
        <div className="col">
          <div className="row__posters">
            {posters.map((poster, index) => (
              <img
                key={index}
                className="row__poster"
                src={poster}
                alt={`Movie Poster ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
