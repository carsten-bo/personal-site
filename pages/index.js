import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import Link from "next/link"
import Date from "../components/date"

import Image from "next/image"

import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"

const name = "Carsten Böhm"

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <header className="header">
        <>
          <Image
            priority
            src="/images/profile.jpg"
            className={utilStyles.borderCircle}
            height={144}
            width={144}
            alt=""
          />
          <h1 className={utilStyles.heading2Xl}>{name}</h1>
        </>
      </header>
      <section className={utilStyles.headingMd}></section>
      <br></br>
      <section className={utilStyles.headingMd}>
        <p>
          Software & Data Engineer | I love to work on products and have a
          faible for DevOps.{" "}
        </p>
      </section>
    </Layout>
  )
}
