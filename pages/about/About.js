
import React, { useState, useEffect, Component } from 'react'
import OurGoals from './OurGoals'
import Link from "next/link";
import { CCard, CContainer, CRow, CCol, CCardImg } from 'coreui-next';
import { MDBIcon } from 'mdbreact';

import { useGetPokemonByNameQuery, useUpdatePostMutation } from "../../store/actionReducers/aboutSlice";
import { data } from 'autoprefixer';



// export const getStaticProps = () => {
//   return {
//     props: {
//       manage: aboutJson,

//     }
//   }
// }

const About = () => {


  const {  currentData } = useGetPokemonByNameQuery()
  var a =currentData
  var b = null;
  var c = undefined;


  var state = a &&b && c  


  console.log(a)


  //   useEffect(() => {
  //     const fetching=async()=>{
  //     const res = await fetch("/api/about")
  //     const result = await res.json()
  //     setData(result)s
  //     console.log(result)
  //     }
  //     fetching();
  //   },[]);
  // console.log(res)

  return (
    <div>
    

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


      <div>
        <CCard>
       
          <CCardImg
            className='relative h-72 '
            alt="Card image cap"
            src="https://thumbs.dreamstime.com/b/modern-microscope-many-test-tubes-analysis-laboratory-banner-design-184405096.jpg"
          />
          {/* <div className="animated fadeInRight slower infinite absolute pt-5 mt-5 pr-72 text-white " >
            <h1 style={{ fontWeight: "bold", fontSize: "52px" }}>About Us</h1>
          </div> */}

        </CCard>
      </div>

      {/*cards*/}
      <section className="bg-light pt-5 pb-4">
        <CContainer className="mb-4">
          <CRow>

            <CCol md={12} className="mt-4">

              <h1 className=" h2 text-dark  text-center pb-2"><b><span className="globalColor10"></span></b></h1>

              <p className="text-dark text-start">

              </p>
            </CCol>

          </CRow>
        </CContainer>
        <CContainer className="pb-5">
          <CRow>

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
