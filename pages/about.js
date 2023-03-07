import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import Link from "next/link"
import Date from "../components/date"

import utilStyles from "../styles/utils.module.css"

export default function About() {
  return (
    <Layout about>
      <Head>
        <title>"About Me"</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Software & Data Engineer | I love to work on products and have a
          faible for DevOps.{" "}
        </p>
      </section>
    </Layout>
  )
}
