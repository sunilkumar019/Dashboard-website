
import { CCol, CContainer, CRow } from "coreui-next";
import Link from "next/link";

const TheHeader = () => {
  return (
    <div className="sticky top-0 z-20 left-0 right-0 " >
      {/* // <!-- Topbar Start --> */}

      <CContainer fluid className="d-none d-lg-block globalColor1 ">
        <CRow className="gx-0 bg-gradient-to-r from-rose-500 to-rose-900">
          <CCol md={8} className=" text-end text-lg-end mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-end">
              <small className="py-3 ">
                <marquee
                  direction="left"
                  style={{ width: "800px", color: "white" }}
                  behavior="scroll"
                >
                  <b>
                    Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday
                    Closed{" "}
                  </b>
                </marquee>{" "}
              </small>
            </div>
          </CCol>
          <CCol md={4} className=" text-start text-lg-start ">
            <div className="position-relative d-inline-flex align-items-start text-white">
              <div className="mt-3">
                <p>
                  <i className="fa fa-phone "></i> &nbsp;+012 345 6789
                </p>
              </div>
              &nbsp; &nbsp;
              <div className="mt-3 ">
                <p>
                  {" "}
                  <i className="fa fa-envelope "></i> &nbsp;info@example.com
                </p>
              </div>
            </div>
          </CCol>
        </CRow>
      </CContainer>

      {/*  <!-- Navbar Start --> */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <Link href="/">
          <a className="navbar-brand p-0">
            <h1 className=" text-danger ">
              <i className="fa fa-hospital"></i>Pharma
            </h1>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse mx-5" id="navbarCollapse">
          <div className="navbar-nav ms-auto ">
            <Link href="/">
              <a className="nav-item border-end nav-link  px-4">Home</a>
            </Link>
            <Link href="/about/About">
              <a className="nav-item border-end  nav-link px-4">About</a>
            </Link>
            <Link href="/services/Services">
              <a className="nav-item  border-end  nav-link px-4">Service</a>
            </Link>
            <div className="nav-item px-3  border-end dropdown">
              <Link href="/products/Products">
                <a
                  className="nav-link dropdown-toggle active"
                  data-bs-toggle="dropdown"
                >
                  Our Product
                </a>
              </Link>
              <div className="dropdown-menu m-0">
                <Link href="/">
                  <a className="dropdown-item">Pricing Plan</a>
                </Link>
                <Link href="/">
                  <a className="dropdown-item">Our Dentist</a>
                </Link>
                <Link href="/">
                  <a className="dropdown-item">Testimonial</a>
                </Link>
                <Link href="/">
                  <a className="dropdown-item active">Appointment</a>
                </Link>
              </div>
            </div>
            <Link href="/contact/Contact">
              <a className="nav-item nav-link px-4">Contact</a>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default TheHeader;
