import React, { useState, useEffect } from "react";
import { useLoadImages } from "./LoadImages";

export const ImageSlideShow = ({ folderName, interval }) => {
    const images = useLoadImages(folderName);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextPicture = () => {
        setCurrentIndex((prevIndex) => {
            const isLastSlide = prevIndex === images.length - 1;
            
            return isLastSlide ? 0 : prevIndex + 1;
        });
    };

    useEffect(() => {
        if (images.length === 0) return;
        const timer = setInterval(goToNextPicture, interval);
        return () => {
            clearInterval(timer);
        };
    }, [interval, images]);

    return (
        <div>
            <img
                src={images[currentIndex]}
                alt={`Slide show image ${currentIndex + 1}`}
            />
        </div>
    );
};
