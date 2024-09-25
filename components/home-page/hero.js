import React, { useEffect, useContext } from "react"
import { useRouter } from "next/router"
import { motion } from "framer-motion"

import styles from "./hero.module.scss"
import AppContext from "../../context/app-context"
import Record from "../svgs/record"

const Hero = () => {
  const {
    setOnPlayer,
    setSearchedAlbum,
    setSelectedSong,
    setSelectedAlbum,
    setOpen,
    setMenuMode,
  } = useContext(AppContext)

  const router = useRouter()

  useEffect(() => {
    setOnPlayer(false)
    setSearchedAlbum("")
    setSelectedSong("")
    setSelectedAlbum("")
    setOpen(false)
  }, [
    setOnPlayer,
    setSearchedAlbum,
    setSelectedSong,
    setSelectedAlbum,
    setOpen,
  ])

  const onClickHandler = () => {
    setMenuMode("albums")
    router.push("player")
    setOpen(true)
  }

  return (
    <motion.header className={styles.header}>
      <motion.div className={styles.main}>
        <motion.h1
          initial={{ opacity: 0, top: 100 }}
          animate={{ opacity: 1, top: 0 }}
          transition={{
            duration: 2,
            ease: "easeInOut",
            easings: "easeInOut",
          }}
        >
          <motion.span
            initial={{ top: 0 }}
            animate={{ top: "-20%" }}
            transition={{
              duration: 1,
              delay: 1.9,
              ease: "easeInOut",
              easings: "easeInOut",
            }}
          >
            LOFI
          </motion.span>
          <motion.span
            initial={{ top: 0 }}
            animate={{ top: "20%" }}
            transition={{
              duration: 1,
              delay: 1.9,
              ease: "easeInOut",
              easings: "easeInOut",
            }}
          >
            RADIO
          </motion.span>
        </motion.h1>
      </motion.div>
      <Record onClickHandler={onClickHandler} />
    </motion.header>
  )
}

export default Hero
