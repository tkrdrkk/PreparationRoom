import * as React from "react";
import { Link } from "gatsby";
import { Layout } from "components/layouts";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <main>
        <Link to="/">Back to Home</Link>
        <p>
          Hi there! I'm the proud creator of this site, which I built with
          Gatsby.
        </p>
      </main>
    </Layout>
  );
};

export default AboutPage;
