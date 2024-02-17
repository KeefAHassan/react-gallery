import axios from "axios";
import { useEffect, useState } from "react";
import GalleryList from "../GalleryList/galleryList";

function App() {
  const [galleryList, setGalleryList] = useState([]);

  const fetchGallery = () => {
    axios({
      method: "GET",
      url: "/api/gallery",
    })
      .then((response) => {
        console.log("Entire response:", response);
        console.log("Just the data:", response.data);

        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log("Error on get:", error);
      });
  };

  useEffect(() => {
    fetchGallery();
  }, []);
  const increaseLikes = (id) => {
    axios({
      method: "PUT",
      url: `/api/gallery/like/${id}`,
    })
      .then((res) => fetchGallery())
      .catch((err) => console.log("error"));
  };

  return (
    <div data-testid="app">
      
      <header>
        <h1>React Gallery</h1>
      </header>

      <GalleryList
        galleryList={galleryList}
        increaseLikes={(id) => increaseLikes(id)}
      />
    </div>
  );
}

export default App;
