import Link from "next/link"
import Image from "next/image"
import React, { useState } from "react"
import Logo from "./Logo"
import utilStyles from "../styles/utils.module.css"
import NavItem from "./navitem"

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "@fortawesome/fontawesome-svg-core/styles.css"
import { LinkedinIcon } from "next-share"

const GithubIcon = <FontAwesomeIcon icon={faGithub} size="lg" />

const LinkedInIcon = <FontAwesomeIcon icon={faLinkedin} size="lg" />

const MENU_LIST = [
  { text: GithubIcon, href: "https://github.com/carsten-bo" },
  { text: LinkedInIcon, href: "https://www.linkedin.com/in/carsten-boehm/" },
  { text: "Blog", href: "/blog" },
  { text: "About", href: "/about" },
]

const Navbar = () => {
  const [navActive, setNavActive] = useState(null)
  const [activeIdx, setActiveIdx] = useState(-1)

  return (
    <header>
      <nav className={`nav`}>
        <Link href={"/"}>
          <Logo />
        </Link>

        <div
          onClick={() => setNavActive(!navActive)}
          className={`nav__menu-bar`}
        >
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={`${navActive ? "active" : ""} nav__menu-list`}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx)
                setNavActive(false)
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </div>
      </nav>
    </header>
  )
}

export default Navbar
