import React from "react";
import { Layout } from "components/layouts";
import { graphql } from "gatsby";

// FIXME 型は？
const Blog = (props: { data: any }) => {
  const { data } = props;
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map((node) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
    </Layout>
  );
};

export const query = graphql`
  query {
    allFile(filter: { sourceInstanceName: { eq: "blogs" } }) {
      nodes {
        name
      }
    }
  }
`;

export default Blog;
