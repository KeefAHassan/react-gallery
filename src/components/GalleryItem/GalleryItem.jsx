import { useState } from "react";

function GalleryItem({ item, increaseLikes }) {
  const [showImage, setShowImage] = useState(true);
  return (
    <div data-testid="galleryItem">
      {showImage ? (
        <img src={item.url} alt="" onClick={() => setShowImage(!showImage)} data-testid="galleryItem" />
      ) : ( 
        <div onClick={() => setShowImage(!showImage)} data-testid="galleryItem">
          <p> {item.description} </p>
        </div>
      )}
      <button onClick={() => increaseLikes()} data-testid="like"> love it! </button>
      <p>{item.likes} people like this </p>
    </div>
  );
}
export default GalleryItem;
