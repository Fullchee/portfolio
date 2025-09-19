import Footer from "./footer";
import Header from "./header";
import Container from "./container";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { SpeedInsights } from "@vercel/speed-insights/next";

export type ImageProps = {
  url: string;
  width: number;
  height: number;
  alt: string;
};

type Props = {
  title: string;
  description?: string;
  imageProps?: ImageProps;
  children: React.ReactNode;
};

const defaultImage = {
  url: "https://fullchee.com/fullchee-og.png",
  alt: "Fullchee favicon, full at the top, chee at the bottom",
  width: 1743,
  height: 915,
};

export const Layout = ({ title, description, imageProps, children }: Props) => {
  const router = useRouter();

  return (
    // firefox default background isn't white
    <div className="bg-white">
      <NextSeo
        title={`${title} - Fullchee Zhang`}
        description={description}
        openGraph={{
          title: `${title} - Fullchee Zhang`,
          description: description,
          images: imageProps ? [imageProps] : [defaultImage],
          type: "website",
          url: `https://fullchee.com${router.pathname}`,
        }}
      />
      <Header />
      <div className="min-h-screen max-w-6xl mx-auto pt-8 px-6 md:px-24">
        <Container>{children}</Container>
      </div>
      <Footer />
      <SpeedInsights />
    </div>
  );
};

export default Layout;
