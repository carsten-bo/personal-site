// `pages/_app.js`:checkhealth nvim_treesitter
import "../styles/globals.css"
import utilStyles from "../styles/utils.module.css"

import Navbar from "../components/navbar"

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  )
}
