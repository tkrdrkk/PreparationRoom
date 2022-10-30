import { format } from 'date-fns'
import { graphql, Link, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { ReactNode } from 'react'
import {
  container,
  footer,
  heading,
  main,
  navLinkItem,
  navLinks,
  navLinkText,
  siteTitle,
} from './layout.module.css'

const NaviItem = ({ path, view }: { path: string; view: string }) => (
  <li className={navLinkItem}>
    <Link to={path} className={navLinkText}>
      {view}
    </Link>
  </li>
)

export const Layout = ({
  pageTitle,
  children,
}: {
  pageTitle?: string
  children: ReactNode
}) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      {pageTitle && <title>{pageTitle}</title>}
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <nav>
        <ul className={navLinks}>
          {[
            { path: '/', view: 'Home' },
            { path: '/about', view: 'About' },
            { path: '/blog', view: 'Blogs' },
          ].map((n) => (
            <NaviItem key={n.view} {...n} />
          ))}
        </ul>
      </nav>
      <main className={main}>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
      <footer className={footer}>
        <Link to="/">Back to Home</Link>
        {
          `©tokiorush ${new Date().getFullYear() > 2022 && '2022-'}${format(
            new Date(),
            'yyyy'
          )} 
        This site is generated by ` // FIXME 末尾の空白が保持できない
        }
        <a href="https://www.gatsbyjs.com/">Gatsby</a>.
      </footer>
    </div>
  )
}
