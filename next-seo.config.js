const title = "Fullchee Zhang";
const description = "Front-end developer at IBM";

const SEO = {
  title,
  description,
  canonical: "https://fullchee.com/",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://fullchee.com/",
    title,
    description,
    images: [
      {
        url: "https://fullchee.com/fullchee-og.png",
        alt: title,
        width: 1743,
        height: 915,
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
