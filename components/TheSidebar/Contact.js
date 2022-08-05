import { MDBIcon } from "mdbreact";


import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody, CTooltip } from '@coreui/react';



const CustomizeContact = () => {
    return (
        <div><div className="text-center mb-2"><h6 className="text-white">
            <MDBIcon icon="angle-right" className="text-white" />
            &nbsp; Contact  </h6></div>
            <div className="flex flex-col animated  slideInLeft ">
                <ul className="space-y-2">

                    <form >
                        <CAccordion flush className="mr-4 outline outline-offset-2 outline-1">
                            <CAccordionItem itemKey={1}>
                                <CAccordionHeader>
                                    <MDBIcon far icon="images" />&nbsp;Poster
                                </CAccordionHeader>
                                <CAccordionBody style={{ backgroundColor: "rgb(35,40,45)", padding: "15px 0px" }}>
                                    <li> <label className="block text-sm font-medium text-white">
                                        <MDBIcon
                                            far
                                            icon="image"
                                            className="text-white"
                                            size=""
                                        />{" "}
                                        &nbsp;Image
                                    </label>
                                        <div className="mt-1 flex justify-center px-6 pt- pb-2 border-2 border-gray-300 border-dashed rounded-md w-64 ">
                                            <div className="space-y-1 py-2 text-center">

                                                <div className="flex text-sm text-gray-600">
                                                    <label
                                                        htmlFor="file-upload"
                                                        className="relative cursor-pointer rounded-md font-medium text-blue-700 hover:text-blue-900  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                                                    >

                                                        <input
                                                            id="file-upload"
                                                            name="file-upload"
                                                            type="file"
                                                            className="truncateText"
                                                        />
                                                    </label>

                                                </div>
                                                <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
                                            </div>
                                        </div>
                                        <label
                                            htmlFor="bannerText"
                                            className="block text-sm font-medium text-white pt-2">
                                            <MDBIcon far icon="edit" className="text-white" />
                                            &nbsp; Heading
                                        </label>
                                        <input
                                            type="text"

                                            minLength={5}
                                            maxLength={15}
                                            required

                                            placeholder="Enter your text here... "
                                            autoComplete="off"
                                            className=" px-2  py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                                        />
                                    </li>
                                </CAccordionBody>
                            </CAccordionItem>
                        </CAccordion>

                        <button
                    type="submit"
                    className=" inline-flex justify-center py-1 px-28 my-3 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>

                    </form>
                </ul>
            </div>
        </div>
    )
}
export default CustomizeContact;