import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl:` http://localhost:3002/api/web/customizehome/` }),

  tagTypes: ["homeApi"],
  endpoints: (build) => ({
    fetchTasks: build.query({ query: () => "/get", providesTags: ["homeApi"] }),

    createTask: build.mutation({
      query: (data) => ({
        url: "/add",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["homeApi"]
    }),
    updateTask: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/update/${id}`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["homeApi"]
    }),
    deleteTask: build.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["homeApi"]
    })
  })
});

export const {
  useFetchTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = homeApi;
