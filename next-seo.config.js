const title = "Fullchee Zhang";
const description = "Front-end developer at IBM";

const SEO = {
  title,
  description,
  canonical: "https://fullchee.com/",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://fullchee.com/",
    title,
    description,
    images: [
      {
        url: "https://fullchee.com/static/images/banner.jpg",
        alt: title,
        width: 1200,
        height: 627,
      },
    ],
  },
  twitter: {
    handle: "@Fullchee",
    site: "@Fullchee",
    cardType: "summary_large_image",
  },
};

export default SEO;
