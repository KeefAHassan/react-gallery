import axios from "axios";
import { useEffect, useState } from "react";
import GalleryList from "../GalleryList/galleryList";

function App() {
  //gallery list array to store the gallery item.
  const [galleryList, setGalleryList] = useState([]);

  const fetchGallery = () => {
    axios({
      method: "GET",
      url: "/api/gallery",
    })
      .then((response) => {
        console.log("Entire response:", response);
        console.log("Just the data:", response.data);
        //save the gallery data to the gallery list state.
        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log("Error on get:", error);
      });
  };

//this useeffect runs when the page loads. the useeffect is going to fetch the gallery items.
  useEffect(() => {
    fetchGallery();
  }, []);

  //this function is used to increase the likes.
  const increaseLikes = (id) => {
    axios({
      method: "PUT",
      url: `/api/gallery/like/${id}`,
    })

    // call fetch gallery items to refresh the gallery items.
      .then((res) => fetchGallery())
      .catch((err) => console.log("error"));
  };


  return (
    <div data-testid="app">
      
      <header>
        <h1>React Gallery</h1>
      </header>
       
       {
        // reanda gallery list component with the two props gallery list and increased likes.
       }

      <GalleryList
        galleryList={galleryList}
        increaseLikes={(id) => increaseLikes(id)}
      />
    </div>
  );
}

export default App;
