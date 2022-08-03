import { MDBIcon } from "mdbreact";
import { useFetchTasksQuery, useCreateTaskMutation, useDeleteTaskMutation } from "../../store/actionReducers/servicesSlice";
import { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { NotificationManager } from 'react-notifications';
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody, CTooltip } from '@coreui/react';


async function readDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = e => resolve(reader.result);
    reader.onerror = e => reject(reader.error);
    reader.readAsDataURL(file);
  });
}


const CustomizeServices = () => {

  const [currentHeading, setCurrentHeading] = useState("");
  const [currentText, setCurrentText] = useState("");
  const { data, isFetching } = useFetchTasksQuery();
  //const [updateTask] = useUpdateTaskMutation();
  const [deleteTask] = useDeleteTaskMutation();
  const [createTask] = useCreateTaskMutation();


  const { register, control, handleSubmit } = useForm({
    defaultValues: {
      test: data && data.data.map((item) => {
        return ({ itemId: item._id, currentHeading: item.heading, currentText: item.text })
      })
    }
  })

  const { fields, append, remove, } = useFieldArray({
    control,
    name: "test"
  });
  const handleCreateTask = async () => {
    if (currentHeading == "" && currentText == "") {
      NotificationManager.error('Please add new.');
    }
    else if (currentHeading != null && currentText != null) {
      NotificationManager.success('Data successfully added.');
    }
    else {
      NotificationManager.error('Error');

    }
    await createTask({
      heading: currentHeading,
      text: currentText,
    
    })

    setCurrentHeading("");
    setCurrentText("")
  };
 
  return (
    <div><div className="text-center mb-2"><h6 className="text-white">
      <MDBIcon icon="angle-right" className="text-white" />
      &nbsp; Services  </h6></div>
      <div className="flex flex-col animated  slideInLeft ">
        <ul className="space-y-2">

          <form onSubmit={handleSubmit(handleCreateTask)}>
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
                                </div></li>
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
                  <CTooltip
                    content="Add for new content please click the button"
                    placement="right">
                    <button
                      type="button"
                      className=" inline-flex justify-center py-1 px-2  my-2 mx-28  text-sm font-medium rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      onClick={() => {
                        append({ currentHeading: "", currentText: "" });
                      }} >
                      <MDBIcon icon="plus-circle" size="2x" />
                    </button>
                  </CTooltip>
                  {fields && fields.map((items, index) => {
                    return (
                      <div key={index}>
                        <li>
                          <label
                            htmlFor="currentHeading"
                            className="block text-sm font-medium text-white" >
                            <MDBIcon far icon="edit" className="text-white" />
                            &nbsp; Heading
                          </label>
                          <input
                            type="text"
                            name="currentHeading"
                            {...register(`test.${index}.currentHeading`)}
                            onChange={({ target }) => setCurrentHeading(target.value)}
                            placeholder="Enter your text here... "
                            autoComplete="given-name"
                            required
                            minLength={20}
                            maxLength={200}
                            className="px-2 my-2 py-1 focus:ring-indigo-500 focus:border-indigo-500 block shadow-sm sm:text-sm border-gray-300 rounded-md text-black w-64" />

                          <label
                            htmlFor="currentText"
                            className="block text-sm font-medium text-white">
                            <MDBIcon far icon="edit" className="text-white" />
                            &nbsp; Text
                          </label>
                          <textarea
                            name="currentText"
                            {...register(`test.${index}.currentText`)}
                            control={control}
                            required
                            className="px-2 shadow-sm  focus:ring-indigo-500 focus:border-indigo-500  block  w-64 sm:text-sm border border-gray-300 rounded-md text-black"
                            rows={4}
                            minLength={20}
                            maxLength={2000}
                            onChange={({ target }) => setCurrentText(target.value)}
                            placeholder="Enter your text here... "
                          />
                        </li>
                        <button type="button"
                          className="inline-flex justify-center py-1 px-2 my-2 mx-48 shadow-sm text-sm font-medium rounded-md text-white bg-red-700 hover:bg-red-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 "
                          onClick={() => { remove(index); deleteTask(items.itemId); NotificationManager.info('Deleted'); }}>
                          Delete
                        </button>
                        <hr className="w-64 bg-white my-2" />
                      </div>
                    )
                  })}
                </CAccordionBody>
              </CAccordionItem>
            </CAccordion>
            <button
              type="submit"
              className="  inline-flex justify-center py-1 px-28 my-3 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >save </button>
          </form>
        </ul>
      </div>
    </div>
  )
}
export default CustomizeServices;