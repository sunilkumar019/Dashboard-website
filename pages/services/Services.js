import {
  CCard,
  CCardImg,
  CCol,
  CContainer,
  CRow,
} from "coreui-next";
import Link from "next/link";
import { MDBIcon } from "mdbreact";
import { NotificationContainer } from 'react-notifications';
import { useFetchTasksQuery } from "../../store/actionReducers/servicesSlice";

// export async function getServerSideProps() {
//   // Fetch data from external API

//   // Pass data to the page via props
//   return { props: { data } }
// }




const Services = () => {
  
  const { data,isFetching } = useFetchTasksQuery();
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
      <div>
        {isFetching ? (
          <>Please wait while data is loading...</>
        ) : data.data.map((item, i) => {
          return (<div key={i}>
            <section >
              <CContainer className="my-5">
                <CRow>

                  <CCol md={12}  >
                    <h1 className=" h3 text-dark  text-start pb-2">
                      <b >
                        {item.heading}
                      </b>
                    </h1>

                    <p className="text-dark text-start"   >
                      {item.text}
                    </p>
                  </CCol>

                </CRow>
              </CContainer>
            </section>
          </div>)
        })
        }
      </div>
    </div>
  );
};

export default Services;
