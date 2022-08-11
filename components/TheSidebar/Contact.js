import { MDBIcon } from "mdbreact";
import { CAccordion, CAccordionItem, CAccordionHeader, CAccordionBody, } from '@coreui/react';
import { useFetchTasksQuery, useCreateTaskMutation, useDeleteTaskMutation, useUpdateTaskMutation } from "../../store/actionReducers/contactSlice";
import { useForm } from "react-hook-form";
import { NotificationManager } from 'react-notifications';


const CustomizeContact = () => {
 
    const { data, } = useFetchTasksQuery();
    const [createTask] = useCreateTaskMutation();
    
    const { register, handleSubmit} = useForm({
      defaultValues:data
    });
  
    const handleCreateTask = async (data) => { 
      const { bannerImage,bannerText } = data;

      let formData = new FormData()
      formData.append("bannerText",bannerText)
      formData.append("bannerImage",bannerImage[0])
      
      await createTask(formData).unwrap();
      NotificationManager.success('Successfully updated.');};




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
                        <CAccordionBody  className="sidebarCenterSet">
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
                                    className="relative cursor-pointer rounded-md font-medium text-white hover:text-blue-900  focus-within:outline-none">
                                    <input
                                      id="bannerImage"
                                      type='file'
                                     src={item.bannerImage}
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
                              className="block text-sm font-medium text-white pt-2">
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
                    
                    <button
                      type="submit"
                      className="  inline-flex justify-center py-1   my-3 shadow-sm text-sm font-medium rounded-md text-white bg-blue-700 hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      style={{padding:"5px 109px"}}   >
                      Update
                    </button>
  
                  </div>
                )
              })}
            </form>
          </ul>
  
        </div>
      </div>
    )
}
export default CustomizeContact;