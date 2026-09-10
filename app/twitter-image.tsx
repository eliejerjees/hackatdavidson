import { OG_SIZE, renderOgImage } from "./og-shared";

export const alt = "Hack@Davidson, Davidson College's student tech community";
export const size = OG_SIZE;
export const contentType = "image/png";

export default async function Image() {
  return renderOgImage();
}
