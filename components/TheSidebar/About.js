import { MDBIcon } from "mdbreact";
import { useState } from "react";
import { useFetchTasksQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } from "../../store/actionReducers/aboutSlice";
import { useMemo } from "react";


const CustomizeAbout = () => {

  const [heading, setHeading] = useState("");
  const [text, setText] = useState("");
  const { data  } = useFetchTasksQuery();
  //const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [createTask] = useCreateTaskMutation();

  const handleCreateTask = async (event) => {
    event.preventDefault();
    await createTask({
      heading: heading,
      text: text
    }).unwrap();
    setHeading("");
    setText("")
  };
  console.log(data)

  return (
    <div>
      <div className="text-center mb-2"><h6 className="text-white">
        <MDBIcon icon="angle-right" className="text-white" />
        &nbsp;
        About</h6>
      </div>

      <div className="flex flex-col animated  slideInLeft ">
        {/* {hasTasks && ( */}
        <ul className="space-y-2">
          <form >
            <li >

              <label
                htmlFor="about"
                className="block text-sm font-medium text-white">

                <MDBIcon far icon="edit" className="text-white" />
                &nbsp; Heading
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"

                value={heading}
                onChange={({ target }) => setHeading(target.value)}
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
                value={text}
                onChange={({ target }) => setText(target.value)}

                rows={4}
                className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block  w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                placeholder="Enter your text here... "

              />
              <button
                type="submit"
                className="  inline-flex justify-center py-1 px-28 my-3 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                onClick={handleCreateTask}>
                add
              </button>


            </li>
            <li>
              <label className="block pr-5 font-medium text-white text-center">
                <MDBIcon icon="bars" className="text-white" size="" />{" "}
                &nbsp;Banner/Text
              </label>
              <label className="block text-sm font-medium text-white">
                <MDBIcon far icon="image" className="text-white" size="" />{" "}
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
                      // <input
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
                placeholder="Enter your text here... "
                autoComplete="given-name"
                className="px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
              />

            </li>
            <hr className="w-64 bg-white my-3" />


            <li >
              <label className="block pr-5 font-medium text-white text-center">
                <MDBIcon icon="briefcase" />&nbsp; Business Beliefs
              </label>
              {data && data.data.map((task) => (
                <>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-white">

                    <MDBIcon far icon="edit" className="text-white" />
                    &nbsp; Heading
                  </label>
                  <input
                    type="text"
                    name="first-name"
                    id={task._id}
                    required
                    defaultValue={task.heading}
                  //  onChange={({ target }) => setHeading(target.value)}
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
                    id={task._id}
                    name="about"
                    defaultValue={task.text}
                    //onChange={({ target }) => setText(target.value)}

                    rows={4}
                    className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block  w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                    placeholder="Enter your text here... "

                  />
                  <button
                    type="button"
                    className="  inline-flex justify-center py-1 px-28 my-3 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    onClick={() => deleteTask(task._id)}  >
                    Delete
                  </button>
                </>
              ))}

            </li>


            <hr className="w-64 bg-white my-3" />
            {/* <li>
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
              

                className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                placeholder="Enter your text here... "
                defaultValue={""}
              />
            </li> */}
            {/* <hr className="w-64 bg-white my-3" /> */}
            {/* <button
              type="submit"
              className="  inline-flex justify-center py-1 px-28 my-3 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
               >
              Save
            </button> */}
          </form>
        </ul>
        {/* )} */}
      </div>
    </div>
  );
};
export default CustomizeAbout;
