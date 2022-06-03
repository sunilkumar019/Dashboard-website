import Carousel from "react-multi-carousel";
import { CCard, CCardBody } from '@coreui/react'
import Link from "next/link";
import { CContainer } from "coreui-next";
import {homeJson}from '../../data/home/HomeData';



export const getStaticProps = () => {
  return {
    props: {
      manage: homeJson,
      
    }
  }
}
// console.log(homeJson)

const CarouselSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide:1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <div >     
        <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={3000}
            keyBoardControl={false}
            customTransition="all 0.9s"
            transitionDuration={900}
            containerClassName="carousel-container-fluid"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClassName="custom-dot-list-style"
            autoPlay={true}
            arrows={false} >

           
            <div >
                <img src=" https://www.pharmahopers.com/assets/images/pharma-franchise-banner.jpg" alt=""style={{height:"500px" ,width:"100%"}}/>
            </div>
            <div >
                <img src="https://cutewallpaper.org/21/pharmacist-wallpaper/Pharmacy-Wallpaper-43-Pictures.png" alt=""style={{height:"500px" ,width:"100%"}}  />
            </div>
            <div >
                <img  src="https://cutewallpaper.org/21/laboratory-wallpaper/Laboratory-Vectors-Photos-and-PSD-files-Free-Download.jpg" alt="" style={{height:"500px" ,width:"100%"}} />
            </div>
            
        </Carousel>
       </div>
    )
}

export default CarouselSlider;



