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
      <motion.div
        className={styles.main}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.8 }}
      >
        <h1>
          <span>LOFI</span>
          <span>RADIO</span>
        </h1>
      </motion.div>
      <Record onClickHandler={onClickHandler} />
    </motion.header>
  )
}

export default Hero
