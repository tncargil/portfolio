import { useMemo } from "react";

export function useLoadImages(folderName) {
    const allImages = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png,gif}", {
        eager: true,
        as: "url",
    });
    const base = import.meta.env.BASE_URL;
    console.log(Object.keys(allImages));
    return useMemo(() => {
        return Object.entries(allImages)
            .filter(([path]) => path.includes(`/assets/${folderName}/`))
            .map(([__, mod]) => mod);
    }, [folderName, base]);
}
