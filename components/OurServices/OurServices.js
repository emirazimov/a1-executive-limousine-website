// import Image from "next/image"
import styles from "./OurServices.module.scss"
// import cardImg1 from "../public/card1-min.jpg"
// import cardImg2 from "../public/card2-min.jpg"
// import cardImg3 from "../public/card3-min.jpg"
// import cardImg4 from "../public/card4-min.jpg"
// import cardImg5 from "../public/card5-min.jpg"
// import cardImg6 from "../public/card6-min.jpg"
import { TitleUnderline } from "../../public/icons"
import Image from "next/image"
import { useMediaQuery } from "@material-ui/core"

function imageLoader({ src, width, height }) {
  // const relativeSrc = (src) => src.split("/").pop()

  return `https://delux-limo.s3.us-east-2.amazonaws.com/${src}`
}

const OurServices = () => {
  const isMobile = useMediaQuery("(max-width: 1024px)")

  return (
    <div className={styles.mainContainer}>
      <div className={styles.wrapper}>
        <div className={styles.mainTitle}>
          <span>OUR SERVICES</span>
          {/* <TitleUnderline
            color={"white"}
            width={"222px"}
            height={"22px"}
            firstViewBox={"0"}
            thirdViewBox={"250"}
          /> */}
        </div>
        <div className={styles.cardsBlock}>
          <div className={styles.firstRow}>
            <figure className={styles.card1}>
              <div className={styles.imgContainer}>
                {/* <img
                src='https://delux-limo.s3.us-east-2.amazonaws.com/card1-min.webp'
                style={{ width: '100%', height: '100%' }}
                alt='ServicesImg1'
              /> */}
                <Image
                  loader={imageLoader}
                  src="card1-min.webp"
                  alt="ServicesImg1"
                  // style={{ width: "100%", height: "100%" }}
                  width={"370%"}
                  height={"353%"}
                  // layout='fill'
                />
              </div>
              <figcaption className={styles.textContainer}>
                <span>Airport Transfers</span>
                <p>
                  Arrive at Washington DC airports in style and comfort. We will
                  pick you up in a Private SUV, limousine, or luxury car. No
                  matter if you are going on vacation or traveling for business,
                  Private Cars and SUV&apos;s are available to make your trip to
                  the airport an easy and relaxing experience.
                </p>
              </figcaption>
            </figure>
            <figure className={styles.card2}>
              <div className={styles.imgContainer}>
                {/* <img
                src='https://delux-limo.s3.us-east-2.amazonaws.com/card2-min.webp'
                style={{ width: '100%', height: '100%' }}
                alt='ServicesImg2'
              /> */}
                <Image
                  loader={imageLoader}
                  src="card2-min.webp"
                  alt="ServicesImg2"
                  // style={{ width: "100%", height: "100%" }}
                  width={"370%"}
                  height={"353%"}
                  // layout='fill'
                />
              </div>
              <figcaption className={styles.textContainer}>
                <span>Wine Tours</span>
                <p>
                  At A1 Executive Limos, we provide Chauffeur for Corporate
                  travel. We want you to enjoy yourself even when you’re
                  travelling for a corporate event. By booking one of our
                  luxurious vehicles, you can focus on preparing for your
                  meeting or seeing the sites as we drive you to your
                  destination. Our punctual and expert chauffeurs are sure to
                  impress for any of your corporate travel needs including One
                  Way and Round Trip Travel.
                </p>
              </figcaption>
            </figure>
            <figure className={styles.card3}>
              <div className={styles.imgContainer}>
                {/* <img
                src='https://delux-limo.s3.us-east-2.amazonaws.com/card3-min.webp'
                style={{ width: '100%', height: '100%' }}
                alt='ServicesImg3'
              /> */}
                <Image
                  loader={imageLoader}
                  src="card3-min.webp"
                  alt="ServicesImg3"
                  // style={{ width: "100%", height: "100%" }}
                  width={"370%"}
                  height={"353%"}
                  // layout='fill'
                />
              </div>
              <figcaption className={styles.textContainer}>
                <span>Point to Point Transportation</span>
                <p>
                  Our point to point car service provides you with the kind of
                  transportation that will help make your event or occasion a
                  special one. We provide point to point transportation with
                  particular attention on comfort and safety, getting our
                  clients from place to place as efficiently as possible. Our
                  professional chauffeurs have a wealth of knowledge and
                  experience and are trained to provide the highest level of
                  service in the industry.
                </p>
              </figcaption>
            </figure>

            {isMobile && (
              <>
                <figure className={styles.card4}>
                  <div className={styles.imgContainer}>
                    {/* <img
                src='https://delux-limo.s3.us-east-2.amazonaws.com/card4-min.webp'
                style={{ width: '100%', height: '100%' }}
                alt='ServicesImg4'
              /> */}
                    <Image
                      loader={imageLoader}
                      src="card4-min.webp"
                      alt="ServicesImg4"
                      // style={{ width: "100%", height: "100%" }}
                      width={"370%"}
                      height={"353%"}
                      // layout='fill'
                    />
                  </div>
                  <figcaption className={styles.textContainer}>
                    <span>City Tours</span>
                    <p>
                      A1 Executive Limos provides privately chauffeured tours
                      that leave you feeling more like a local than a visitor.
                      Every tour is handcrafted to your group’s wants and needs,
                      this ensures that you aren’t just going on a tour but
                      making memories that will last a lifetime. Our goal is
                      that your tour with us is the best thing.
                      <br />
                      <br />
                      Let us organize everything from your collection to your
                      return on a carefree relaxing chauffeured tour. Enjoy the
                      most famous highlights and the most hidden treasures of
                      the city, based on personalized programs.
                    </p>
                  </figcaption>
                </figure>
                <figure className={styles.card5}>
                  <div className={styles.imgContainer}>
                    {/* <img
                src='https://delux-limo.s3.us-east-2.amazonaws.com/card5-min.webp'
                style={{ width: '100%', height: '100%' }}
                alt='ServicesImg5'
              /> */}
                    <Image
                      loader={imageLoader}
                      src="card5-min.webp"
                      alt="ServicesImg5"
                      // style={{ width: "100%", height: "100%" }}
                      width={"370%"}
                      height={"353%"}
                      // layout='fill'
                    />
                  </div>
                  <figcaption className={styles.textContainer}>
                    <span>Weddings</span>
                    <p>
                      Your wedding is the most important and magical day of your
                      life, and you want the best of everything, which includes
                      using A1 Executive Limos. Our friendly team is always on
                      hand to discuss your wedding requirements, and is always
                      available and happy to discuss and amend your plans as
                      required. Our chauffeurs will keep you relaxed and take
                      the best possible care of you on the day.
                    </p>
                  </figcaption>
                </figure>
                <figure className={styles.card6}>
                  <div className={styles.imgContainer}>
                    {/* <img
                src='https://delux-limo.s3.us-east-2.amazonaws.com/card6-min.webp'
                style={{ width: '100%', height: '100%' }}
                alt='ServicesImg6'
              /> */}
                    <Image
                      loader={imageLoader}
                      src="card6-min.webp"
                      alt="ServicesImg6"
                      // style={{ width: "100%", height: "100%" }}
                      width={"370%"}
                      height={"353%"}
                      // layout='fill'
                    />
                  </div>
                  <figcaption className={styles.textContainer}>
                    <span>Hourly Chauffer Services</span>
                    <p>
                      You will be asked to indicate a pick-up location and a
                      destination location of your choice while booking a
                      transfer.
                      <br />
                      <br />
                      Hourly booking: Seeking to fulfil your needs, we offer you
                      a flexible hourly booking option. The duration of your
                      journey may vary up to as many hours as you require.
                      Hourly booking differs from transfer service as you can
                      manage your journey while enjoying a drive.
                      <br />
                      <br />
                      We are ready to fulfill any special need you have in mind!
                    </p>
                  </figcaption>
                </figure>
              </>
            )}
          </div>{" "}
          <div className={styles.secondRow}>
            <figure className={styles.card4}>
              <div className={styles.imgContainer}>
                {/* <img
                src='https://delux-limo.s3.us-east-2.amazonaws.com/card4-min.webp'
                style={{ width: '100%', height: '100%' }}
                alt='ServicesImg4'
              /> */}
                <Image
                  loader={imageLoader}
                  src="card4-min.webp"
                  alt="ServicesImg4"
                  // style={{ width: "100%", height: "100%" }}
                  width={"370%"}
                  height={"353%"}
                  // layout='fill'
                />
              </div>
              <figcaption className={styles.textContainer}>
                <span>City Tours</span>
                <p>
                  A1 Executive Limos provides privately chauffeured tours that
                  leave you feeling more like a local than a visitor. Every tour
                  is handcrafted to your group’s wants and needs, this ensures
                  that you aren’t just going on a tour but making memories that
                  will last a lifetime. Our goal is that your tour with us is
                  the best thing.
                  <br />
                  <br />
                  Let us organize everything from your collection to your return
                  on a carefree relaxing chauffeured tour. Enjoy the most famous
                  highlights and the most hidden treasures of the city, based on
                  personalized programs.
                </p>
              </figcaption>
            </figure>
            <figure className={styles.card5}>
              <div className={styles.imgContainer}>
                {/* <img
                src='https://delux-limo.s3.us-east-2.amazonaws.com/card5-min.webp'
                style={{ width: '100%', height: '100%' }}
                alt='ServicesImg5'
              /> */}
                <Image
                  loader={imageLoader}
                  src="card5-min.webp"
                  alt="ServicesImg5"
                  // style={{ width: "100%", height: "100%" }}
                  width={"370%"}
                  height={"353%"}
                  // layout='fill'
                />
              </div>
              <figcaption className={styles.textContainer}>
                <span>Weddings</span>
                <p>
                  Your wedding is the most important and magical day of your
                  life, and you want the best of everything, which includes
                  using A1 Executive Limos. Our friendly team is always on hand
                  to discuss your wedding requirements, and is always available
                  and happy to discuss and amend your plans as required. Our
                  chauffeurs will keep you relaxed and take the best possible
                  care of you on the day.
                </p>
              </figcaption>
            </figure>
            <figure className={styles.card6}>
              <div className={styles.imgContainer}>
                {/* <img
                src='https://delux-limo.s3.us-east-2.amazonaws.com/card6-min.webp'
                style={{ width: '100%', height: '100%' }}
                alt='ServicesImg6'
              /> */}
                <Image
                  loader={imageLoader}
                  src="card6-min.webp"
                  alt="ServicesImg6"
                  // style={{ width: "100%", height: "100%" }}
                  width={"370%"}
                  height={"353%"}
                  // layout='fill'
                />
              </div>
              <figcaption className={styles.textContainer}>
                <span>Hourly Chauffer Services</span>
                <p>
                  You will be asked to indicate a pick-up location and a
                  destination location of your choice while booking a transfer.
                  <br />
                  <br />
                  Hourly booking: Seeking to fulfil your needs, we offer you a
                  flexible hourly booking option. The duration of your journey
                  may vary up to as many hours as you require. Hourly booking
                  differs from transfer service as you can manage your journey
                  while enjoying a drive.
                  <br />
                  <br />
                  We are ready to fulfill any special need you have in mind!
                </p>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurServices
