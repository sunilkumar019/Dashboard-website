
import React, { useState, useEffect, Component } from 'react'
import OurGoals from './OurGoals'
import Link from "next/link";
import { CCard, CContainer, CRow, CCol, CCardImg } from 'coreui-next';
import { MDBIcon } from 'mdbreact';
import { useFetchTasksQuery } from "../../store/actionReducers/aboutSlice";
import { NotificationContainer } from 'react-notifications';

// export async function getServerSideProps() {
//   const res = await fetch(`http://localhost:3002/api/web/customizeAbout/get`)
//   const data = await res.json()

//   return { props: { data } }
// }
const About = () => {
  const { data,isLoading} = useFetchTasksQuery();
 
  return (
    <div>
      <NotificationContainer />
      {/* Sticky Social Bar */}
      <section>
        <div className="icon-Homebar">
          <Link href="/">
            <a className="phone"><MDBIcon icon="phone" /></a>
          </Link>
          <Link href="/">
            <a className="facebook"><MDBIcon fab icon="whatsapp" /></a>
          </Link>
          <Link href="/">
            <a className="email"><MDBIcon icon="envelope" /></a>
          </Link>
        </div>
      </section>

      {
         data&& data.data.map((item, index) => {
          return (<div key={index}>
            <div>
              <CCard>
                <CCardImg
                  className='relative h-72 '
                  alt="Card image cap"
                  src="https://thumbs.dreamstime.com/b/modern-microscope-many-test-tubes-analysis-laboratory-banner-design-184405096.jpg"
                />
  <span className="absolute pt-5 mt-5 text-white w-100 ">
              <h1 className="animated bounce slower infinite text-center  "style={{ fontWeight: "bold", fontSize: "52px" , }} >About Us</h1>
            </span>
              </CCard>
            </div>

            {/*cards*/}
            <section className="bg-light pt-5 pb-4">
              <CContainer className="mb-4">
                <CRow>
                  <CCol md={12} className="mt-4"  >
                    <h2 className="   text-dark  text-center pb-2"><b><span className="globalColor10">{item.heading}</span></b></h2>
                    <p className="text-dark text-start">
                      {item.text}
                    </p>
                  </CCol>
                </CRow>
              </CContainer>
              <CContainer className="pb-5">
                <CRow>
                  {
                    item.cardsList.map((value, i) => {
                      return (
                        <CCol md={3} className="mb-3 " key={i}>
                          <div className="testimotionals "    >
                            <CCard className="card pt-4">
                              <div className="layer">
                              </div>
                              <div className="content"  >
                                <div className="image mb-2">
                                  <img align="center" width="250px" src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-1.jpg" alt="" />
                                </div>
                                <div className="text-md-start px-4">
                                  <h5><b>{value.card_heading}</b></h5>
                                  <p>{value.card_text}</p>
                                </div>
                              </div>
                            </CCard>
                          </div>
                        </CCol>
                      )
                    })
                  }
                  {/* <CCol md={3} className="mb-3 ">
              <div className="testimotionals"   >
                <CCard className="card pt-4">
                  <div className="layer">
                  </div>
                  <div className="content"  >
                    <div className="image mb-2">
                      <img align="center" width="250px" src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-1.jpg" alt="" />
                    </div>
                    <div className="text-md-start px-4">
                      <h4> Quility</h4>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </CCard>
              </div>

            </CCol>
            <CCol md={3} className="mb-3 ">
              <div className="testimotionals"   >
                <CCard className="card pt-4">
                  <div className="layer">
                  </div>
                  <div className="content"  >
                    <div className="image mb-2">
                      <img align="center" width="250px" src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-1.jpg" alt="" />
                    </div>
                    <div className="text-md-start px-4">
                      <h4> Quility</h4>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </CCard>
              </div>

            </CCol>
            <CCol md={3} className="mb-3 ">
              <div className="testimotionals"   >
                <CCard className="card pt-4">
                  <div className="layer">
                  </div>
                  <div className="content"  >
                    <div className="image mb-2">
                      <img align="center" width="250px" src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-1.jpg" alt="" />
                    </div>
                    <div className="text-md-start px-4">
                      <h4> Quility</h4>
                      <p>Lorem ipsum dolor sit amet.</p>
                    </div>
                  </div>
                </CCard>
              </div>

            </CCol> */}
                </CRow>
              </CContainer>

            </section>

        </div>)
        })
      }
           {/* cards */}
           <section>
              <OurGoals />
            </section>

    </div>
  )
}

export default About;
