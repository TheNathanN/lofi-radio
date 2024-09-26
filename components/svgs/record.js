import { motion } from "framer-motion"
import styles from "./record.module.scss"
import Cursor from "../cursor"
import { useState } from "react"

export default function Record({ onClickHandler }) {
  const [cursorVisible, setCursorVisible] = useState(false)

  return (
    <>
      <Cursor visible={cursorVisible} setVisible={setCursorVisible} />
      <motion.svg
        width="1032"
        height="1032"
        viewBox="0 0 1032 1032"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.record}
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 4,
          ease: "linear",
          loop: Infinity,
          repeat: Infinity,
          delay: 3,
        }}
      >
        <motion.g
          clipPath="url(#clip0_310_23)"
          onHoverStart={() => setCursorVisible(true)}
          onHoverEnd={() => setCursorVisible(false)}
          style={{ cursor: "none" }}
          onClick={onClickHandler}
        >
          <path
            d="M515.555 1031.11C800.287 1031.11 1031.11 800.287 1031.11 515.555C1031.11 230.822 800.287 0.000396729 515.555 0.000396729C230.822 0.000396729 0.000488281 230.822 0.000488281 515.555C0.000488281 800.287 230.822 1031.11 515.555 1031.11Z"
            fill="url(#paint0_linear_310_23)"
          />
          <path
            d="M515.553 713.833C625.06 713.833 713.833 625.06 713.833 515.553C713.833 406.046 625.06 317.273 515.553 317.273C406.046 317.273 317.273 406.046 317.273 515.553C317.273 625.06 406.046 713.833 515.553 713.833Z"
            fill="url(#paint1_linear_310_23)"
          />
          <path
            d="M515.552 578.704C550.429 578.704 578.703 550.43 578.703 515.553C578.703 480.676 550.429 452.402 515.552 452.402C480.675 452.402 452.401 480.676 452.401 515.553C452.401 550.43 480.675 578.704 515.552 578.704Z"
            fill="url(#paint2_linear_310_23)"
            stroke="white"
            strokeWidth="43.9994"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M515.553 639.78C584.162 639.78 639.78 584.162 639.78 515.553C639.78 446.944 584.162 391.326 515.553 391.326C446.945 391.326 391.326 446.944 391.326 515.553C391.326 584.162 446.945 639.78 515.553 639.78Z"
            stroke="#B3B3B3"
            strokeWidth="0.898399"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M515.55 759.361C650.203 759.361 759.361 650.203 759.361 515.55C759.361 380.897 650.203 271.739 515.55 271.739C380.897 271.739 271.739 380.897 271.739 515.55C271.739 650.203 380.897 759.361 515.55 759.361Z"
            stroke="#B3B3B3"
            strokeWidth="0.898673"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M515.552 798.677C671.918 798.677 798.677 671.917 798.677 515.551C798.677 359.185 671.918 232.426 515.552 232.426C359.186 232.426 232.426 359.185 232.426 515.551C232.426 671.917 359.186 798.677 515.552 798.677Z"
            stroke="#B3B3B3"
            strokeWidth="0.898276"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M515.55 832.956C690.849 832.956 832.956 690.849 832.956 515.55C832.956 340.251 690.849 198.143 515.55 198.143C340.251 198.143 198.144 340.251 198.144 515.55C198.144 690.849 340.251 832.956 515.55 832.956Z"
            stroke="#B3B3B3"
            strokeWidth="0.903372"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M515.555 877.645C715.532 877.645 877.645 715.531 877.645 515.554C877.645 315.577 715.532 153.463 515.555 153.463C315.577 153.463 153.464 315.577 153.464 515.554C153.464 715.531 315.577 877.645 515.555 877.645Z"
            stroke="#B3B3B3"
            strokeWidth="0.895395"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M515.551 918.851C738.288 918.851 918.852 738.287 918.852 515.55C918.852 292.813 738.288 112.249 515.551 112.249C292.814 112.249 112.25 292.813 112.25 515.55C112.25 738.287 292.814 918.851 515.551 918.851Z"
            stroke="#B3B3B3"
            strokeWidth="0.903217"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M515.554 974.277C768.9 974.277 974.277 768.9 974.277 515.555C974.277 262.21 768.9 56.8326 515.554 56.8326C262.209 56.8326 56.832 262.21 56.832 515.555C56.832 768.9 262.209 974.277 515.554 974.277Z"
            stroke="#B3B3B3"
            strokeWidth="0.898919"
            strokeMiterlimit="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.g>
        <defs>
          <linearGradient
            id="paint0_linear_310_23"
            x1="147.037"
            y1="677.453"
            x2="791.804"
            y2="227.154"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#414141" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_310_23"
            x1="147.037"
            y1="677.451"
            x2="791.802"
            y2="227.153"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#414141" />
            <stop offset="1" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_310_23"
            x1="27.6183"
            y1="729.915"
            x2="881.319"
            y2="133.698"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#414141" />
            <stop offset="1" />
          </linearGradient>
          <clipPath id="clip0_310_23">
            <rect width="1032" height="1032" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </>
  )
}
