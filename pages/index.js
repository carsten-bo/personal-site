import Head from "next/head"

import Image from "next/image"


import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"

import { getSortedPostsData } from "../lib/posts"
import Layout from "../components/Layout"

const GithubIcon = <FontAwesomeIcon icon={faGithub} size="lg" />
const LinkedInIcon = <FontAwesomeIcon icon={faLinkedin} size="lg" />

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
    <div>
      <Head>
        <title>Home</title>
      </Head>

      <div className="mx-auto max-w-2xl lg:mx-0">

        <p className="mt-2 py-2 text-lg leading-8">
          <Image
            priority
            src="/images/profile.jpg"
            height={150}
            width={150}
          />
        </p>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Carsten Böhm</h2>
        <p className="mt-2 text-lg leading-8">
          Software & Data Engineering
        </p>

        <p className="flex mt-2 text-lg">
            <a href="/blog" class="">{GithubIcon} GitHub</a>
            <a href="/blog" class="mx-4">{LinkedInIcon} LinkedIn</a>
        </p>
      </div>
      <div className="border-t mt-4"></div>
      <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-8 gap-x-8 border-gray-200 pt-4 sm:mt-16 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">

        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

      </div>
    </div >
  )
}
