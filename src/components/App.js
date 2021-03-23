import axios from "axios";
import React, { useState } from "react";
import SearchBar from "./SearchBar";

const App = () => {
  const [images, setImages] = useState([]);
  const onSearchSubmit = async (term) => {
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      params: { query: term },
      headers: {
        Authorization: "Client-ID o-c6Bl7Ka3ooKK3hAGlIYlAn3nE0Sw5c8c_dKHhqoF0",
      },
    });
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });
    console.log(response.data.results);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
    </div>
  );
};

export default App;
