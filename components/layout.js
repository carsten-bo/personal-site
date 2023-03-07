import Head from "next/head"
import styles from "../styles/layout.module.css"
import utilStyles from "../styles/utils.module.css"
import Link from "next/link"

export const siteTitle = "My Personal Site"

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
