// Resolves images from src/assets by file name.
// Missing files return null, so the UI can show a placeholder instead of crashing.
const files = import.meta.glob(
  "/src/assets/*.{jpg,jpeg,png,jfif,webp,avif,svg}",
  { eager: true, import: "default" },
);

export const asset = (name) => files[`/src/assets/${name}`] ?? null;
export const assets = (names) => names.map(asset).filter(Boolean);

export const portrait = asset("riddhi.jpeg");
