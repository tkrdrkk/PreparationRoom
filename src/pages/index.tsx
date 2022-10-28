import * as React from "react";
import { Layout } from "components/layouts";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Gatsbyでブログを書きたかったので、Gatsbyでブログを書き始めました。</p>
      {/* <StaticImage alt="yuriage" src="../images/view.jpg" /> */}
    </Layout>
  );
};

export default IndexPage;
