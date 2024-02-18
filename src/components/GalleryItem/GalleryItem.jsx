import { useState } from "react";

function GalleryItem({ item, increaseLikes }) {
  const [showImage, setShowImage] = useState(true);
  return (
    <div data-testid="galleryItem">
        <p>{item.title}</p>
      <div data-testid="toggle" onClick={() => setShowImage(!showImage)}>
        {showImage ? (
          <img src={item.url} alt="" />
        ) : (
          <div>
            <p> {item.description} </p>
          </div>
        )}
      </div>

      <button onClick={() => increaseLikes()} data-testid="like">
        {" "}
        love it!{" "}
      </button>
      <p>{item.likes} people like this </p>
    </div>
  );
}
export default GalleryItem;
