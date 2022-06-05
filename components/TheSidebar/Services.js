import { MDBIcon } from "mdbreact";
import Link from 'next/link'
import { useDispatch ,useSelector} from "react-redux";
import { addServices } from "../../store/actionReducers/manageData";




const CustomizeServices = () => {
  const dispatch =useDispatch();

  
  const add = useSelector((state)=>state.adding.payload);


const Change=(event)=>{
  
const payload = {event}
const dis=dispatch(addServices(payload))


console.log(add)



}
  
 


  return (
    <div>
     
      <div className="text-center mb-2"><h6 className="text-white">
        <MDBIcon icon="angle-right" className="text-white" />
        &nbsp;
        Services {add}</h6>
      </div>
      <div className="flex flex-col animated  slideInLeft ">
        <ul className="space-y-2">
          <form action="/" method="post">
            <li>
              <label className="block pr-5 font-medium text-white text-center"><MDBIcon far icon="handshake" />&nbsp; Services</label>
              <label
                htmlFor="about"
                className="block text-sm font-medium text-white"
              >
                <MDBIcon far icon="edit" className="text-white" />
                &nbsp; Heading
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                onChange={(e) =>Change(e.target.value)}
                // onChange={(e) => handlerChange(e.target.value)} 
                placeholder="Enter your text here... "
                autoComplete="given-name"
                required
                
                // pattern="[a-z ]"
                // title="text should be alphabets (a to z, A to z)."
                className="px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
              />
              <label
                htmlFor="about"
                className="block text-sm font-medium text-white"
              >
                <MDBIcon far icon="edit" className="text-white" />
                &nbsp; Text
              </label>
              <textarea
                id="about"
                name="about"
                rows={4}
                
                className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block  w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                placeholder="Enter your text here... "
                defaultValue={""}
              />

            </li>
            <hr className="w-64 bg-white my-3" />
            <button
              type="submit"
            
              className="  inline-flex justify-center py-1 px-28 my-3 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </form>
        </ul>
      </div></div>
  )
}
export default CustomizeServices;