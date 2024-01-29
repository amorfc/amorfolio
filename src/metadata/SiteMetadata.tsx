import { Helmet } from "react-helmet";

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
    <Helmet>
      <title>{"metadata.title"}</title>
      <meta
        data-react-helmet="true"
        property="og:site_name"
        content={"metadata.title"}
      />
      <meta
        data-react-helmet="true"
        property="og:site"
        content={"metadata.site"}
      />
      <meta
        data-react-helmet="true"
        property="og:url"
        content={metadata.siteUrl}
      />
      <meta data-react-helmet="true" property="og:title" content={ogTitle} />
      <meta
        data-react-helmet="true"
        property="og:description"
        content={ogDesc}
      />
      <meta data-react-helmet="true" property="og:image" content={ogImage} />
      <meta data-react-helmet="true" property="og:type" content="website" />
      <meta data-react-helmet="true" name="twitter:image" content={ogImage} />
      <meta data-react-helmet="true" name="twitter:title" content={ogTitle} />
      <meta
        data-react-helmet="true"
        name="twitter:description"
        content={ogDesc}
      />
      <meta data-react-helmet="true" name="description" content={ogDesc} />
      <meta data-react-helmet="true" name="title" content={ogTitle} />
    </Helmet>
  );
};

export default SiteMetadata;
