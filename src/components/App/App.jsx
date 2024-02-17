import axios from 'axios';
import { useEffect, useState } from 'react';


function App() {
  const [galleryList, setGalleryList] = useState([]);

  const fetchGallery = () => {
    axios({
      method: 'GET',
      url: '/api/gallery'
    })
      .then((response) => {
        console.log('Entire response:', response);
        console.log('Just the data:', response.data);

        setGalleryList(response.data);
      })
      .catch(function (error) {
        console.log('Error on get:', error);
      });
  }

  useEffect(() => {
    fetchGallery();
  }, [])

    return (
      <div>
        <header>
          <h1>React Gallery</h1>
        </header>

        <p>The gallery goes here!</p>
        <img src="images/goat_small.jpg"/>
      </div>
    );
}

export default App;
