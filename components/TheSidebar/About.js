import { MDBIcon } from "mdbreact";


const CustomizeAbout = () => {
  return (
    <div>
      {" "}
      <div className="flex flex-col animated  slideInLeft ">
        <ul className="space-y-2">
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
              name="first-name"
              id="first-name"
              placeholder="Owning Pharma Franchise"
              autoComplete="given-name"
              className="my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
            />
            <div className="mr-2 py-2 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-1 px-3  shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </li>
          <hr className="w-64 bg-white my-3" />
          <li>
            <label className="block pr-5 font-medium text-white text-center">
            <MDBIcon icon="briefcase" />&nbsp; Business Beliefs
            </label>
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
                className="my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
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
                className=" shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block  w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                placeholder="PHARMA BIOTECH PVT.LTD."
                defaultValue={""}
              />
              <button
                type="submit"
                className="ml-48 inline-flex justify-center py-1 px-3 my-2 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </form>
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
            <form action="/send-data-here" method="post">
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
                placeholder="Owning Pharma Franchise"
                autoComplete="given-name"
                className="my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
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
                className=" shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                placeholder="PHARMA BIOTECH PVT.LTD."
                defaultValue={""}
              />
              <button
                type="submit"
                className="ml-48 inline-flex justify-center py-1 px-3 my-2 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </form>
          </li>
         

          
        </ul>
      </div>
    </div>
  );
};
export default CustomizeAbout;
