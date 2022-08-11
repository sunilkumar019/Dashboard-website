
import React, { useState, useEffect, Component } from 'react'
import OurGoals from './OurGoals'
import Image from 'next/image'
import Link from "next/link";
import { CCard, CContainer, CRow, CCol, CCardImg } from 'coreui-next';
import { MDBIcon } from 'mdbreact';
import { useFetchTasksQuery } from "../../store/actionReducers/aboutSlice";
import { NotificationContainer } from 'react-notifications';

export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3002/api/web/customizeabout/get`)
  const data = await res.json()

  return { props: { data } }
}
const About = ({ data }) => {
  var path = "http://localhost:3002/"

  //const { data,isLoading} = useFetchTasksQuery();
  const [image, setImage] = useState(null);

  // useEffect(()=>{
  //   const {bannerImage,cardsList,}=data.data[0]
  //   setImage(value)
  // },[])


  return (
    <div>
      <NotificationContainer />
      {/* Sticky Social Bar */}
      <section>
        <div className="icon-Homebar">
          <Link href="#">
            <a className="phone"><MDBIcon icon="phone" /></a>
          </Link>
          <Link href="#">
            <a className="facebook"><MDBIcon fab icon="whatsapp" /></a>
          </Link>
          <Link href="#">
            <a className="email"><MDBIcon icon="envelope" /></a>
          </Link>
        </div>
      </section>

      {
        data && data.data.map((item, index) => {

          return (<div key={index}>
            <div>
              <CCard>
                <Image
                  className='relative  '
                  alt="About banner"
                  src={`${path}${item.bannerImage}`} height={260} width={1350} />
                              <span className="absolute pt-5 mt-5 text-white w-100">
                <h1 className="animated bounce slower infinite text-center "  style={{ fontWeight: "bold", fontSize: "52px" , }} >{item.bannerText}</h1>
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
                                  <Image  align="center" width={220} height={160} src={`${path}${value.imageUrl}`} alt="Card images" />
                                </div>
                                <div className="text-md-start px-4 ">
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
