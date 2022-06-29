
import { MDBIcon } from "mdbreact";
import Link from "next/link";
import OurGoals from "./about/OurGoals";
import { CCard, CCardBody, CCol, CContainer, CRow } from "coreui-next";
import { CCardTitle } from "@coreui/react";
import CarouselSlider from "./slider/CarouselSlider";
import ProductsSlider from "./slider/ProductsSlider";



// export const getStaticProps = () => {
//   return {
//     props: {
//       manage: homeJson,
//       goal:goalCards
      
//     }
//   }
// }





const Home = ({manage,goal}) => {

  // for(var i = 0; i < homeJson.length; i++) {
//   var obj = homeJson[i];
// }
// for (var key in json) {
// if (homeJson.hasOwnProperty(key)) {
//   alert(homeJson[key].id);
//   alert(homeJson[key].msg);
// }
// }

 


//   const [noOfElement, setnoOfElement] = useState(8);

//    const slice = data.slice(0, noOfElement);


// // products cat limit
//      const viewAll = () => {

//     setnoOfElement(noOfElement + noOfElement);
//   }

 


  return (
    <>

      {/* Sticky Social Bar */}
      <section>
        <div className="icon-Homebar">

          <Link href="/">
            <a className="phone"><MDBIcon icon="phone"/></a>
          </Link>
          <Link href="/">
            <a className="facebook"><MDBIcon fab icon="whatsapp"/></a>
          </Link>
          <Link href="/">
            <a className="email"><MDBIcon icon="envelope"/></a>
          </Link>
        </div>
      </section>


      {/* carousel slider */}
      <section>
        <CarouselSlider />
      </section>

      {/* About */}
      <section>
        <CContainer className="pt-5">
          <CRow className="row text py-3" >
            <div className="col-lg-12 m-auto">
              <h1 className="h1 pl-3 animated pulse slower infinite "><span style={{ color: "#E1204D" }} className="slide-out-right">Welcome To</span> Pharma Biotech Pvt.Ltd</h1>
              <b>  <p className="text-muted">
                <Link href=""><a>PHARMA BIOTECH</a></Link> PVT.LTD.is a professionally managed fast growing pharmaceutical company having presence in domestic market with over 150 products in various Ranges. Our Products Ranges from general to antibiotics. DEXON BIOTECH is an ISO 9001:2015 Certified Company and complies with GMP Standards and as a group it has strong presence in the market with innovative product range comprising Latest Antibiotics, Ayurvedic Products, General Products, Ophthalmic Product, Pediatric Range, Derma care, I.V. Fluids and many more. It is an endeavor of our esteemed organization to always devise innovative and result oriented ideas because innovation always gets acknowledged.
              </p></b>
            </div>
          </CRow>
        </CContainer>
      </section>
      {/* products carousel */}
      <section>

        <ProductsSlider />

      </section>
      {/* cards */}
      <section>
        <CContainer fluid className="py-5" style={{ backgroundColor: "LightGray" }}>
          <CContainer className="py-5">
            <CRow>
              <CCol md={3} className="mb-3 ">
                <div className="testimotionals">
                  <CCard className="card pt-4">
                    <div className="layer">
                    </div>
                    <div className="content">
                      <div className="image mb-2">
                        <img align="center"  src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/network-1.jpg" alt="" />
                      </div>
                      <p className="text-md-start px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

                    </div>
                  </CCard>
                </div>

              </CCol>
              <CCol md={3} className="mb-3">
                <div className="testimotionals">
                  <CCard className="card pt-4">
                    <div className="layer">
                    </div>
                    <div className="content">
                      <div className="image mb-2">
                        <img align="center"  src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/network-2.jpg" alt="" />
                      </div>
                      <p className="text-md-start px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit,</p>

                    </div>
                  </CCard>
                </div>

              </CCol>
              <CCol md={3} className="mb-3">
                <div className="testimotionals">
                  <CCard className="card pt-4">
                    <div className="layer">
                    </div>
                    <div className="content">
                      <div className="image mb-2">
                        <img align="center"  src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/network-3.jpg" alt="" />
                      </div>
                      <p className="text-md-start px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit..</p>

                    </div>
                  </CCard>
                </div>

              </CCol>
              <CCol md={3} className="mb-3">
                <div className="testimotionals">
                  <CCard className="card pt-4">
                    <div className="layer">
                    </div>
                    <div className="content">
                      <div className="image mb-2">
                        <img align="center"  src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/network-4.jpg" alt="" />
                      </div>
                      <p className="text-md-start px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

                    </div>
                  </CCard>
                </div>

              </CCol>
            </CRow>
          </CContainer>
        </CContainer>
      </section>

      {/*products category*/}

      <section className="text-light">
        <CContainer className="py-5">
          <CRow className="text-center py-3">
            <div className="col-lg-6 m-auto">
              <h1 className="h3 text-muted pb-4">Pharma Biotech <span className="globaltext1"> Medicines</span></h1>
            </div>
          </CRow>
          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4 ">
            <CCol xs>
              <CCard className="h-30 bg-danger align-items-center text-center card19 ">

                <CCardBody >
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/tablet.png" alt="" />
                  <CCardTitle className=" h5 text-center pt-2">Tablet</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-30 bg-dark align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/capsule.png" alt="" />
                  <CCardTitle className="h5 text-center  pt-2">Capsules</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-30 bg-danger align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/injection.png" alt="" />
                  <CCardTitle className="h5 text-center  pt-2">Injectable</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-30 bg-dark align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/syrup.png" alt="" />
                  <CCardTitle className="h5 text-center  pt-2" ><p>Dry Syrups</p></CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <br />

          </CRow>
          <br />
          <CRow xs={{ cols: 1 }} md={{ cols: 3 }} className="g-4">
            <CCol xs>
              <CCard className="h-30 bg-dark align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/syrup.png" alt="" />
                  <CCardTitle className="h5 text-center  pt-2">Syrup</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-30 bg-danger align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/powder.png" alt="" />
                  <CCardTitle className=" h5 text-center  pt-2">Protein</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-30 bg-dark align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/soap.png" alt="" />
                  <CCardTitle className="h5 text-center  pt-2">Soap</CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <CCol xs>
              <CCard className="h-30 bg-danger align-items-center text-center card19">

                <CCardBody>
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/loation.png" alt="" />
                  <CCardTitle className=" h5 text-center  pt-2"><p>Lotion</p></CCardTitle>
                </CCardBody>

              </CCard>
            </CCol>
            <br />
          </CRow>

        </CContainer>
      </section>

      {/* banner */}
      <section>
        <div>
          <img alt="banner" style={{ width: "100%" }} src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/b6-new.jpg" />
        </div>
      </section>

      {/* two cards*/}
      <section >
        <CContainer className="my-5" >

          <CRow className="text-center" >
            <div className="col-12 col-md-6 pb-3" >
              <div className="card h-70 " style={{ borderRadius: "10px" }}>
                <a href="#">
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/tablet-new-banner.jpg" className="card-img-top " style={{ borderRadius: "10px" }} alt="..." />
                </a>

              </div>

            </div>
            <div className="col-12 col-md-6 ">
              <div className="card h-70 " style={{ borderRadius: "10px" }}>
                <a href="#">
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/product-banner-1.jpg" className="card-img-top " style={{ borderRadius: "10px" }} alt="..." />
                </a>

              </div>

            </div>


          </CRow>
        </CContainer>
      </section>

      {/* our services */}
      <section >
        <CContainer fluid className="my-5  card21" style={{ backgroundColor: "LightGray" }}>
          <CContainer className="py-5">
            <div className="text-center text-light pt-3">
              <h3>Our Services</h3>
            </div>
            <CRow className="pb-5">
              <CCol md={4} className="animated pulse slow infinite ">
                <div className="box">
                  <div className="our-services settings" >
                    <div className="icon   px-5"> <img src="https://i.imgur.com/AgyneKA.png" /> </div>
                    <h4>PCD PHARMA</h4>
                    <p className="text-muted "><b>We Provide Ethical Based Pcd Pharma Franchise In India, Where You Can Be Your OWN BOSS In Your Territory, No Politics, No Work Pressure,</b></p>
                  </div>
                </div>
              </CCol>
              <CCol md={4} className="animated pulse slow infinite ">
                <div className="box">
                  <div className="our-services speedup" >
                    <div className="icon px-5"> <img src="https://i.imgur.com/AgyneKA.png" /> </div>
                    <h4>PHARMA FRANCHISE</h4>
                    <p className="text-muted"><b>We Provide Ethical Based Pcd Pharma Franchise In India, Where You Can Be Your OWN BOSS In Your Territory, No Politics, No Work Pressure,</b> </p>
                  </div>
                </div>
              </CCol>
              <CCol md={4} className="animated pulse slow infinite ">
                <div className="box">
                  <div className="our-services privacy">
                    <div className="icon  px-5"> <img src="https://i.imgur.com/AgyneKA.png" /> </div>
                    <h4>CONTRACT MANUFACTURING</h4>
                    <p className="text-muted"><b>The Company provides fully integrated contract manufacturing and development solutions to our customers, from early.</b></p>
                  </div>
                </div>
              </CCol>
            </CRow>
          </CContainer>
        </CContainer>
      </section>

      {/*information */}
      <section>
        <OurGoals  />
      </section>

      {/*products details */}
      <section >
        <CContainer className="py-5" >

          <CRow className="text-start" >
            <div className="col-12 col-md-6 mb-4 " >
              <h1 className="h3 text-muted lh-base">Products <span className="globaltext1">Detail</span></h1>
              <hr className="text-dark mx-auto mx-md-0" style={{ height: "0px", width: "0px" }} />
              <p>One can only get the benefits of owning a pharma franchise if that person invests in the right pharma franchise company. With the growth of the pharma industry, you will see the many options for the pharma franchise in the market. This sometimes makes it difficult for the investor to choose the right pharma franchise company and as a result, they often go for the wrong one. Here are some points that can help you going for the right pharma franchise company:</p>

              <ul>
                <li>ISO and WHO certifications</li>
                <li>High-quality products matching the required quality standard</li>
                <li>A large product inventory, which will help you to become successful as a franchise</li>
                <li>High degree of commitment to providing quality products for the benefit of common people</li>
              </ul>
              <div className="col-md-4 ">
                <button className="btn btn-primary btn-sm" type="button">Call US</button>
              </div>
            </div>
            <div className="col-12 col-md-6 mb-4 rounded-lg" style={{ backgroundColor: "LightGray" }}>

              <div className="row pt-2">
                <div className="col-xl-9 mx-auto  wow zoomIn" data-wow-duration="1.1s">
                  <div className="cta-inner text-center rounded">

                    <div className="contactForm pt-5">
                      <form>
                        <div className="form-group">
                          <div className="row">
                            <div className="col">
                              <input type="text" className="form-control" placeholder="Your Name" />
                            </div>
                            <div className="col">
                              <input type="email" className="form-control" placeholder="Email" />
                            </div>
                          </div>
                        </div>
                        <div className="form-group">
                          <input type="text" name="mobile" className="form-control" placeholder="Phone Number " required="required" />
                        </div>
                        <div className="form-group">
                          <input type="text" name="mobile" className="form-control" placeholder="City" required="required" />
                        </div>
                        <div className="form-group">
                          <textarea className="form-control" rows="4" cols="50" placeholder="Message"></textarea>
                        </div>
                        <div className="form-group">
                          <div className="col-md-4 mr-5">
                            <button className="btn btn-primary btn-sm" type="button">Submit</button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CRow>
        </CContainer>
      </section>

    </>
  )
}

export default Home;
