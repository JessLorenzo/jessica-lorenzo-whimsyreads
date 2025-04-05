import "./PhotoGallery.scss";
import gallery1 from "../../assets/image/gallery1.jpg";
import gallery2 from "../../assets/image/gallery2.jpg";
import gallery3 from "../../assets/image/gallery3.jpg";

const mockPhotos = [
  {
    id: 1,
    src: gallery1,
    caption: "March meetup at Panther Coffee",
  },
  {
    id: 2,
    src: gallery2,
    caption: "Wine night with the book club besties!",
  },
  {
    id: 3,
    src: gallery3,
    caption: "unwine-ing... get it?",
  },
];

export default function PhotoGallery() {
  return (
    <div className="photo-gallery">
      <h2 className="photo-gallery__title">Book Club Photo Gallery</h2>
      <div className="photo-gallery__grid">
        {mockPhotos.map((photo) => (
          <div className="photo-gallery__item" key={photo.id}>
            <img
              src={photo.src}
              alt={photo.caption}
              className="photo-gallery__image"
            />
            <p className="photo-gallery__caption">{photo.caption}</p>
          </div>
        ))}
      </div>
      <button className="photo-gallery__upload" disabled>
        Upload Photo (coming soon)
      </button>
    </div>
  );
}
