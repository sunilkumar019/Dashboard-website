
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
 

export const aboutApi = createApi({
  reducerPath: 'aboutApi',
  baseQuery: fetchBaseQuery({ baseUrl:` http://localhost:3002/api/web/customizeAbout/` }),
  tagTypes: ["About"],
  endpoints: (build) => ({
    fetchTasks: build.query({ query: () => "/get", providesTags: ["About"] }),

    createTask: build.mutation({
      query: (data) => ({
        url: "/add",
        method: "POST",
        body: data
      }),
      invalidatesTags: ["About"]
    }),
    updateTask: build.mutation({
      query: ({ id, ...data }) => ({
        url: `/update`,
        method: "PUT",
        body: data
      }),
      invalidatesTags: ["About"]
    }),
    deleteTask: build.mutation({
      query: (id) => ({
        url: `/delete/${id}`,
        method: "DELETE"
      }),
      invalidatesTags: ["About"]
    })
  })
});

export const {
  useFetchTasksQuery,
  useCreateTaskMutation,
  useUpdateTaskMutation,
  useDeleteTaskMutation
} = aboutApi;


















// updateAbout: (state, action) => {
//   const index = state.findIndex(about => about.id === action.payload.id);
//   state[index] = {
//     ...state[index],
//     ...action.payload,
//   };

// } // },
    // updateAbout: (state, action) => {
    //   state.value.map((item) => {
    //     if (item.id === action.payload.id) {
    //       item.heading = action.payload.heading;
    //       item.text = action.payload.text
    //     }

    //   })

    // }