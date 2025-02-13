import { useState } from "react";
import "./Carousel.css";

const images = [
  "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg",
  "https://thumbs.dreamstime.com/b/young-conceptual-image-large-stone-shape-human-brain-conceptual-image-large-stone-shape-110748113.jpg",
  "https://images.pexels.com/photos/1312325/pexels-photo-1312325.jpeg?cs=srgb&dl=pexels-pixabay-1312325.jpg&fm=jpg",
  "https://images.pexels.com/photos/3064074/pexels-photo-3064074.jpeg?cs=srgb&dl=pexels-pixabay-3064074.jpg&fm=jpg",
  "https://images.pexels.com/photos/1205037/pexels-photo-1205037.jpeg?cs=srgb&dl=pexels-pixabay-1205037.jpg&fm=jpg",
  "https://images.pexels.com/photos/2526026/pexels-photo-2526026.jpeg?cs=srgb&dl=pexels-pixabay-2526026.jpg&fm=jpg",
  "https://images.pexels.com/photos/414171/pexels-photo-414171.jpeg?cs=srgb&dl=pexels-pixabay-414171.jpg&fm=jpg",
  "https://images.pexels.com/photos/34950/pexels-photo.jpg?cs=srgb&dl=pexels-pixabay-34950.jpg&fm=jpg",
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= images.length - 4 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 5 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="prev" onClick={prevSlide}>&#10094;</button>
      <div className="carousel-inner">
        {images.slice(currentIndex, currentIndex + 5).map((image, index) => (
          <img key={index} src={image} alt={`Slide ${index}`} className="carousel-image" />
        ))}
      </div>
      <button className="next" onClick={nextSlide}>&#10095;</button>
    </div>
  );
};

export default Carousel;
