import Head from "next/head"
import Link from "next/link"
import Date from "../components/date"

import PersonalCard from "../components/personal-card"
import utilStyles from "../styles/utils.module.css"
import { getSortedPosts} from "../lib/posts"
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"

export async function getStaticProps() {
  const allPostsData = getSortedPosts()
  return {
    props: {
      allPostsData,
    },
  }
}


export default function Blog({ allPostsData }) {
  return (
    <div >
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl content-center font-bold tracking-tight sm:text-4xl">From the blog</h2>
          <p className="mt-2 text-lg leading-8">
            Learn how to grow your business with our expert advice.
          </p>

        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-16 gap-x-8 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-1">
          {allPostsData.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="flex items-center gap-x-4 text-xs">
                <time dateTime={post.data.date} className="">
                  {post.data.date}
                </time>
                <a
                  href="#"
                  className="relative z-10 rounded-full text-gray-700 bg-gray-50 py-1.5 px-3 font-medium hover:bg-gray-100"
                >
                  {post.data.category.title}
                </a>
              </div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 group-hover:text-gray-600">
                  <a href={`/posts/${post.id}`}>
                    <span className="absolute inset-0" />
                    {post.data.title}
                  </a>
                </h3>
                <p className="mt-5 text-sm leading-6 line-clamp-3">{post.data.description}</p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img src={post.data.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                <div className="text-sm leading-6">
                  <p className="font-semibold">
                    <a href="#">
                      <span className="absolute inset-0" />
                      {post.data.author.name}
                    </a>
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
  )
}
