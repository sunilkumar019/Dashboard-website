import Link from "next/link";
import { MDBIcon } from "mdbreact";
import { NotificationManager } from 'react-notifications';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody } from '@coreui/react';
import { useFetchTasksQuery, useCreateTaskMutation, useDeleteTaskMutation } from "../../store/actionReducers/homeSlice";
import { useForm } from "react-hook-form";

const Home = () => {
  const { data, } = useFetchTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [createTask] = useCreateTaskMutation();

  const { register, handleSubmit, setValue } = useForm({
    defaultValues: data

  });

  const handleCreateTask = async (defaultValues) => {



    await createTask({
      sliderImgs: defaultValues.sliderImgs,
      cardList: defaultValues.cardList,
      servicesList: defaultValues.servicesList,
      productDetails: defaultValues.productDetails

    }).unwrap();

    NotificationManager.success('Successfully updated.');
  };

  const clickHandle = (e) => {

    //console.log(e.target.files)
    if (e.target.files) {
      var fieldArray = Array.from(e.target.files).map((file) => URL.createObjectURL(file))
      console.log(fieldArray)
    }

  }

  return (
    <div>
      <div className="text-center mb-2"><h6 className="text-white">
        <MDBIcon icon="angle-right" className="text-white" />
        &nbsp;
        Home</h6>
      </div>
      <div className="flex flex-col animated  slideInLeft ">
        <ul className="space-y-2">
          <form onSubmit={handleSubmit(handleCreateTask)}>
            {
              data && data.data.map((items, index) => {

                return (<div key={index}> 
                  <CAccordion flush className="mr-4 outline outline-offset-2 outline-1 ">
                    <CAccordionItem itemKey={1}>
                      <CAccordionHeader >

                        <MDBIcon icon="sliders-h" />&nbsp;Carousel Slider

                      </CAccordionHeader>
                      <CAccordionBody style={{ backgroundColor: "rgb(35,40,45)", padding: "15px 0px" }}>
                        <li>
                          <div>

                            <label className="block text-sm font-medium text-white">
                              <MDBIcon far icon="image" className="text-white" size="" />{" "}
                              &nbsp;Uplaod Banner
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt-2 pb-6 border-2 border-gray-300 border-dashed rounded-md w-64 ">
                              <div className="space-y-1 text-center">
                                <MDBIcon
                                  icon="image"
                                  className=""
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
                                      multiple
                                      className="sr-only"
                                      onChange={clickHandle}
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


                        </li>
                      </CAccordionBody>
                    </CAccordionItem>

                  </CAccordion>
                  <hr className="w-64 bg-white my-2" />
                  <CAccordion flush className="mr-4 outline outline-offset-2 outline-1">
                    <CAccordionItem itemKey={1}>
                      <CAccordionHeader>

                        <MDBIcon far icon="address-card" />&nbsp;Information Cards
                      </CAccordionHeader>
                      <CAccordionBody style={{ backgroundColor: "rgb(35,40,45)", padding: "15px 0px" }}>
                        {items.cardList.map((card, index) => {

                          return (<li key={index}>

                            <label className="block text-sm font-medium text-white">
                              <MDBIcon
                                far
                                icon="image"

                              />{" "}
                              &nbsp;Image
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
                              htmlFor="text"
                              className="block text-sm font-medium text-white mt-2"
                            >
                              <MDBIcon far icon="edit" className="text-white" />
                              &nbsp; Text
                            </label>
                            <textarea
                              id="text"
                              name="text"
                              rows={4}
                              maxLength={83}
                              minLength={50}
                              required
                              defaultValue={card.text}
                              {...register(`cardList[${index}].text`, { onChange: (e) => setValue(`cardList[${index}].text`, e.target.value) })}
                              className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                              placeholder="Enter your text here... "

                            />


                          </li>)
                        })}
                      </CAccordionBody>
                    </CAccordionItem>

                  </CAccordion>

                  <hr className="w-64 bg-white my-2" />
                  <CAccordion flush className="mr-4 outline outline-offset-2 outline-1">
                    <CAccordionItem itemKey={1}>
                      {
                        items.servicesList.map((it, index) => {

                          return (<div key={index}> <CAccordionHeader>

                            <MDBIcon icon="cogs" />&nbsp;Our Services

                          </CAccordionHeader>
                            <CAccordionBody style={{ backgroundColor: "rgb(35,40,45)", padding: "15px 0px" }}>
                              <label
                                htmlFor="heading"
                                className="block text-sm font-medium text-white"
                              >
                                <MDBIcon far icon="edit" className="text-white" />
                                &nbsp; Heading
                              </label>
                              <input
                                type="text"
                                name="serviceHeading"
                                id="serviceHeading"
                                maxLength={83}
                                minLength={50}
                                required
                                defaultValue={it.serviceHeading}
                                {...register(`servicesList[${index}].serviceHeading`, { onChange: (e) => setValue(`servicesList[${index}].serviceHeading`, e.target.value) })}
                                placeholder="Enter your text here... "
                                autoComplete="given-name"
                                className="px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                              />
                              <hr className="w-64 bg-white my-3" />

                              <label className="block  font-medium text-white text-center"><MDBIcon far icon="handshake" />&nbsp; Cards</label>
                              {
                                it.serviceCards.map((cards, index) => {

                                  return (<li key={index}>
                                    {/* <label className="block font-medium text-white text-center"><MDBIcon far icon="handshake" />&nbsp; Our Services</label> */}

                                    <label
                                      htmlFor="heading"
                                      className="block text-sm font-medium text-white"
                                    >
                                      <MDBIcon far icon="edit" className="text-white" />
                                      &nbsp; Heading
                                    </label>
                                    <input
                                      type="text"
                                      name="heading"
                                      id="heading"
                                      required
                                      minLength={7}
                                      maxLength={30}
                                      defaultValue={cards.heading}
                                      {...register(`servicesList[0].serviceCards[${index}].heading`, { onChange: (e) => setValue(`servicesList[0].serviceCards[${index}].heading`, e.target.value) })}
                                      placeholder="Enter your text here... "
                                      autoComplete="given-name"
                                      className="px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                                    />
                                    <label
                                      htmlFor="text"
                                      className="block text-sm font-medium text-white"
                                    >
                                      <MDBIcon far icon="edit" className="text-white" />
                                      &nbsp; Text
                                    </label>
                                    <textarea
                                      id="text"
                                      name="text"
                                      rows={4}
                                      required
                                      minLength={110}
                                      maxLength={400}
                                      defaultValue={cards.text}
                                      {...register(`servicesList[0].serviceCards[${index}].text`, { onChange: (e) => setValue(`servicesList[0].serviceCards[${index}].text`, e.target.value) })}
                                      className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                                      placeholder="Enter your text here... "

                                    />
                                    <hr className="w-64 bg-white my-3" />

                                  </li>)

                                })
                              }
                            </CAccordionBody></div>)
                        })
                      }
                    </CAccordionItem>

                  </CAccordion>

                  <hr className="w-64 bg-white my-2" />

                  <CAccordion flush className="mr-4 outline outline-offset-2 outline-1">
                    <CAccordionItem itemKey={1}>
                      <CAccordionHeader>

                        <MDBIcon icon="cogs" />&nbsp;Products

                      </CAccordionHeader>
                      <CAccordionBody style={{ backgroundColor: "rgb(35,40,45)", padding: "15px 0px" }}>
                        {items.productDetails.map((items, index) => {
                          return (
                            <li key={index}>
                              <label
                                htmlFor="heading"
                                className="block text-sm font-medium text-white">
                                <MDBIcon far icon="edit" className="text-white" />
                                &nbsp; Heading
                              </label>
                              <input
                                type="text"
                                name="heading"
                                id="heading"
                                required
                                defaultValue={items.heading}
                                {...register(`productDetails[${index}].heading`, { onChange: (e) => setValue(`productDetails[${index}].heading`, e.target.value) })}
                                placeholder="Enter your text here... "
                                autoComplete="given-name"
                                className="px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                              />
                              <label
                                htmlFor="text"
                                className="block text-sm font-medium text-white"
                              >
                                <MDBIcon far icon="edit" className="text-white" />
                                &nbsp; Text
                              </label>
                              <textarea
                                id="text"
                                name="text"
                                rows={4}
                                required
                                defaultValue={items.text}
                                {...register(`productDetails[${index}].text`, { onChange: (e) => setValue(`productDetails[${index}].text`, e.target.value) })}
                                className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                                placeholder="Enter your text here... "
                              />
                              <hr className="w-64 bg-white my-3" />
                            </li>
                          )
                        })}
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>
                </div>)
              })
            }
           
            <button
              type="submit"
              className="  inline-flex justify-center py-1 px-28 my-3 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Update
            </button>
          </form>
        </ul>
      </div>
    </div>
  )
}
export default Home;