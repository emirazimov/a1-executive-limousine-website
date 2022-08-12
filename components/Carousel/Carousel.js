// import React, { Component } from "react"
// import Carousel from "react-spring-3d-carousel"
// import { v4 as uuidv4 } from "uuid"
// import { config } from "react-spring"
// import sedan from "../public/sedan-min.png"
// import bus from "../public/bus-min.png"
// import suv from "../public/suv-min.png"
// import limousine from "../public/limousine-min.png"
// import Image from "next/image"
// import styles from "../styles/Fleet.module.scss"

// export default class CarouselCustom extends Component {
//   state = {
//     goToSlide: 0,
//     offsetRadius: 1,
//     showNavigation: true,
//     config: config.gentle,
//   }

//   slides = [
//     {
//       key: uuidv4(),
//       content: (
//         <div className={styles.carouselItem}>
//           <img src={sedan} alt="1" objectFit="contain" />
//         </div>
//       ),
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <div className={styles.carouselItem}>
//           <img src={bus} alt="2" objectFit="contain" />
//         </div>
//       ),
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <div className={styles.carouselItem}>
//           <img src={suv} alt="3" objectFit="contain" />
//         </div>
//       ),
//     },
//     {
//       key: uuidv4(),
//       content: (
//         <div className={styles.carouselItem}>
//           {" "}
//           <img src={limousine} alt="4" objectFit="contain" />
//         </div>
//       ),
//     },
//   ].map((slide, index) => {
//     return { ...slide, onClick: () => this.setState({ goToSlide: index }) }
//   })

//   onChangeInput = (e) => {
//     this.setState({
//       [e.target.name]: parseInt(e.target.value, 10) || 0,
//     })
//   }

//   render() {
//     return (
//       <div style={{ width: "60%", height: "500px", margin: "0 auto" }}>
//         <Carousel
//           slides={this.slides}
//           goToSlide={this.state.goToSlide}
//           offsetRadius={this.state.offsetRadius}
//           showNavigation={this.state.showNavigation}
//           animationConfig={this.state.config}
//         />
//       </div>
//     )
//   }
// }
