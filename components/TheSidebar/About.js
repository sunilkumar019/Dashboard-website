import { MDBIcon } from "mdbreact";
import { useState, } from "react";
import { useFetchTasksQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } from "../../store/actionReducers/aboutSlice";
import { useForm } from "react-hook-form";
import { NotificationManager } from 'react-notifications';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody, CFormCheck } from '@coreui/react';

const CustomizeAbout = () => {
  const [image, setImage] = useState({ preview: '', imageData: '' })

//const ={imageUrl:}
  const { data, } = useFetchTasksQuery();
  const [deleteTask] = useDeleteTaskMutation();
  const [createTask] = useCreateTaskMutation();
  const { register, handleSubmit, setValue, } = useForm({
    defaultValues: data.data[0]
  });



  const handleCreateTask = async (data) => {
    const { bannerImage, cardImages, cardsList } = data;

//console.log(data)
    let formData = new FormData()
    formData.append("bannerImage", bannerImage[0])
    // data.cardImages.forEach(items => {
    //   formData.append("cardImages", items[0])
    // });
    // formData.append("cardImages", JSON.stringify(
    //   data.cardImages.map((it => it[0].name))
    // ))
  cardsList.forEach((it)=>{
       formData.append("cardsList", it.imageUrl[0])
  })
  var av=cardsList.map((item)=>({...item,imageUrl:item.imageUrl[0].name}))
  console.log(av)
    formData.append("bannerImage",
    "core/uploads/webCustomize/about/" + bannerImage[0].name)
    formData.append("bannerText", data.bannerText)
    formData.append("heading", data.heading)
    formData.append("text", data.text)
    formData.append("cardsList", JSON.stringify(data.cardsList))
    formData.append("goalsList", JSON.stringify(data.goalsList))
    // await createTask(formData).unwrap();
    NotificationManager.success('Successfully updated.');
  };
  return (
    <div>
      <div className="text-center mb-2"><h6 className="text-white">
        <MDBIcon icon="angle-right" className="text-white" />
        &nbsp;
        About</h6>
      </div>
      <div className="flex flex-col animated  slideInLeft ">
        <ul className="space-y-2">
          <form onSubmit={handleSubmit(handleCreateTask)} encType="multipart/form-data">

            {data && data.data.map((item, index) => {
              return (
                <div key={index}>
                  <CAccordion flush className="mr-4 outline outline-offset-2 outline-1">
                    <CAccordionItem itemKey={1}>
                      <CAccordionHeader>
                        <MDBIcon fas icon="images" />&nbsp;banner
                      </CAccordionHeader>
                      <CAccordionBody style={{ backgroundColor: "rgb(35,40,45)", padding: "15px 0px" }}>
                        <li  >
                          <label className="block text-sm font-medium text-white">
                            <MDBIcon
                              far
                              icon="image"
                              className="text-white"
                              size=""
                            />
                            &nbsp;Image
                          </label>

                          <div className="mt-1 flex justify-center px-6 border-2 border-gray-300 border-dashed rounded-md w-64 ">
                            <div className="space-y-1 text-center py-2">

                              <div className="flex text-sm text-gray-600">
                                <label
                                  htmlFor="bannerImage"
                                  className="relative cursor-pointer rounded-md font-medium text-white hover:text-blue-900  focus-within:outline-none  " >

                                  <input
                                    id="bannerImage"
                                    type='file'
                                    className="truncateText"
                                    {...register(`bannerImage`)}
                                  />

                                </label>

                              </div>
                              <p className="text-xs text-white">PNG, JPG, GIF </p>
                            </div>
                          </div>

                          <label
                            htmlFor="bannerText"
                            className="block text-sm font-medium text-white">
                            <MDBIcon far icon="edit" className="text-white" />
                            &nbsp; Heading
                          </label>
                          <input
                            type="text"
                            {...register(`bannerText`)}
                            minLength={5}
                            maxLength={15}
                            required
                            defaultValue={item.bannerText}
                            placeholder="Enter your text here... "
                            autoComplete="off"
                            className=" px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                          />


                        </li>

                      </CAccordionBody>
                    </CAccordionItem>

                  </CAccordion>
                  <hr className="w-64 bg-white my-2" />
                  <CAccordion flush className="mr-4 outline outline-offset-2 outline-1 ">
                    <CAccordionItem itemKey={1}   >
                      <CAccordionHeader   >
                        <MDBIcon icon="briefcase" />&nbsp; Business Beliefs
                      </CAccordionHeader>
                      <CAccordionBody style={{ backgroundColor: "rgb(35,40,45)", padding: "15px 0px" }}>
                        {/* "black" */}
                        <li >
                          <label
                            htmlFor="heading"
                            className="block text-sm font-medium text-white">
                            <MDBIcon far icon="edit" className="text-white" />
                            &nbsp; Heading
                          </label>
                          <input
                            type="text"
                            name="heading"
                            {...register(`heading`)}
                            minLength={15}
                            maxLength={100}
                            required
                            defaultValue={item.heading}
                            placeholder="Enter your text here... "
                            autoComplete="off"
                            className=" px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                          />
                          <label
                            htmlFor="text"
                            className="block text-sm font-medium text-white"
                          >
                            <MDBIcon far icon="edit" className="text-white" />
                            &nbsp; Text
                          </label>
                          <textarea
                            name="text"
                            rows={4}
                            defaultValue={item.text}
                            {...register(`text`)}
                            minLength={20}
                            maxLength={500}
                            required
                            className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                            placeholder="Enter your text here... "

                          />
                        </li>
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>

                  <hr className="w-64 bg-white my-2" />

                  <CAccordion flush className="mr-4 outline outline-offset-2 outline-1">
                    <CAccordionItem itemKey={1}>
                      <CAccordionHeader>
                        <MDBIcon far icon="address-card" />&nbsp;Cards
                      </CAccordionHeader>
                      <CAccordionBody style={{ backgroundColor: "rgb(35,40,45)", padding: "15px 0px" }}>
                        {item.cardsList.map((card, index) => {
                          return (
                            <div key={index}>
                              <li  >
                                <label className="block text-sm font-medium text-white">
                                  <MDBIcon
                                    far
                                    icon="image"
                                    className="text-white"
                                    size=""
                                  />{" "}
                                  &nbsp;Image
                                </label>
                                <div className="mt-1 flex justify-center px-6 border-2 border-gray-300 border-dashed rounded-md w-64 ">
                                  <div className="space-y-1 py-2 text-center">
                                    <div className="flex text-sm text-gray-600">
                                      <label
                                        htmlFor="imageUrl"
                                        className="relative cursor-pointer rounded-md font-medium text-white hover:text-blue-900  focus-within:outline-none"
                                      >
                                        <input
                                          className="truncateText"
                                          id="imageUrl"
                                          type="file"
                                          {...register(`[cardsList${index}].imageUrl`)}

                                          










/>
                                      </label>
                                    </div>
                                    <p className="text-xs text-white">PNG, JPG, GIF </p>
                                  </div>
                                </div>

                                <label
                                  htmlFor="card_heading"
                                  className="block text-sm font-medium text-white mt-2"
                                >
                                  <MDBIcon far icon="edit" className="text-white" />
                                  &nbsp; Heading
                                </label>
                                <input
                                  type="text"
                                  name="card_heading"
                                  id="card_heading"
                                  defaultValue={card.card_heading}
                                  {...register(`cardsList[${index}].card_heading`, { onChange: (e) => setValue(`cardsList[${index}].card_heading`, e.target.value) })}
                                  placeholder="Enter your text here... "
                                  autoComplete="off"
                                  minLength={5}
                                  maxLength={25}
                                  required
                                  className=" px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                                />

                                <label
                                  htmlFor="card_text"
                                  className="block text-sm font-medium text-white"
                                >
                                  <MDBIcon far icon="edit" className="text-white" />
                                  &nbsp; Text
                                </label>
                                <textarea
                                  id="card_text"
                                  name="card_text"
                                  rows={4}
                                  defaultValue={card.card_text}
                                  {...register(`cardsList[${index}].card_text`, { onChange: (e) => setValue(`cardsList[${index}].card_text`, e.target.value) })}
                                  className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                                  placeholder="Enter your text here... "
                                  autoComplete="off"
                                  minLength={30}
                                  maxLength={70}
                                  required
                                />
                                <hr className="w-64 bg-white my-3" />
                              </li>

                            </div>

                          )
                        })}
                      </CAccordionBody>
                    </CAccordionItem>
                  </CAccordion>


                  <hr className="w-64 bg-white my-2" />


                  <CAccordion flush className="mr-4 outline outline-offset-2 outline-1">
                    <CAccordionItem itemKey={1}>
                      <CAccordionHeader>
                        <MDBIcon icon="bullseye" />&nbsp;Goals
                      </CAccordionHeader>
                      <CAccordionBody style={{ backgroundColor: "rgb(35,40,45)", padding: "15px 0px" }}>

                        {item.goalsList.map((items, index) => {

                          return (<li key={index}>
                            <label className="block text-sm font-medium text-white">
                              <MDBIcon
                                far
                                icon="image"
                                className="text-white"
                                size=""
                              />{" "}
                              &nbsp;Image
                            </label>
                            <div className="mt-1 flex justify-center px-6 pt- pb-2 border-2 border-gray-300 border-dashed rounded-md w-64 ">
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
                              htmlFor="goals_heading"
                              className="block text-sm font-medium text-white mt-2"
                            >
                              <MDBIcon far icon="edit" className="text-white " />
                              &nbsp; Heading
                            </label>
                            <input
                              type="text"
                              name="goals_heading"
                              id="goals_heading"
                              defaultValue={items.goals_heading}
                              {...register(`goalsList[${index}].goals_heading`, { onChange: (e) => setValue(`goalsList[${index}].goals_heading`, e.target.value) })}
                              placeholder="Enter your text here... "
                              autoComplete="off"
                              minLength={10}
                              maxLength={100}
                              required
                              className=" px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64"
                            />

                            <label
                              htmlFor="goals_text"
                              className="block text-sm font-medium text-white"
                            >
                              <MDBIcon far icon="edit" className="text-white" />
                              &nbsp; Text
                            </label>
                            <textarea
                              id="goals_text"
                              name="goals_text"
                              rows={4}
                              defaultValue={items.goals_text}
                              {...register(`goalsList[${index}].goals_text`, { onChange: (e) => setValue(`goalsList[${index}].goals_text`, e.target.value) })}
                              className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block w-64 sm:text-sm border border-gray-300 rounded-md text-black mb-2"
                              placeholder="Enter your text here... "
                              autoComplete="off"
                              minLength={20}
                              maxLength={200}
                              required
                            />
                            <CFormCheck
                              type="checkbox"
                              className="text-light sm:text-sm font-medium"
                              name="float"
                              id="float"

                              {...register(`goalsList[${index}].float`, { value: ' row-reverse' })}
                              label="Right" />





                            <hr className="w-64 bg-white my-3" />
                          </li>)
                        })}
                      </CAccordionBody>
                    </CAccordionItem>

                  </CAccordion>

                  <button
                    type="submit"
                    className="  inline-flex justify-center py-1 px-28 my-3 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Update
                  </button>

                </div>
              )
            })}
          </form>
        </ul>

      </div>
    </div>
  );
};
export default CustomizeAbout;
