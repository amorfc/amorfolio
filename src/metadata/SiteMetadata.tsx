import { Helmet, HelmetProvider } from "react-helmet-async";

const SiteMetadata = () => {
  const metadata = {
    title: "Fatih Ermetin Portfolio",
    site: "Fatih Ermetin Portfolio",
    siteUrl: "https://amorfolio.vercel.app/",
    openGraph: {
      title: "Fatih Ermetin Portfolio",
      description: "Come and see my portfolio which amorfolio :) !",
      images: [`https://amorfolio.vercel.app/og/og-image.svg`],
    },
  };

  const ogTitle = metadata.openGraph.title;
  const ogDesc = metadata.openGraph.description;
  const ogImage = metadata.openGraph.images[0];
  return (
    <HelmetProvider>
      <Helmet>
        <title>{metadata.title}</title>
        <meta property="og:site_name" content={metadata.title} />
        <meta property="og:url" content={metadata.siteUrl} />
        <meta property="og:site" content={metadata.site} />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={ogDesc} />
        <meta property="og:image" content={ogImage} />
        <meta property="og:type" content="website" />
        <meta name="twitter:image" content={ogImage} />
        <meta name="twitter:title" content={ogTitle} />
        <meta name="twitter:description" content={ogDesc} />
        <meta name="description" content={ogDesc} />
        <meta name="title" content={ogTitle} />
      </Helmet>
    </HelmetProvider>
  );
};

export default SiteMetadata;
