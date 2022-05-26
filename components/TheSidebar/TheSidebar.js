import { CSidebar, CCloseButton } from "@coreui/react";
import { useState } from "react";
import Link from "next/link";
import { MDBIcon } from "mdbreact";
import { CContainer, CRow,CCol } from "coreui-next";


const TheSidebar = () => {
  const [visible, setVisible] = useState(false);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div>
        <CContainer fluid className="ps-5 d-none d-lg-block bg-black py-2 ">
          <CRow className="gx-0 bg-black">
            <CCol md={12} className="text-start text-lg-start  ">
              <div className="position-relative d-inline-flex align-items-start ">
                <div style={{ marginLeft: "283px" }}>
                  <button onClick={toggle}>
                    {" "}
                    <MDBIcon icon="bars" className="text-white" />
                  </button>
                  &nbsp; &nbsp;
                  <select
                    type="select"
                    className="py-1 text-white bg-black outline-none px-4 border border-gray-300 rounded-md  shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 "
                    onClick={() => setVisible({ visible })}
                  >
                    <option defaultValue="select" className="">
                      Select
                    </option>
                    <option value="home">Home</option>
                    <option value="about">About</option>
                    <option value="services">Services</option>
                    <option value="products">Our Products</option>
                    <option value="contact">Contact</option>
                  </select>
                </div>
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      {visible ? (
        <CSidebar
          className={`h-screen fixed top-0 md:left-0 overflow-y-auto flex-row overflow-auto shadow-xl bg-black w-80 ...w-screen z-50  animated slideInLeft example20`}
        >
          <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative mt-3 animated  slideInLeft ">
            <button onClick={() => setVisible(!visible)}>
              <MDBIcon
                icon="times"
                className="text-white pl-5 pt-4"
                size="1x"
              />
            </button>

            <Link href="/">
              <a target="_blank" className=" text-center w-full inline-block">
                <small className="text-white">You are customizing </small>{" "}
                <br />
                <h5 className="text-white ">Pharma</h5>{" "}
              </a>
            </Link>
            <hr className="min-w-full bg-white " />

          </div>
        </CSidebar>
      ) : (
        ""
      )}
    </>
  );
};

export default TheSidebar;
