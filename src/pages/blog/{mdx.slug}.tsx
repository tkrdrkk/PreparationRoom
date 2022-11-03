import { graphql, PageProps } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { Layout } from '../../components/layouts'

// QUESTION なんでmdx nodeを拾ってくれるの？
// FIXME undefined回避できねえ
const BlogPost = ({ data }: PageProps<GatsbyTypes.BlogPostQueryQuery>) => {
  return (
    <Layout pageTitle={data?.mdx?.frontmatter?.title || ''}>
      <p>Posted: {data?.mdx?.frontmatter?.date}</p>
      <div
        style={{
          borderBottom: '1px dotted',
          boxShadow: '4px 0px 4px 1px rgba(0,0,0,0.6)',
        }}
      />
      <MDXRenderer>{data?.mdx?.body || ''}</MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query BlogPostQuery($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      body
    }
  }
`

export default BlogPost
