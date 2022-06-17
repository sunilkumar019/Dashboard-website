import { MDBIcon } from "mdbreact";
import { aboutJson } from '../../data/about/AboutData';
import Link from 'next/link'
import { useState, useEffect } from "react";
import { useGetPokemonByNameQuery ,useUpdatePostMutation} from "../../store/actionReducers/aboutSlice";
import { useSelector, useDispatch } from 'react-redux';
import { fetchAll,updatePut } from "../../store/actionReducers/aboutSlice";



const CustomizeAbout = ({ manage }) => {

//   const dispatch =useDispatch();
  
//  const dis =dispatch(fetchAll( ))
//    console.log(dis)
  // const [heading, setHeading] = useState('');
  // const [text, setText] = useState("")

 

// const updateData={
//    id:"62a316ce2626554088e01ef9",
//   heading:"hello",
//   text:"hii hhhhhh",
//   image:"imageo overlay"
// }

  // const updateAbout = async () => {

  //   const res = await fetch(`api/update`,{
  //     method:"PUT", headers: {
  //       'Content-Type': 'application/json'
  //     }, body: JSON.stringify({id:"62a318142626554088e01f01",heading:"hey",text:"hello"})
  //   });
  //   const val= await res.json();
    
  //         console.log(val)
  // }

  // useEffect(() => {
  //   updateAbout()
  // }, []);

  return (
    <div>
      <div className="text-center mb-2"><h6 className="text-white">
        <MDBIcon icon="angle-right" className="text-white" />
        &nbsp;
        About</h6>
      </div>
   
      <div className="flex flex-col animated  slideInLeft ">
        <ul className="space-y-2">
          <form action=" " method="post"  >
            <li>
              <label className="block pr-5 font-medium text-white text-center">
                <MDBIcon icon="bars" className="text-white" size="" />{" "}
                &nbsp;Banner/Text
              </label>
              <label className="block text-sm font-medium text-white">
                <MDBIcon far icon="image" className="text-white" size="" />{" "}
                &nbsp;Image
              </label>
              {/* <button className="text-light" onClick={()=>{updatePost(updateData)}}>click</button> */}
             

              <div className="mt-1 flex justify-center px-6 pt-2 pb-6 border-2 border-gray-300 border-dashed rounded-md w-64 ">
                <div className="space-y-1 text-center">
                  <MDBIcon icon="image" className="text-white" size="2x" />

                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-medium text-blue-700 hover:text-blue-900  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                       
                      
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>

              <label
                htmlFor="about"
                className="block text-sm font-medium text-white mt-2"
              >
                <MDBIcon far icon="edit" className="text-white" />
                &nbsp; Text
              </label>
              <input
                type="text"
                name="text1"
                id=" text1"
                
                required

                placeholder="Enter your text here... "
                autoComplete="given-name"
                className="px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
              />

            </li>
            <hr className="w-64 bg-white my-3" />
            <li>
              <label className="block pr-5 font-medium text-white text-center">
                <MDBIcon icon="briefcase" />&nbsp; Business Beliefs
              </label>

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
                required

                placeholder="Enter your text here... "
                autoComplete="given-name"
                className=" px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
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
                required


                rows={4}
                className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block  w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                placeholder="Enter your text here... "
                defaultValue={""}
              />


            </li>
            <hr className="w-64 bg-white my-3" />
            <li>
              <label className="block pr-5 font-medium text-white text-center">
                <MDBIcon
                  far
                  icon="address-card"
                  className="text-white"
                  size=""
                />&nbsp; Business Beliefs Cards
              </label>

              <label className="block text-sm font-medium text-white">
                <MDBIcon
                  far
                  icon="image"
                  className="text-white"
                  size=""
                />{" "}
                &nbsp;Image
              </label>
              <div className="mt-1 flex justify-center px-6 pt-2 pb-6 border-2 border-gray-300 border-dashed rounded-md w-64 ">
                <div className="space-y-1 text-center">
                  <MDBIcon icon="image" className="text-white" size="2x" />

                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-md font-medium text-blue-700 hover:text-blue-900  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                    </label>
                    <p className="pl-1 text-white">or drag and drop</p>
                  </div>
                  <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                </div>
              </div>

              <label
                htmlFor="about"
                className="block text-sm font-medium text-white mt-2"
              >
                <MDBIcon far icon="edit" className="text-white" />
                &nbsp; Heading
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                required

                placeholder="Enter your text here... "
                autoComplete="given-name"
                className=" px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
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
                required

                className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-64 sm:text-sm border border-gray-300 rounded-md text-black"
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
      </div>
    </div>
  );
};
export default CustomizeAbout;
