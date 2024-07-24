import React from "react"
import Link from "next/link"

import styles from "./footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles["footer-links"]}>
          <Link href="/">Home</Link>
          <Link href="/player">Player</Link>
        </div>
        <p className={styles.credit}>
          Designed & Coded by{" "}
          <Link target="_blank" href="https://nathannicholson.dev">
            Nathan Nicholson
          </Link>
        </p>
        <p>
          Music Sourced from{" "}
          <Link target="_blank" href="https://chillhop.com/">
            Chillhop.com
          </Link>
        </p>
      </div>
    </footer>
  )
}

export default Footer
