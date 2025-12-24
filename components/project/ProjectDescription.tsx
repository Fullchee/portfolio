import NextImage from "next/legacy/image";
import type { ReactNode } from "react";

type Image = {
  src: string;
  alt: string;
  width: number;
  height: number;
  onRight?: boolean;
};

type DescriptionProps = {
  children?: ReactNode;
  image: Image;
};

export const ProjectDescription = ({ children, image }: DescriptionProps) => {
  return (
    <div className="grid sm:grid-cols-2 sm:grid-rows-1 items-center py-12">
      <div className={`${image.onRight ? "order-1 justify-self-end" : ""}`}>
        <NextImage
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        ></NextImage>
      </div>
      <div className={`${image.onRight ? "" : ""}`}>{children}</div>
    </div>
  );
};
