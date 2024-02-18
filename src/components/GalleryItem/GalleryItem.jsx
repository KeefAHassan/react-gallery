import { useState } from "react";

function GalleryItem({ item, increaseLikes }) {
    //this useState is use to track if we are showing the imagw or the description
  const [showImage, setShowImage] = useState(true);
  return (
    <div data-testid="galleryItem" className="galleryItem">
        <p>{item.title}</p>
        {
            //on line 12 the onClick will changing between the image and the text. 
        }
      <div data-testid="toggle" onClick={() => setShowImage(!showImage)}>
        {showImage ? (
          <img src={item.url} alt="" className="image"/>
        ) : (
          <div>
            <p> {item.description} </p>
          </div>
        )}
      </div>

      {
        //call increase likes on the button function.

      }

      <button onClick={() => increaseLikes()} data-testid="like">
        {" "}
        love it!{" "}
      </button>
      <p>{item.likes} people like this </p>
    </div>
  );
}
export default GalleryItem;
