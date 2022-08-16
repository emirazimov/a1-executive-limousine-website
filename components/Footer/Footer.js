import styles from "./Footer.module.scss"
// import menuIcon from "../public/menuIcon.png"
// import Image from "next/image"
import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  PoweredByBookinglane,
  TwitterIcon,
} from "../../public/icons"
// import poweredByBookinglane from "../public/poweredByBookinglane.png"

const Footer = () => {
  return (
    <div className={styles.mainContainer}>
      <hr className={styles.hrFooter}></hr>
      <div className={styles.wrapper}>
        <div className={styles.firstRow}>
          <h2>A1 EXECUTIVE LIMOS</h2>
        </div>
        <div className={styles.secondRow}>
          <span>
            Copyright © 2022 A1 EXECUTIVE LIMOS . All rights reserved.
          </span>
        </div>
      </div>
    </div>
  )
}

export default Footer
