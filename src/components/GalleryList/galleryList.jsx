import GalleryItem from "../GalleryItem/GalleryItem";

function GalleryList({ galleryList, increaseLikes }) {
  return (
    <div data-testid="galleryList">
      {galleryList.map((item) => (
        <GalleryItem item={item} increaseLikes={()=> increaseLikes(item.id)} key={item.id}/>
      ))}
    </div>
  );
}
export default GalleryList;
