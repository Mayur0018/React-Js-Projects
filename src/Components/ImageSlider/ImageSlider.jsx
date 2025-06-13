import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegCircleRight } from "react-icons/fa6";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function ImageSlider() {
  const [images, SetImages] = useState([]);
  const [currentIndex, setindex] = useState(0);
  useEffect(() => {
    axios
      .get("https://picsum.photos/v2/list?page=2&limit=10")
      .then((response) => SetImages(response.data))
      .catch((err) => {
        console.log("image Not Founded", err);
      });
    console.log(images);
  }, []);

  const prevSlde = () => {
    setindex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };
  const nextSlide = () => {
    setindex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };
  return (
    <div className="relative flex items-center justify-center">
      <FaRegArrowAltCircleLeft
        className="text-4xl absolute left-4 cursor-pointer"
        onClick={prevSlde}
      />
      {/* Image display */}
      {images.length > 0 && (
        <div className="w-48 h-72 overflow-hidden">
          <img
            src={images[currentIndex].download_url}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <FaRegCircleRight
        className="text-4xl absolute right-4 cursor-pointer"
        onClick={nextSlide}
      />
    </div>
  );
}
