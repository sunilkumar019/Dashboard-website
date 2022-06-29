
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 

export const servicesApi = createApi({
  reducerPath: 'servicesApi',
  baseQuery: fetchBaseQuery({ baseUrl:` http://localhost:3002/api/web/customizeservices/` }),
  tagTypes: ["Services"],
  endpoints: (build) => ({
    fetchTasks: build.query({ query: () => "/get", providesTags: ["Services"] }),

    createTask: build.mutation({
      query: (data) => ({
        url: "/add",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["Services"]
    }),
    updateTask: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/update/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["Services"]
    }),
    deleteTask: build.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["Services"]
    })
  })
});

export const {
  useFetchTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = servicesApi;

 