import { CSidebar } from "@coreui/react";
import { useState } from "react";
import Link from "next/link";
import { MDBIcon } from "mdbreact";
import { CContainer, CRow, CCol } from "coreui-next";
import { useSelector, useDispatch } from 'react-redux'
import { selectOption } from '../../store/createSlice';
import Home from "./Home";
import About from './About'
import Services from './Services';
import { aboutJson } from "../../data/about/AboutData";

export const getStaticProps = () => {
  return {
    props: {
      manage: aboutJson,
    }
  }
}

const TheSidebar = ({ manage }) => {

  const [visible, setVisible] = useState(false);
  const [render, setRender] = useState([]);
  const count = useSelector((state) => state.changed.payload);
  const dispatch = useDispatch();



  const handlerChange = (event) => {

    const payload = { selectOption: event }
    dispatch(selectOption(payload))

    // console.log(payload)

    if (event == "home") {

      setRender(<Home />)

    }

    else if (event == "about") {
      setRender(<About />)
    }

    else if (event == "services") {
      setRender(<Services />)
    }

  };

  // toggle
  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <>
      <div>

        {/* select option */}
        <CContainer fluid className="ps-5 d-none d-lg-block sidebarColor1">
          <CRow className="gx-0  sidebarColor1 py-1">
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
                    className="py-1 text-white  sidebarColor1  outline-none px-4 border border-gray-300 rounded-md  shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 "
                    onClick={() => setVisible({ visible })}
                    value={count} onChange={(e) => handlerChange(e.target.value)} >
                    <option value="select">Select</option>
                    <option value="home">Home</option>
                    <option value="about">About</option>
                    <option value="services">Services</option>
                  </select>
                </div>

              </div>
            </CCol>
          </CRow>
        </CContainer>
      </div>
      {visible ? (
        <CSidebar
          className={`h-screen fixed top-0 md:left-0 overflow-y-auto flex-row overflow-auto shadow-xl  sidebarColor1 w-80 ...w-screen z-50  animated slideInLeft example20`}
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

            {/* customize components*/}
            <div>
              {render}
            </div>

          </div>

        </CSidebar>
      ) : (
        ""
      )}
    </>
  );
};

export default TheSidebar;
