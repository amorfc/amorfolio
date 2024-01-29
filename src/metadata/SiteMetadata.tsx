import { Helmet } from "react-helmet";

const SiteMetadata = () => {
  const metadata = {
    title: "Fatih Ermetin Portfolio",
    site: "Fatih Ermetin Portfolio",
    siteUrl: "https://amorfolio.vercel.app/",
    openGraph: {
      title: "Fatih Ermetin Portfolio",
      description: "Come and see my portfolio which amorfolio :) !",
      images: [``],
    },
  };

  const ogTitle = metadata.openGraph.title;
  const ogDesc = metadata.openGraph.description;
  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:site" content={metadata.site} />
      <meta property="og:url" content={metadata.siteUrl} />
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDesc} />
      {/* <meta property="og:image" content={ogImage} /> */}
      <meta property="og:type" content="website" />
      {/* <meta name="twitter:image" content={ogImage} /> */}
      <meta name="twitter:title" content={ogTitle} />
      <meta name="twitter:description" content={ogDesc} />
      <meta name="description" content={ogDesc} />
      <meta name="title" content={ogTitle} />
    </Helmet>
  );
};

export default SiteMetadata;
