import React, { useContext, useState, useEffect } from "react"
import Link from "next/link"
import styles from "./nav-bar.module.scss"

import AppContext from "../context/app-context"

const NavBar = () => {
  const { onPlayer, setOpen, open, setMenuMode, menuMode } =
    useContext(AppContext)
  const [windowWidth, setWindowWidth] = useState(0)
  const [mobileNav, setMobileNav] = useState(false)

  const closeHandler = () => {
    setOpen(!open)
    setMenuMode("main")
  }

  useEffect(() => {
    if (windowWidth <= 1200) {
      setMobileNav(true)
    } else {
      setMobileNav(false)
    }

    function handleResize() {
      setWindowWidth(window.innerWidth)
    }

    handleResize()

    window.addEventListener("resize", handleResize)
  }, [setWindowWidth, windowWidth])

  return (
    <nav className={onPlayer ? styles["player-nav"] : styles["nav-bar"]}>
      <div className={styles.logo}>
        <Link href="/">Lofi Radio</Link>
      </div>
      {mobileNav && onPlayer && (
        <div className={styles.icons}>
          {!open && (
            <i className="fas fa-bars" onClick={() => setOpen(!open)}></i>
          )}
          {open && (
            <>
              {menuMode !== "main" && (
                <div className={styles.back}>
                  <i
                    className="fas fa-chevron-left back"
                    onClick={() => {
                      if (menuMode === "albums") {
                        setMenuMode("main")
                        window.scrollTo(0, 0)
                      } else {
                        setMenuMode("albums")
                        window.scrollTo(0, 0)
                      }
                    }}
                  ></i>
                </div>
              )}
              <i className="fas fa-times" onClick={closeHandler}></i>
            </>
          )}
        </div>
      )}
    </nav>
  )
}

export default NavBar
