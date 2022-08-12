import Head from "next/head"
import Script from "next/script"
const MainContainer = ({ children, keywords }) => {
  return (
    <>
      <Head>
        <title>
          A1 EXECUTIVE LIMOS - Washington DC Area Private Car and SUV, Hourly or
          Airport Service.
        </title>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="https://delux-limo.s3.us-east-2.amazonaws.com/logo.jpg"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="keywords"
          content="Private car
Private car service Washington dc
Washington DC Tour
Limo service Washington dc
Limousine service Washington dc
Black car service
Black car service Washington dc
Limo service
Limo services
Airport transfer Washington dc
Airport car service near me
Private car service near me"
          //   keywords={
          //     "booking,book,bookinglane,trasnport,transportation,book transport,booking transport,crm mobile, moile crm" +
          //     keywords
          //   }
        ></meta>
        <link rel="canonical" href="https://dlxlimousine.com/" />
        <link
          rel="apple-touch-icon"
          href="https://delux-limo.s3.us-east-2.amazonaws.com/logo.jpg"
        />
        <meta
          name="description"
          content="A1 Executive Limos has been offering clients throughout
                Washington DC and the surrounding area quality transportation
                services since 2000. Great service begins with great people and
                real experience which is why we put so much into choosing the
                best people to join our team. You’ll always have a driver who
                knows punctuality, safe driving and customer service inside and
                out. We aim to not only meet your needs, but also exceed your
                expectations of what a Limousine Service can be."
        ></meta>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width, initialscale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* 
        <link
          rel="stylesheet"
          href="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.css"
        /> */}
        {/* <link
          rel="stylesheet"
          href="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.css.map"
        /> */}
        <meta name="robots" content="all"></meta>
        <meta name="robots" content="max-snippet:-1"></meta>
        <meta name="robots" content="max-image-preview:large"></meta>
        <meta name="robots" content="index, follow"></meta>
        <meta name="robots" content="max-video-preview:-1"></meta>
        <meta
          name="googlebot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        ></meta>
        <meta
          name="bingbot"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        ></meta>

        <meta property="og:locale" content="en_US"></meta>
        <meta
          property="og:title"
          content="A1 EXECUTIVE LIMOS - Washington DC Area Private Car and SUV, Hourly or
          Airport Service."
        />
        <meta property="og:url" content="https://a1executivelimos.com/"></meta>
        <meta property="og:type" content="website"></meta>
        <meta
          property="og:description"
          content="A1 Executive Limos has been offering clients throughout
                Washington DC and the surrounding area quality transportation
                services since 2000. Great service begins with great people and
                real experience which is why we put so much into choosing the
                best people to join our team. You’ll always have a driver who
                knows punctuality, safe driving and customer service inside and
                out. We aim to not only meet your needs, but also exceed your
                expectations of what a Limousine Service can be."
        ></meta>
        <meta
          property="og:image"
          content="https://clients-templates.s3.ap-south-1.amazonaws.com/a1executivelimos/metaTagsImage.jpg"
        ></meta>
        {/* <meta property="fb:app_id" content="APPID" /> */}
        <meta
          property="twitter:title"
          content="A1 EXECUTIVE LIMOS - Washington DC Area Private Car and SUV, Hourly or
          Airport Service."
        ></meta>
        <meta
          property="twitter:description"
          content="A1 Executive Limos has been offering clients throughout
                Washington DC and the surrounding area quality transportation
                services since 2000. Great service begins with great people and
                real experience which is why we put so much into choosing the
                best people to join our team. You’ll always have a driver who
                knows punctuality, safe driving and customer service inside and
                out. We aim to not only meet your needs, but also exceed your
                expectations of what a Limousine Service can be."
        ></meta>
        <meta
          property="twitter:image"
          content="https://clients-templates.s3.ap-south-1.amazonaws.com/a1executivelimos/metaTagsImage.jpg"
        ></meta>
        <meta property="twitter:card" content="summary_large_image"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
        {/* <meta name="theme-color" content="#000000" /> */}
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        {/* <meta property="twitter:card" content="summary"></meta> */}

        {/* <script
          src="https://apis.google.com/js/api.js"
          type="text/javascript"
        ></script> */}

        {/* <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-212872613-1"
        ></script>
        <script>
          {`
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());

         gtag('config', 'UA-212872613-1');`}
        </script> */}
        {/* <script
          src="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/option1-widget-files/deluxe-limo.js"
          type="text/javascript"
        ></script> */}
        {/* <script src="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.js"></script> */}
      </Head>
      <div>{children}</div>
      <div id="widget-by-bookinglane"></div>

      {/* <Script
        src="https://bookinglane-widgets.s3.us-east-2.amazonaws.com/Global-widget-files/widget.js"

      ></Script> */}
      {/* <Script
        onLoad={() => {
          // let styleForJss3 = `
          //   display: block;
          // `
          // document.getElementsByClassName("jss3").style = styleForJss3
          // document.body.querySelector(".jss3").style.display = "block"
          // console.log(document?.getElementsByClassName("jss4"))
          // console.log("hello its me")
          // document.body.querySelector(".jss5").style.left = "none"
          // document.body.querySelector(".jss5").style.width = "initial"
          // document.body.querySelector(".jss5").style.bottom = "initial"
          // document.body.querySelector(".jss5").style.height = "initial"
          // document.body.querySelector(".jss5").style.position = "initial"
          // document.body.querySelector(".jss5").style.background = "initial"
        }}
      ></Script> */}
      {/* <Script
        src="https://apis.google.com/js/api.js"
        type="text/javascript"
      ></Script>
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-N6ZS1BMP1J"
      ></Script>
      <Script
        onLoad={() => {
          window.dataLayer = window.dataLayer || []
          function gtag() {
            " "
          }
          {
            dataLayer.push(arguments)
          }
          gtag("js", new Date())
          gtag("config", "G-N6ZS1BMP1J")
        }}
      ></Script> */}

      {/* <script src="https://bookinglane.com/widgets/142/widget.js"></script> */}
    </>
  )
}

export default MainContainer
