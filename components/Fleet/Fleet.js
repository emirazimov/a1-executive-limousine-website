import styles from "./Fleet.module.scss"
// import Image from "next/image"
// import sedan from "../public/sedan-min.png"
// import bus from "../public/bus-min.png"
// import suv from "../public/suv-min.png"
// import limousine from "../public/limousine-min.png"
import { useEffect, useState } from "react"
import Slider from "react-slick"
// import CarouselCustom from "./Carousel"
import Carousel, { consts } from "react-elastic-carousel"
import dynamic from "next/dynamic"
import {
  NextArrowIcon,
  PrevArrowIcon,
  TitleUnderline,
} from "../../public/icons"
import Image from "next/image"

function imageLoader({ src, width, height }) {
  // const relativeSrc = (src) => src.split("/").pop()

  return `https://delux-limo.s3.us-east-2.amazonaws.com/${src}`
}

// const CarouselCustom = dynamic(() => import('./Carousel'), {
//   ssr: false,
// })

const images = [
  ["suv-min.webp", "suv"],
  ["sedan-min.webp", "sedan"],
  ["bus-min.webp", "bus"],
  ["limousine-min.webp", "limousine"],
]

const Fleet = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <NextArrowIcon />
      </div>
    )
  }

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <PrevArrowIcon />
      </div>
    )
  }

  const [imageIndex, setImageIndex] = useState(0)

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  }
  //   let slides = [

  //     <Image src={sedan} alt="1" />,
  //     <Image src={bus} alt="2" />,
  //     <Image src={suv} alt="3" />,
  //     <Image src={limousine} alt="4" />,
  //   ]

  const myArrow = ({ type, onClick, isEdge }) => {
    const pointer = type === consts.PREV ? <PrevArrowIcon /> : <NextArrowIcon />
    return (
      <button
        onClick={onClick}
        disabled={isEdge}
        style={{
          height: "44px",
          border: "none",
          background: "transparent",
          marginTop: "100px",
        }}
      >
        {pointer}
      </button>
    )
  }
  const [matches, setMatches] = useState(
    window.matchMedia("(max-width: 781px)").matches
  )

  useEffect(() => {
    const handler = (e) => setMatches(e.matches)
    window.matchMedia("(min-width: 781px)").addListener(handler)

    // console.log(
    //   'recCarouselWrapper ' + recCarouselWrapper,
    //   'recCarousel ' + recCarousel
    // )
  }, [])
  // useEffect(() => {
  //   document
  //     .getElementsByClassName('rec')[0]
  //     .setAttribute('style', 'height: 400px')
  //   document
  //     .getElementsByClassName('rec-carousel')[0]
  //     .setAttribute('style', 'height: 400px')
  // }, [])

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.titleContainer}>
          <span>FLEET</span>
          {/* <TitleUnderline
            color={"black"}
            width={"94px"}
            height={"22px"}
            firstViewBox={"80"}
            thirdViewBox={"90"}
          /> */}
        </div>
        <div className={styles.carouselContainer}>
          {/* <CarouselCustom /> */}
          {!matches ? (
            <Slider {...settings} style={{ width: "100%", height: "100%" }}>
              {images.map((img, idx) => (
                <div
                  className={idx === imageIndex ? "slide activeSlide" : "slide"}
                >
                  <div className={styles.carouselItem}>
                    <div className={styles.carouselItemImgContainer}>
                      {/* <img
                        src={img[0]}
                        alt='fleet'
                        style={{ width: '100%', height: '100%' }}
                      /> */}
                      <Image
                        loader={imageLoader}
                        src={img[0]}
                        alt="fleet"
                        // style={{ width: "100%", height: "100%" }}
                        width={"370%"}
                        height={"212%"}
                        // layout='fill'
                      />
                    </div>
                    <span
                      className={
                        idx === imageIndex ? "slide-text-hidden" : "slide-text"
                      }
                    >
                      {img[1]}
                    </span>
                  </div>
                </div>
              ))}
            </Slider>
          ) : (
            <Carousel
              renderArrow={myArrow}
              pagination={false}
              // style={{ height: '400px' }}
            >
              <div className={styles.carouselItemMobile}>
                {/* <img
                  src='https://delux-limo.s3.us-east-2.amazonaws.com/sedan-min.webp'
                  alt='car1'
                  style={{ width: '100%', height: '100%' }}
                /> */}
                <Image
                  loader={imageLoader}
                  src="sedan-min.webp"
                  alt="car1"
                  // style={{ width: "100%", height: "100%" }}
                  width={"370%"}
                  height={"212%"}
                  // layout='fill'
                />
                <span>SEDAN</span>
              </div>
              <div className={styles.carouselItemMobile}>
                {/* <img
                  src='https://delux-limo.s3.us-east-2.amazonaws.com/bus-min.webp'
                  alt='car2'
                  style={{ width: '100%', height: '100%' }}
                /> */}
                <Image
                  loader={imageLoader}
                  src="bus-min.webp"
                  alt="car2"
                  // style={{ width: "100%", height: "100%" }}
                  width={"370%"}
                  height={"212%"}
                  // layout='fill'
                />
                <span>BUS</span>
              </div>
              <div className={styles.carouselItemMobile}>
                {/* <img
                  src='https://delux-limo.s3.us-east-2.amazonaws.com/suv-min.webp'
                  alt='car3'
                  style={{ width: '100%', height: '100%' }}
                /> */}
                <Image
                  loader={imageLoader}
                  src="suv-min.webp"
                  alt="car3"
                  // style={{ width: "100%", height: "100%" }}
                  width={"370%"}
                  height={"212%"}
                  // layout='fill'
                />
                <span>SUV</span>
              </div>
              <div className={styles.carouselItemMobile}>
                {/* <img
                  src='https://delux-limo.s3.us-east-2.amazonaws.com/limousine-min.webp'
                  alt='car4'
                  style={{ width: '100%', height: '100%' }}
                /> */}
                <Image
                  loader={imageLoader}
                  src="limousine-min.webp"
                  alt="car4"
                  // style={{ width: "100%", height: "100%" }}
                  width={"370%"}
                  height={"212%"}
                  // layout='fill'
                />
                <span>LIMOUSINE</span>
              </div>
            </Carousel>
          )}
        </div>
      </div>
    </div>
  )
}

export default Fleet
