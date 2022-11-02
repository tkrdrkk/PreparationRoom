import { Layout } from 'components/layouts'
import * as React from 'react'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>Gatsbyでブログを書きたかったので、Gatsbyでブログを書き始めました。</p>
      <p>書けそうだなと思ったことから少しずつ。技術系のメモなど。</p>
      <header>技術スタック</header>
      <ul>
        <li>AWS</li>
        <li>TypeScript(JavaScript)</li>
        <li>React</li>
      </ul>
    </Layout>
  )
}

export default AboutPage
