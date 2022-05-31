import { MDBIcon } from "mdbreact";
 const CustomizeServices = () => {
  return (
    <div><div className="flex flex-col animated  slideInLeft ">
    <ul className="space-y-2">
      <li>
      <label className="block pr-5 font-medium text-white text-center"><MDBIcon far icon="handshake" />&nbsp; Services</label>
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
            className="ml-48 inline-flex justify-center py-1 px-3 my-2 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Save
          </button>
        </form>
      </li>
     
  
    </ul>
  </div></div>
  )
}
export default CustomizeServices;