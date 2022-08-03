
import {  CContainer,CCol, CRow } from "coreui-next";
import { useFetchTasksQuery} from "../../store/actionReducers/aboutSlice";
import {NotificationContainer} from 'react-notifications';

const OurGoals = (  ) => {
  const { data ,isFetching} = useFetchTasksQuery();
 
  return (
    <div>
       <NotificationContainer/>
      {/*information */}
     {
    data&&data.data[0].goalsList.map((item,index)=>{  
        return( <section className="py-6 py-lg-8" id="about" key={index}>
        <div className="bg-holder dotbg2"></div>

        <CContainer>
          <CRow className="g-xl-0 align-items-center d-flex  "style={{flexDirection:item.float}}>
            
            <CCol md={9} className="text-start text-md-start">
              <h1 className="h3 globaltext1 lh-base"><b>{item.goals_heading}</b></h1>
              <hr className="text-dark mx-auto mx-md-0" style={{ height: "0px", width: "0px" }} />
              <p>{item.goals_text}</p>

            </CCol> 
            <CCol md={3}>
              <div className="card h-50 w-100  card19  p-3 p-md-2 p-lg-3 p-xl-0" style={{ borderRadius: "10px" }} >
                <div className="card-body text-center text-md-center mx-auto " >
                  <div className="py-3 text-dark" ><img className="img-fluid" src="yurthy" width="80" alt="Card images"/></div>
                </div>
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </section>)
      })
     }
      {/* <section className="py-6 py-lg-8">
        <CContainer>
          <CRow className="g-xl-0 align-items-center">
            <CCol md={3} className="order-md-1 text-md-end">

              <div className="card h-50 w-100   card19  p-3 p-md-2 p-lg-3 p-xl-0" style={{ borderRadius: "10px" }} >
                <div className="card-body text-center text-md-center mx-auto" >
                  <div className="py-3" ><img className="img-fluid" src="https://www.dexonbiotech.com/wp-content/uploads/2022/03/product.png" width="80" alt="" /></div>
                </div>
              </div>

            </CCol>
            <CCol md={9} className="text-start text-md-start order-md-0">
              <h1 className="h3 globaltext1 pt-2 lh-base"><b>Products Detail</b></h1>
              <hr className="text-dark mx-auto mx-md-0" style={{ height: "0px", width: "0px" }} />
              <p>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>

            </CCol>
          </CRow>
        </CContainer>
      </section> */}
    </div>
  )
}

export default OurGoals;
