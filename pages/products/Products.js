
import { MDBIcon } from "mdbreact";
import { CCard, CCardBody } from '@coreui/react'
import { CContainer, CRow } from 'coreui-next';
import Link from "next/link";




const Products = () => {



  return (
    <div>
      {/* Sticky Social Bar */}
      <section>
        <div className="icon-Homebar">
          
          <Link href="#">
          <a className="phone"><i className="fa fa-phone "></i></a>
          </Link>
          <Link href="#">
          <a className="facebook"><i className="fab fa-facebook-f fa-md fa-fw"></i></a>
          </Link>
         <Link href="#">
         <a className="email"><i className="fa fa-envelope "></i></a>
         </Link>
        </div>
      </section>

      
      <section >
        <CContainer fluid className="py-3 hero-header bg-gradient-to-r from-rose-500 to-rose-900 ">
          <CRow>
            <div className="col-12 text-center">
              <h1 className="h2 text-white animated zoomIn">Our Products</h1>
              <Link href="/">
                <a className="h6 text-white">Home</a>
              </Link>
              &nbsp; &nbsp;
              <MDBIcon icon="angle-right" className="text-white" />
              &nbsp; &nbsp;
              <Link href="/products/Products">
                <a className="h6 text-white">Our Products</a>
              </Link>
            </div>
          </CRow>
        </CContainer>
        <CContainer fluid>
          <CRow className="text-center mt-5 mx-5">
            {/* {
              props.pro.map((item) => {
                return (
                  <> */}
            <div className="col-12 col-md-3 mb-5 ">
              <CCard className="shadow card19" >
                <a >
                  <img src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/Cefdex-200-300x300.jpg" className="card-img-top" style={{ height: "250px", width: "100%" }} alt="medicine" />
                </a>
              </CCard>
              <CCardBody className=" py-2 globalColor1 mt-3" >

                <a className="h5 text-decoration-none overflow-hidden text-light"><b>lyme</b></a>
              </CCardBody>
            </div>

            {/* </>
                )
              })
            } */}
          </CRow>
        </CContainer>
      </section >
    </div >
  )
}

export default Products
