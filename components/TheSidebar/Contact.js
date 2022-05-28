import { MDBIcon } from "mdbreact";
 const CustomizeContact = () => {
  return (
    <div><div className="flex flex-col animated  zoomIn ">
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
                  className="relative cursor-pointer bg-black rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
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

        <div className="mr-2 py-2 bg-black text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-1 px-3  shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                className="relative cursor-pointer bg-black rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
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
        <div className="mr-2 py-2 bg-black text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-1 px-3  shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
            className="ml-48 inline-flex justify-center py-1 px-3 my-2 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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
                className="relative cursor-pointer bg-black rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
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
            className="ml-48 inline-flex justify-center py-1 px-3 my-2 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
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

          <div className="mr-2 py-2 bg-black text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-1 px-3 shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </li>

    </ul>
  </div></div>
  )
}
export default CustomizeContact;