import React, { useState, useEffect } from "react";
import { LoadImages } from "./LoadImages";

export const ImageSlideShow = ({ folderName, interval }) => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToNextPicture = () => {
        setCurrentIndex((prevIndex) => {
            const isLastSlide = prevIndex === images.length - 1;
            console.log(images.length);
            return isLastSlide ? 0 : prevIndex + 1;
        });
    };

    useEffect(() => {
        const loadedUrls = LoadImages(folderName);
        setImages(loadedUrls);
        setCurrentIndex(0);
    }, [folderName]);

    useEffect(() => {
        if (images.length === 0) return;
        const timer = setInterval(goToNextPicture, interval);
        return () => {
            clearInterval(timer);
        };
    }, [interval]);

    return (
        <div>
            <img
                src={images[currentIndex]}
                alt={`Slide show image ${currentIndex + 1}`}
            />
        </div>
    );
};
