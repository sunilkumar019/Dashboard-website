
import React, { useState, useEffect, Component } from 'react'
import OurGoals from './OurGoals'
import Link from "next/link";
import { CCard, CContainer, CRow, CCol, CCardImg } from 'coreui-next';
import { MDBIcon } from 'mdbreact';


export async function getServerSideProps() {
  const res = await fetch(`http://localhost:3002/api/web/customizeAbout/get`)
  const data = await res.json()

  return { props: { data } }
}
 
const About = ({ data }) => {
 
// var text =[];
 
// let values= data.data
     
//  for(v in values){
//   text.push(values[v])
//  };


// console.log(values.map((it)=>it.cardsList))

// data.data.map((item)=>{
 

//   console.log("item card",item)
 
// })
  
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

{
  data.data.map((item,index)=> {
    return(  <div key={index}>
      <div>
        <CCard>

          <CCardImg
            className='relative h-72 '
            alt="Card image cap"
            src="https://thumbs.dreamstime.com/b/modern-microscope-many-test-tubes-analysis-laboratory-banner-design-184405096.jpg"
          />
           {/* <div className="animated fadeInRight slower infinite absolute pt-5 mt-5 w-96   text-white text-center ">
            <h1 style={{ fontWeight: "bold", fontSize: "60px" }}>Services</h1>
          </div> */}

        </CCard>
      </div>
 
 
      {/*cards*/}
      <section className="bg-light pt-5 pb-4">
        <CContainer className="mb-4">
          <CRow>

           <CCol md={12} className="mt-4"  >

                  <h1 className=" h2 text-dark  text-center pb-2"><b><span className="globalColor10">{item.heading}</span></b></h1>

                  <p className="text-dark text-start">
                    {item.text}
                  </p>
                  
                </CCol> 

          </CRow>
        </CContainer>
        <CContainer className="pb-5">
          <CRow>
{
  item.cardsList.map((value,i)=>{
    return(
        <CCol md={3} className="mb-3 ">
              <div className="testimotionals "    >
                <CCard className="card pt-4">
                  <div className="layer">
                  </div>
                  <div className="content"  >
                    <div className="image mb-2">
                      <img align="center" width="250px" src="https://dexonbiotech.com/wp-content/uploads/2022/03/quality-1.jpg" alt="" />
                    </div>
                    <div className="text-md-start px-4">
                      <h4>{value.card_heading}</h4>
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

      {/* cards */}
      <section>
        <OurGoals cmp={item} />
      </section></div> )
  })
}

    </div>
  )
}

export default About;
