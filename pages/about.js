import Head from "next/head"

import utilStyles from "../styles/utils.module.css"

export default function About() {
  return (
    <div about>
      <Head>
        <title>"About Me"</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          Software & Data Engineer | I love to work on products and have a
          faible for DevOps.{" "}
        </p>
      </section>
    </div>
  )
}
