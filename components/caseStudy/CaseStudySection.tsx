import NextImage from "next/image";
import type { ReactNode } from "react";

interface Image {
  src: string;
  alt: string;
  width: number;
  height: number;
  onRight?: boolean;
}

interface DescriptionProps {
  children?: ReactNode;
  image: Image;
}

export const CaseStudySection = ({ children, image }: DescriptionProps) => {
  return (
    <div className="grid sm:grid-cols-2 sm:grid-rows-1 items-center py-12">
      <div className={image.onRight === true ? "order-1 justify-self-end" : ""}>
        <NextImage
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        ></NextImage>
      </div>
      <div>{children}</div>
    </div>
  );
};
