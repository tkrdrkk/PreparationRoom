import { Layout } from 'components/layouts'
import * as React from 'react'

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>
        Gatsbyでブログを書きたかったので、Gatsbyでブログを書き始めました。
        <br />
        書けそうだなと思ったことから少しずつ。技術系のメモなど。
      </p>
      <p>
        <h3>tech</h3>
        <ul style={{ maxWidth: '50%' }}>
          <li>AWS</li>
          <li>TypeScript(JavaScript)</li>
          <li>React</li>
        </ul>
      </p>
    </Layout>
  )
}

export default AboutPage
