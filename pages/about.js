import Head from "next/head"

import PersonalCard from "../components/personal-card"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"


export default function About({ allPostsData }) {
  return (
    <div className="flex flex-col items-center text-center">
      <Head>
        <title>About</title>
      </Head>

     <PersonalCard/>


      <div className="flex mt-8 grid max-w-xl gap-8 border-t">
      {/* <div className="flex justify center mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-y-8 gap-x-8 border-gray-200 pt-4 sm:mt-16 sm:pt-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"> */}

        <div className=""></div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </p>

      </div>
    </div >
  )
}

