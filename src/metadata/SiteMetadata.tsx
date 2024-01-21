import { metadata } from "../constants/common";
import { Helmet } from "react-helmet";

const SiteMetadata = () => {
  return (
    <Helmet>
      <title>{metadata.title}</title>
      <meta property="og:site_name" content={metadata.title} />
      <meta property="og:site" content="bartool.apps.cronin.nz" />
      <meta property="og:url" content="https://bartool.apps.cronin.nz" />
      <meta property="og:title" content="Bar Tool" />
      <meta
        property="og:description"
        content="Recipes and riffing for the amateur mixologist"
      />
      <meta property="og:image" content="/cocktail.png" />
      <meta property="og:type" content="website" />
      <meta name="twitter:image" content="/cocktail.png" />
      <meta name="twitter:title" content="Bar Tool" />
      <meta
        name="twitter:description"
        content="Recipes and riffing for the amateur mixologist"
      />
      <meta
        name="description"
        content="Recipes and riffing for the amateur mixologist"
      />
      <meta name="title" content="Bar Tool" />
    </Helmet>
  );
};

export default SiteMetadata;
