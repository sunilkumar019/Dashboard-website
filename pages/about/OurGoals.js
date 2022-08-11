
import {  CContainer,CCol, CRow } from "coreui-next";
import { useFetchTasksQuery} from "../../store/actionReducers/aboutSlice";
import {NotificationContainer} from 'react-notifications';
import Image from 'next/image';


const OurGoals = (  ) => {
  const { data ,isFetching} = useFetchTasksQuery();
  var path = "http://localhost:3002/"

  return (
    <div>
       <NotificationContainer/>
      {/*information */}
     {
    data&&data.data[0].goalsList.map((item,index)=>{  
        return( <section className="py-6 py-lg-8" id="about" key={index}>
        <div className="bg-holder dotbg2"></div>

        <CContainer>
          <CRow className="g-xl-0 align-items-center d-flex" style={{flexDirection:item.float}}>
            
            <CCol md={9} className="text-start text-md-start">
              <h1 className="h3 globaltext1 lh-base"><b>{item.goals_heading}</b></h1>
              <hr className="text-dark mx-auto mx-md-0" style={{ height: "0px", width: "0px" }} />
              <p>{item.goals_text}</p>

            </CCol> 
            <CCol md={3}>
              <div className="card h-50 w-100  card19 flex justify-center  p-3 p-md-2 p-lg-3 p-xl-0" style={{ borderRadius: "10px" ,boxShadow:"1px 1px 5px 1px #888888"}} >
                <div className="card-body text-center text-md-center mx-auto  " >
                  <span className="py-3 text-dark" ><Image align="center" className="bg-white" src={`${path}${item.imageUrl2}`} width={80} height={80}  alt="Card images"/></span>
                </div>
              </div>
            </CCol>
          </CRow>
        </CContainer>
      </section>)
      })
     }
    </div>
  )
}

export default OurGoals;
