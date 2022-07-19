import { CCard, CCardText, CCardTitle, CCol, CContainer, CRow, CCardImg  } from "coreui-next";
import Link from "next/link";
import { MDBIcon } from "mdbreact";
 
const Contact = ( ) => {
 
 
  return (
    <div>

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

      <div>
        <CCard>
          <CCardImg
          className='relative h-72 '
            alt="Card image cap"
            src="https://thumbs.dreamstime.com/b/contact-us-banner-suitable-website-header-58969407.jpg"
          
          />
            <span className="absolute pt-5 mt-5 text-white w-100">
              <h1 className="animated bounce slower infinite text-center"  style={{ fontWeight: "bold", fontSize: "52px" , }} >Contact Us</h1>
            </span>
        
        </CCard>
      </div>
      {/*contact us*/}
      <section >
        <div className="container-lg py-8 mt-5">
          <div className="row "></div>
          <CRow className="h-100 pt-3 g-4 ">

            <CCol sm="4">
              <CCard body className="animated pulse slower infinite rounded-lg p-3 p-md-2 p-lg-3 p-xl-5 text-center  text-md-start  pt-md-5" style={{ height: "250px" }}>
                <div> <i className="border border-danger p-3 rounded-circle globaltext1 fas fa-map-marker-alt mx-5"></i></div>
                <CCardTitle className="h4">
                  <strong>Our Location</strong>
                </CCardTitle>
                <CCardText>
                  <Link href="#"><a className="globaltext1">abc</a></Link>
                </CCardText>

              </CCard>
            </CCol>
            <CCol sm="4"  >
              <CCard body className="animated pulse slower infinite rounded-lg p-3 p-md-2 p-lg-3 p-xl-5 text-center text-md-start pt-md-5" style={{ height: "250px" }}>
                <div className=""><i className="border border-danger p-3 rounded-circle  globaltext1  fa fa-phone mx-5"></i></div>
                <CCardTitle className="h4">
                  <strong>Contact Us Anytime</strong>
                </CCardTitle>
                <CCardText>
                 <Link  href=""><a className="globaltext1">+9876543210</a></Link>
                </CCardText>

              </CCard>
            </CCol>
            <CCol sm="4"  >
              <CCard className="animated pulse slower infinite rounded-lg  p-3 p-md-2 p-lg-3 p-xl-5 text-center text-md-start  pt-md-5" style={{ height: "250px" }}>
                <div className="">  <i className="border border-danger p-3 rounded-circle   globaltext1  fa fa-envelope mx-5"></i></div>
                <CCardTitle className="h4">
                  <strong>Write Some Words</strong>
                </CCardTitle>
                <CCardText>
                 <Link href=""><a className="globaltext1" >amlrgg@gmail.com</a></Link>
                </CCardText>

              </CCard>
            </CCol>

          </CRow>
        </div>
      </section>


      {/* map & email */}
      <section >



        <CContainer fluid className="my-3">
          <CRow className="text-center" >

            <div className="col-12 col-md-6" >
              <h1 className=" h2 text-dark text-center pt-3 "><b>Get In <span className="globaltext1">Touch</span> </b></h1>
            </div>
            <div className="col-12 col-md-6" >
              <h1 className=" h2 text-dark  text-md-center text-center pt-3 "><b><span className="globalColor10">Send Us <span className="globaltext1">A Message</span>
              </span></b></h1>
            </div>
          </CRow>
          <CContainer>


            <CRow className="text-center" >

              <div className="col-12 col-md-6 mb-4" >

                <div className="map-responsive ">
                  <iframe frameBorder="0" src="https://maps.google.com/maps?width=100%25&amp;height=420&amp;hl=en&amp;q=+(Arlak%20Biotech%20Pvt%20Ltd)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed" style={{ height: "420px", width: "335px" }} allowFullScreen></iframe>
                </div>
              </div>

              <div className="col-12 col-md-6 mb-4 rounded-lg" style={{ backgroundColor: "LightGray", height: "420px", width: "500px" }}>

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
                              <button className="btn btn-primary btn-sm" type="button">Submit</button>                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>

              </div>


            </CRow>
          </CContainer>
        </CContainer>
      </section>


    </div>
  )
}

export default Contact
