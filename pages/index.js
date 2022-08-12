import Head from "next/head"
import Image from "next/image"
import MainContainer from "../components/MainContainer/MainContainer"
import styles from "../styles/Home.module.css"
import { scroller } from "react-scroll"
import { useSpring } from "react-spring"
import { useCallback, useState } from "react"
import useInView from "react-cool-inview"
import loadable from "@loadable/component"

const Header = loadable(() => import("../components/Header/Header"), {
  fallback: <div></div>,
})
const OurServices = loadable(
  () => import("../components/OurServices/OurServices"),
  {
    fallback: <div></div>,
  }
)
const Fleet = loadable(() => import("../components/Fleet/Fleet"), {
  fallback: <div></div>,
})
const AboutUs = loadable(() => import("../components/AboutUs/AboutUs"), {
  fallback: <div></div>,
})
const Contacts = loadable(() => import("../components/Contacts/Contacts"), {
  fallback: <div></div>,
})
const Footer = loadable(() => import("../components/Footer/Footer"), {
  fallback: <div></div>,
})

// const Header = dynamic(() => import("../components/Header"))
// const OurServices = dynamic(() => import("../components/OurServices"))
// const Fleet = dynamic(() => import("../components/Fleet"), {
//   ssr: false,
// })
// const AboutUs = dynamic(() => import("../components/AboutUs"))
// const Contacts = dynamic(() => import("../components/Contacts"))
// const Footer = dynamic(() => import("../components/Footer"))

const scrollToSectionOurServices = () => {
  scroller.scrollTo("OurServices", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}
const scrollToSectionFleet = () => {
  scroller.scrollTo("Fleet", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}
const scrollToSectionAboutUs = () => {
  scroller.scrollTo("AboutUs", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}
const scrollToSectionContacts = () => {
  scroller.scrollTo("Contacts", {
    duration: 800,
    delay: 0,
    smooth: "easeInOutQuart",
  })
}

export default function Home() {
  const [{ scroll }, set] = useSpring(() => ({ scroll: 0 }))
  const onScroll = useCallback(
    (e) => void set({ scroll: e.target.scrollTop / (window.innerHeight / 2) }),
    []
  )

  const { observe, inView } = useInView({
    onEnter: ({ unobserve }) => unobserve(), // only run once
  })

  return (
    <>
      <MainContainer>
        {/* <Head>
          <link
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          rel="stylesheet"
          integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
          crossorigin="anonymous"
        />
        </Head> */}

        <div onScroll={onScroll}>
          <header className="Header">
            <Header
              scrollToSectionOurServices={scrollToSectionOurServices}
              scrollToSectionFleet={scrollToSectionFleet}
              scrollToSectionAboutUs={scrollToSectionAboutUs}
              scrollToSectionContacts={scrollToSectionContacts}
            />
          </header>
          {/* <div ref={observe}> */}
          <main>
            <section className="OurServices">
              <OurServices />
            </section>
            {/* </div> */}
            <section ref={observe}>
              <div className="Fleet">{inView && <Fleet />}</div>
            </section>
            <section ref={observe}>
              <div className="AboutUs">{inView && <AboutUs />}</div>
            </section>
            <section className="Contacts">
              <Contacts />
            </section>
          </main>
          <footer className="Footer">
            <Footer />
          </footer>
        </div>
      </MainContainer>
    </>
  )
}
