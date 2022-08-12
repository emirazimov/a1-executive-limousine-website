// import Image from "next/image"
import { TitleUnderline } from "../../public/icons"
import styles from "./AboutUs.module.scss"
// import aboutUs from "../public/AboutUs-min.jpg"
import Image from "next/image"

function imageLoader({ src, width, height }) {
  // const relativeSrc = (src) => src.split("/").pop()

  return `https://delux-limo.s3.us-east-2.amazonaws.com/${src}`
}

const AboutUs = () => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <h3 className={styles.upperTitle}>ABOUT US</h3>
        <div className={styles.aboutUsCard}>
          <figure className={styles.contentContainer}>
            <div className={styles.imgContainer}>
              {/* <img
              src='https://delux-limo.s3.us-east-2.amazonaws.com/AboutUs-min.webp'
              alt='aboutUs'
              style={{ width: '100%', height: '100%' }}
            /> */}
              <Image
                loader={imageLoader}
                src="AboutUs-min.webp"
                alt="aboutUs"
                // style={{ width: "100%", height: "100%" }}
                // width={"100%"}
                // height={"1%"}
                layout="fill"
              />
            </div>
            <figcaption className={styles.textContainer}>
              <h3 className={styles.title}>ABOUT US</h3>
              <p>
                Service You Can Rely On
                <br />
                <br />
                A1 Executive Limos has been offering clients throughout
                Washington DC and the surrounding area quality transportation
                services since 2000. Great service begins with great people and
                real experience which is why we put so much into choosing the
                best people to join our team. You’ll always have a driver who
                knows punctuality, safe driving and customer service inside and
                out. We aim to not only meet your needs, but also exceed your
                expectations of what a Limousine Service can be.
              </p>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
