import Alert from "./common/alert";
import Footer from "./footer";
import Meta from "./meta";
import Header from "./header";

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  return (
    <>
      <Meta />
      <Header />
      <div className="min-h-screen max-w-5xl mx-auto pt-8 px-6 md:px-24">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
