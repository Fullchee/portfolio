import { ReactNode } from "react";
import Image from "next/image";

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
        <Image
          src={image.src}
          width={image.width}
          height={image.height}
          alt={image.alt}
        ></Image>
      </div>
      <div className={`${image.onRight ? "" : ""}`}>{children}</div>
    </div>
  );
};
