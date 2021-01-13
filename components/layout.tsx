import Footer from "./footer";
import Header from "./header";
import Container from "./container";
import { NextSeo } from "next-seo";

type Props = {
  title: string;
  description?: string;
  children: React.ReactNode;
};

export const Layout = ({ title, description, children }: Props) => {
  return (
    <div>
      <NextSeo
        title={`${title} - Fullchee Zhang`}
        description={description}
        openGraph={{
          title: `${title} - Fullchee Zhang`,
          description: description,
        }}
      />
      <Header />
      <div className="min-h-screen max-w-6xl mx-auto pt-8 px-6 md:px-24">
        {/* <Alert preview={preview} /> */}
        <Container>{children}</Container>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
