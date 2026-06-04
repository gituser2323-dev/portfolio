import Image, { ImageProps } from "next/image";

export default function OptimizedImage({
  alt = "image",
  width = 1200,
  height = 800,
  ...props
}: ImageProps) {
  return (
    <Image
      {...props}
      alt={alt}
      width={width}
      height={height}
    />
  );
}