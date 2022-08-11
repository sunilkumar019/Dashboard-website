import Carousel from "react-multi-carousel";
import Image from 'next/image';
const CarouselSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 1 // optional, default to 2.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 3.
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
                    <Image align="center" src=" https://images.squarespace-cdn.com/content/v1/5f7b9b1a8be07a70f92c0f4e/1642372492855-CX5Y26IBZDK5KLNAC4J7/pharma+range+photos.022.png" alt="Slider image" height={500} width={1350} />
                </div>
                <div >
                    <Image align="center" src="https://cutewallpaper.org/21/pharmacist-wallpaper/Pharmacy-Wallpaper-43-Pictures.png" alt="Slider image" height={500} width={1350} />
                </div>
                <div >
                    <Image align="center" src=" https://media.nature.com/lw1024/magazine-assets/d43978-020-00011-4/d43978-020-00011-4_18482702.jpg" alt="Slider image" height={500} width={1350} />
                </div>

            </Carousel>
        </div>
    )
}

export default CarouselSlider;



