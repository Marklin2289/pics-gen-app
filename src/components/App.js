import React, { useState } from "react";
import unsplash from "../api/unsplash";
import ImageList from "./ImageList";
import SearchBar from "./SearchBar";

const App = () => {
  const [images, setImages] = useState([]);

  const onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });
    //   .then((response) => {
    //     console.log(response.data.results);
    //   });
    setImages(response.data.results);
  };
  return (
    <div className="ui container" style={{ marginTop: "10px" }}>
      <SearchBar onSubmit={onSearchSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default App;
