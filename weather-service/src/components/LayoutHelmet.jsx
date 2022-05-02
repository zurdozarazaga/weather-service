import React from "react";
import { Helmet } from "react-helmet";

const LayoutHelmet = ({ title, description }) => {
  return (
    <Helmet>
      {title && <title>{`Weather Service | ${title}`}</title>}
      {description && <meta name="description" content={description} />}
      <link rel="icon" href="logo.svg" />
    </Helmet>
  );
};

export default LayoutHelmet;
