import { graphql, Link, PageProps } from "gatsby";
import * as React from "react";
import { Layout } from "../../components/layouts";

const BlogPage = ({ data }: PageProps<GatsbyTypes.BlogPageQueryQuery>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <h2>
            <Link to={`/blog/${node.slug}`} activeStyle={{ color: "blue" }}>
              {node?.frontmatter?.title}
            </Link>
          </h2>
          <p>Posted: {node?.frontmatter?.date}</p>
        </article>
      ))}
    </Layout>
  );
};

export const query = graphql`
  query BlogPageQuery {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
        body
      }
    }
  }
`;

export default BlogPage;
