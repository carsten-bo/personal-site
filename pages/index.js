import Head from "next/head"
import Layout, { siteTitle } from "../components/layout"
import Link from "next/link"
import Date from "../components/date"
import Navbar from '../components/navbar';

import utilStyles from "../styles/utils.module.css"
import { getSortedPostsData } from "../lib/posts"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'


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
      <Navbar></Navbar>
      <section className={utilStyles.headingMd}>
        <p>
          Software & Data Engineer | I love to work on products and have a faible for DevOps. </p>
      </section>

      <section className={utilStyles.headingMd}>
      <Link href="https://github.com/carsten-bo" style={{ textDecoration: 'none', color: "black" }}>
        <FontAwesomeIcon icon={faGithub} size="l" pull="left" />
      </Link>

      <Link href="https://www.linkedin.com/in/carsten-boehm/"style={{ textDecoration: 'none', color: "black" }}>
        <FontAwesomeIcon icon={faLinkedin} size="l" pull="left"/>
      </Link>
      </section>
      <br></br>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
