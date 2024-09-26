import { motion, useMotionValue } from "framer-motion"
import { useEffect, useLayoutEffect } from "react"
import { useParams } from "next/navigation"
import styles from "./cursor.module.scss"

export default function Cursor({ visible, setVisible }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const params = useParams()

  console.log(visible)

  useEffect(() => {
    const handleMouseMove = (event) => {
      x.set(event.clientX)
      y.set(event.clientY)
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [x, y])

  useLayoutEffect(() => {
    const iframe = document.querySelector("iframe")

    if (iframe) {
      const handleIframeMouseEnter = () => {
        setVisible(false)
      }

      const handleIframeMouseLeave = () => {
        setVisible(true)
      }

      iframe.addEventListener("mouseenter", handleIframeMouseEnter)
      iframe.addEventListener("mouseleave", handleIframeMouseLeave)

      return () => {
        iframe.removeEventListener("mouseenter", handleIframeMouseEnter)
        iframe.removeEventListener("mouseleave", handleIframeMouseLeave)
      }
    }
  }, [params])

  const style = {
    x,
    y,
    translateX: "-50%",
    translateY: "-50%",
  }
  return (
    <motion.div
      style={style}
      className={`${styles.cursor} ${visible ? styles.visible : styles.hidden}`}
    ></motion.div>
  )
}
