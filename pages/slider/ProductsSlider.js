import Carousel from "react-multi-carousel";
import { CCard, CCardBody } from '@coreui/react'
import Link from "next/link";
import { CContainer, CRow } from "coreui-next";


const ProductsSlider = () => {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 4,
            slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };

    return (
        <section >
            <CContainer fluid className="my-5 ">
                <CRow className="text-center   " >
                    <div className="col-lg-6 mx-auto">
                        <h1 className="h2 text-dark">Our <span className="globaltext1">Products</span></h1>
                    </div>
                </CRow>
                <CContainer>
                    <CRow className="text-center my-5 mr-3 ">

                        <Carousel

                            swipeable={false}
                            draggable={false}
                            showDots={false}
                            responsive={responsive}
                            ssr={true} // means to render carousel on server-side.
                            infinite={true}
                            autoPlaySpeed={1200}
                            keyBoardControl={true}
                            customTransition="all 0.9s"
                            transitionDuration={999}
                            containerclassName="carousel-container"
                            removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                            dotListclassName="custom-dot-list-style"
                            autoPlay={true}
                            arrows={false}


                           >

                            <div className='col-md-12 mx-auto'>
                                <CCardBody className=" border border-dark rounded-md " >
                                    <img src="xxx" className=" card-img-top" alt="medicine" />

                                </CCardBody>
                                <div className=" mt-3 py-1 bg-dark" >

                                    <a className="h6 text-decoration-none overflow-hidden  text-light"><b>sfsfme</b></a>

                                </div>

                            </div>

                            <div className='col-md-12 mx-auto'>
                                <CCardBody className=" border border-dark rounded-md " >
                                    <img src="xxx" className="card-img-top" alt="medicine" />

                                </CCardBody>
                                <div className=" mt-3 py-1 bg-dark" >

                                    <a className="h6 text-decoration-none overflow-hidden  text-light"><b>sfsfme</b></a>

                                </div>
                            </div>
                            <div className='col-md-12 mx-auto '>
                                <CCardBody className=" border border-dark rounded-md" >
                                    <img src="xxx" className="card-img-top" alt="medicine" />

                                </CCardBody>
                                <div className=" mt-3 py-1 bg-dark " >

                                    <a className="h6 text-decoration-none overflow-hidden  text-light"><b>sfsfme</b></a>

                                </div>
                            </div>
                            <div className='col-md-12 mx-auto'>
                                <CCardBody className=" border border-dark rounded-md " >
                                    <img src="xxx" className="card-img-top" alt="medicine" />

                                </CCardBody>
                                <div className=" mt-3 py-1 bg-dark" >

                                    <a className="h6 text-decoration-none overflow-hidden  text-light"><b>sfsfme</b></a>

                                </div>
                            </div>
                            <div className='col-md-12 mx-auto'>
                                <CCardBody className=" border border-dark rounded-md" >
                                    <img src="xxx" className="card-img-top" alt="medicine" />

                                </CCardBody>
                                <div className=" mt-3 py-1 bg-dark" >

                                    <a className="h6 text-decoration-none overflow-hidden  text-light"><b>sfsfme</b></a>

                                </div>
                            </div>
                            <div className='col-md-12 mx-auto'>
                                <CCardBody className=" border border-dark rounded-md " >
                                    <img src="xxx" className="card-img-top" alt="medicine" />

                                </CCardBody>
                                <div className=" mt-3 py-1 bg-dark" >

                                    <a className="h6 text-decoration-none overflow-hidden  text-light"><b>sfsfme</b></a>

                                </div>
                            </div>

                            <div className='col-md-12 mx-auto'>
                                <CCardBody className=" border border-dark rounded-md" >
                                    <img src="xxx" className="card-img-top" alt="medicine " />

                                </CCardBody>
                                <div className=" mt-3 py-1 bg-dark" >

                                    <a className="h6 text-decoration-none overflow-hidden  text-light"><b>sfsfme</b></a>

                                </div>
                            </div>



                        </Carousel>

                    </CRow>
                </CContainer>
            </CContainer>
        </section >
    )
}

export default ProductsSlider
