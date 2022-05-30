
import React from 'react'
import OurGoals from './OurGoals'
import Link from "next/link";
import { CCard, CContainer, CRow,CCol, CCardImgOverlay, CCardText, CCardImg } from 'coreui-next';


const About = () => {
  return (
    <div>
      {/* Sticky Social Bar */}
      <section>
        <div className="icon-Homebar">

          <Link href="/">
            <a className="phone"><i className="fa fa-phone "></i></a>
          </Link>
          <Link href="/">
            <a className="facebook"><i className="fab fa-facebook-f fa-md fa-fw"></i></a>
          </Link>
          <Link href="/">
            <a className="email"><i className="fa fa-envelope "></i></a>
          </Link>
        </div>
      </section>

      <div>
        <CCard>
          <CCardImg
          className='relative h-72 '
            alt="Card image cap"
            src="https://thumbs.dreamstime.com/b/modern-microscope-many-test-tubes-analysis-laboratory-banner-design-184405096.jpg"
          
          />
            <div className="animated fadeInRight slower infinite absolute pt-5 mt-5 text-white ">
              <h1  style={{ fontWeight: "bold", fontSize: "52px" }}>About Us</h1>
            </div>
        
        </CCard>
      </div>

      {/*cards*/}
      <section className="bg-light pt-5 pb-4">
        <CContainer className="mb-4">
          <CRow>
            <CCol md={12} className="mt-4">
              <h1 className=" h2 text-dark  text-center pb-2"><b>Business <span className="globalColor10">Beliefs</span></b></h1>

              <p className="text-dark text-start">
                Dexon Biotech Pvt.Ltd is a responsible Pharma PCD company dedicated to serve the nation and its people. We have huge contribution in the field of health and pharmaceutical are:
              </p>
            </CCol>
          </CRow>
        </CContainer>
        <CContainer className="pb-5">
          <CRow>
            <CCol md={3} className="mb-3 ">
              <div className="testimotionals">
                <CCard className="card pt-4">
                  <div className="layer">
                  </div>
                  <div className="content">
                    <div className="image mb-2">
                      <img align="center" width="250px" src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-1.jpg" alt="" />
                    </div>
                    <div className="text-md-start px-4">
                      <h4>Quality</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit,</p>
                    </div>
                  </div>
                </CCard>
              </div>

            </CCol>
            <CCol md={3} className="mb-3 ">
              <div className="testimotionals">
                <CCard className="card pt-4">
                  <div className="layer">
                  </div>
                  <div className="content">
                    <div className="image mb-2">
                      <img align="center" width="250px" src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-2.jpg" alt="" />
                    </div>
                    <div className="text-md-start px-4">
                      <h4>Ethics</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit,</p>
                    </div>

                  </div>
                </CCard>
              </div>

            </CCol>
            <CCol md={3} className="mb-3 ">
              <div className="testimotionals">
                <CCard className="card pt-4">
                  <div className="layer">
                  </div>
                  <div className="content">
                    <div className="image mb-2">
                      <img align="center" width="250px" src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-3.jpg" alt="" />
                    </div>
                    <div className="text-md-start px-4">
                      <h4>Customer Focus</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit,</p>
                    </div>

                  </div>
                </CCard>
              </div>

            </CCol>
            <CCol md={3} className="mb-3 ">
              <div className="testimotionals">
                <CCard className="card pt-4">
                  <div className="layer">
                  </div>
                  <div className="content">
                    <div className="image mb-2">
                      <img align="center" width="250px" src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-4.jpg" alt="" />
                    </div>
                    <div className="text-md-start px-4">
                      <h4>Respect for People</h4>
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit,</p>
                    </div>
                  </div>
                </CCard>
              </div>

            </CCol>
          </CRow>
        </CContainer>

      </section>

      {/* cards */}
      <section>
        <OurGoals />
      </section>

    </div>
  )
}

export default About;
