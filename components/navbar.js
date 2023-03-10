import Link from "next/link"
import React, { useState } from "react"
import Logo from "./logo"
import NavItem from "./navitem"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { LinkedinIcon } from "next-share"

const GithubIcon = <FontAwesomeIcon icon={faGithub} size="lg" />
const LinkedInIcon = <FontAwesomeIcon icon={faLinkedin} size="lg" />


const Navbar = () => {
  const [navActive, setNavActive] = useState(null)
  const [activeIdx, setActiveIdx] = useState(-1)

  return (

    <nav className="border-gray-200 px-2 sm:px-4 py-2.5 ">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        {/* <div className="flex justify-start">
          <Link href={"/"} >
            <Logo />
          </Link>
        </div> */}
        <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200" aria-controls="navbar-default" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0">
            <li>
              <a href="/" className="block py-2 pl-3 pr-4 rounded md:bg-transparent md:p-0" aria-current="page">Home</a>
            </li>
            <li>
              <a href="/blog" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ">Blog</a>
            </li>
            <li>
              <a href="/blog" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ">{GithubIcon}</a>
            </li>
            <li>
              <a href="/blog" className="block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 ">{LinkedInIcon}</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

  )
}

export default Navbar
