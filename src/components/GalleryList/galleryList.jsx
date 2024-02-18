import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, increaseLikes }) {
    //this component receives the gallery list items and renders them.
  return (
    <div data-testid="galleryList" className="galleryList">
      {galleryList.map((item) => (
        <GalleryItem item={item} increaseLikes={()=> increaseLikes(item.id)} key={item.id}/>
      ))}
    </div>
  );
}
export default GalleryList;
