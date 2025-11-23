export function LoadImages(folderName) {
    const pathPattern = "/src/assets/**/*.{jpg,jpeg,png,gif}";
    const modules = import.meta.glob("/src/assets/**/*.{jpg,jpeg,png,gif}", {
        eager: true,
        as: "url",
    });
    return Object.values(modules);
}
