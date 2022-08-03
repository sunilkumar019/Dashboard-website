import { CSidebar, CPopover, CButton, CBadge } from "@coreui/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import { MDBIcon } from "mdbreact";
import { CContainer, CRow, CCol, } from "coreui-next";
import { useSelector, useDispatch } from 'react-redux'
import { selectOption } from '../../store/actionReducers/selectSlice';
import Home from "./Home";
import About from './About'
import Services from './Services';
import { useRouter } from "next/router";

const TheSidebar = () => {

  const [visible, setVisible] = useState(false);
  const [render, setRender] = useState(<Home />);
  const dispatch = useDispatch();
  const router = useRouter();



  const count = useSelector((state) => state.changed.payload);
  const handlerChange = (event) => {


    const payload = { selectOption: event }
    dispatch(selectOption(payload))

    // console.log(payload)

    if (event == "home") {

      setRender(<Home />)

      router.push('/')
    }

    else if (event == "about") {

      setRender(<About />)

      router.push('/about/About')
    }

    else if (event == "services") {

      setRender(<Services />)

      router.push('/services/Services')
    }

  };
  const openNav = () => {
    document.getElementById("mySideBar").classList.add("myHideShow");
  }
  const closeNav = () => {
    document.getElementById("mySideBar").classList.remove("myHideShow");
  }



  return (
    <>
      {/* select option */}

      <CContainer fluid className="ps-5 d-none d-lg-block sidebarColor1">
        <CRow className="gx-0  sidebarColor1 py-1">
          <CCol md={12} className="text-start text-lg-start  ">
            <div className="position-relative d-inline-flex align-items-start ">
              <span >
                <button onClick={() => { setVisible({ visible }); openNav() }}>
                  <MDBIcon icon="bars" className="text-white mr-1" />
                </button>
                <select
                  type="select"
                  className="py-1 text-white  sidebarColor1  outline-none px-4 border border-gray-300 rounded-md  shadow-sm cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 "

                  value={count} onChange={(e) => handlerChange(e.target.value)} >
                  <option value="select">Select</option>
                  <option value="home">Home</option>
                  <option value="about">About</option>
                  <option value="services">Services</option>
                </select>
              </span>

            </div>
          </CCol>
        </CRow>
      </CContainer>

      {visible ? (
        <CSidebar
          className={`h-screen fixed top-0 md:left-0 overflow-y-auto flex-row overflow-auto shadow-xl  sidebarColor1 w-80 ...w-screen z-50    example20 `} >
          <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative  animated mt-4  slideInLeft  ">
            <button onClick={() => { setVisible(!visible); closeNav() }}>
              <MDBIcon
                icon="times"
                className="text-white pl-4 pt-4"
                size="1x"
              />
            </button>

            <button
              type="submit"
              className="inline-flex justify-center py-1 px-2 shadow-sm text-sm font-normal rounded text-white bg-green-600 hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 text-right ml-48"
            >
              Published
            </button>


            <Link href="#">
              <a target="_blank" className=" text-center w-full inline-block">
                <small className="text-white">You are customizing </small>{" "}
                <br />
                <h5 className="text-white ">Pharma</h5>{" "}
              </a>
            </Link>
            <span className="ml-72" ><CPopover

              content="Pharma industry we came to analyze that the market area of this industry is very vast. But due to mismanagement, lack of enough resources, or less online awareness of pharmaceutical firms cause damage in terms of sales as well as other branding things. Here is the list of problems which are analyzed by us"
              placement="right" >
              <CBadge className="border border-light" color="muted" shape="rounded-circle">
                <MDBIcon icon="info" />
              </CBadge>
            </CPopover></span>

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
