import Link from "next/link";
import { MDBIcon } from "mdbreact";

 const Home = () => {
  return (
    <div>
         <div className="flex flex-col animated  zoomIn ">
              <ul className="space-y-2">
                <li>
                  <div>
                  <label className="block pr-5 font-medium text-white text-center">Carousel</label>
                    <label className="block text-sm font-medium text-white">
                      <MDBIcon icon="sliders-h" className="text-white" size="" />{" "}
                      &nbsp;Banner uplaod
                    </label>
                    <div className="mt-1 flex justify-center px-6 pt-2 pb-6 border-2 border-gray-300 border-dashed rounded-md w-64 ">
                      <div className="space-y-1 text-center">
                        <MDBIcon
                          icon="image"
                          className="text-white"
                          size="2x"
                        />
                        <div className="flex text-sm text-gray-600">
                          <label
                            htmlFor="file-upload"
                            className="relative cursor-pointer rounded-md font-medium text-blue-700 hover:text-blue-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500"
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
                        <p className="text-xs text-white">
                          PNG, JPG, GIF up to 10MB
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mr-2 py-2  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-1 px-3  shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </li>
                <hr className="w-64 bg-white my-3" />
                <li>
                <label className="block pr-5 font-medium text-white text-center">Information cards</label>
                  <label className="block text-sm font-medium text-white">
                    <MDBIcon
                      far
                      icon="address-card"
                      className="text-white"
                      size=""
                    />{" "}
                    &nbsp;Cards
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-2 pb-6 border-2 border-gray-300 border-dashed rounded-md w-64 ">
                    <div className="space-y-1 text-center">
                      <MDBIcon icon="image" className="text-white" size="2x" />

                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-blue-700 hover:text-blue-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
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
                      <p className="text-xs text-white">
                        PNG, JPG, GIF up to 10MB
                      </p>
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
                    name="first-name"
                    id="first-name"
                    placeholder="Owning Pharma Franchise"
                    autoComplete="given-name"
                    className="my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                  />
                  <div className="mr-2 py-2  text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center py-1 px-3  shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </div>
                </li>
                <hr className="w-64 bg-white my-3" />
                <li>
                <label className="block pr-5 font-medium text-white text-center">Our Services</label>
                  <form action="/send-data-here" method="post">
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
                      placeholder="Owning Pharma Franchise"
                      autoComplete="given-name"
                      className="my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
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
                      className=" shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-full w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                      placeholder="PHARMA BIOTECH PVT.LTD."
                      defaultValue={""}
                    />
                    <button
                      type="submit"
                      className="ml-48 inline-flex justify-center py-1 px-3 my-2 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </form>
                </li>
                <hr className="w-64 bg-white my-3" />
                <li>
                <label className="block pr-5 font-medium text-white text-center">Our goals</label>
                  <form action="/send-data-here" method="post">
                  <label className="block text-sm font-medium text-white">
                    <MDBIcon
                      far
                      icon="address-card"
                      className="text-white"
                      size=""
                    />{" "}
                    &nbsp;Cards
                  </label>
                  <div className="mt-1 flex justify-center px-6 pt-2 pb-6 border-2 border-gray-300 border-dashed rounded-md w-64 ">
                    <div className="space-y-1 text-center">
                      <MDBIcon icon="image" className="text-white" size="2x" />

                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md font-medium text-blue-700 hover:text-blue-900 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
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
                      <p className="text-xs text-white">
                        PNG, JPG, GIF up to 10MB
                      </p>
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
                      placeholder="Owning Pharma Franchise"
                      autoComplete="given-name"
                      className="my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
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
                      className=" shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-full w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                      placeholder="PHARMA BIOTECH PVT.LTD."
                      defaultValue={""}
                    />
                    <button
                      type="submit"
                      className="ml-48 inline-flex justify-center py-1 px-3 my-2 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      Save
                    </button>
                  </form>
                </li>
                <hr className="w-64 bg-white my-3" />
            
                <li>
                  <label className="block pr-5 font-medium text-white text-center">Product details</label>
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
                    placeholder=" Make Money in the Pharma"
                    autoComplete="given-name"
                    className="my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                  />
                </li>

                <li>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-white"
                  >
                    <MDBIcon far icon="edit" className="text-white" />
                    &nbsp; Text
                  </label>
                  <div className="">
                    <textarea
                      id="about"
                      name="about"
                      rows={4}
                      className=" shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-full w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                      placeholder="PHARMA BIOTECH PVT.LTD."
                      defaultValue={""}
                    />

                    <div className="mr-2 py-2 text-right sm:px-6">
                      <button
                        type="submit"
                        className="inline-flex justify-center py-1 px-3 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </li>
                {/* <hr className="w-64 bg-white my-3" />
                <li>
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
                    placeholder=" Make Money in the Pharma"
                    autoComplete="given-name"
                    className="my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                  />
                </li>
                <li>
                  <label
                    htmlFor="about"
                    className="block text-sm font-medium text-white"
                  >
                    <MDBIcon far icon="edit" className="text-white" />
                    &nbsp; Text
                  </label>
                  <div className="">
                    <textarea
                      id="about"
                      name="about"
                      rows={3}
                      className=" shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-full w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                      placeholder="PHARMA BIOTECH PVT.LTD."
                      defaultValue={""}
                    />
                  </div>
                </li>
                <hr className="w-64 bg-white my-4" /> */}

                {/* <li>
                  <Link href="/services/Services">
                    <a className="flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:bg-black dark:hover:bg-gray-700">
                      <span className="ml-0">
                        {" "}
                        <div>
                          <label
                            htmlFor="about"
                            className="block text-sm font-medium text-white"
                          >
                            <MDBIcon far icon="edit" className="text-white" />
                            &nbsp; Our Services
                          </label>
                          <div className="">
                            <textarea
                              id="about"
                              name="about"
                              rows={3}
                              className="shadow-sm focus:ring-indigo-500 w-64 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md text-black"
                              placeholder="Pcd."
                              defaultValue={""}
                            />
                          </div>
                        </div>
                      </span>
                    </a>
                  </Link>
                </li> */}
                {/* <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"></path>
                      <path d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Inbox</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">Users</span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Products
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign In
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex items-center p-2 text-white font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5 4a3 3 0 00-3 3v6a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H5zm-1 9v-1h5v2H5a1 1 0 01-1-1zm7 1h4a1 1 0 001-1v-1h-5v2zm0-4h5V8h-5v2zM9 8H4v2h5V8z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Sign Up
                    </span>
                  </a>
                </li> */}
              </ul>
            </div>
    </div>
  )
}
export default Home;