
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const contactApi = createApi({
    reducerPath: 'contactApi',
    baseQuery: fetchBaseQuery({ baseUrl:`http://localhost:3002/api/web/customizecontact/`}),
    tagTypes: ["Contact"],
    endpoints: (build) => ({
        fetchTasks: build.query({ query: () => "/get", providesTags: ["Contact"] }),

        createTask: build.mutation({
            query: (data) => ({
                url: "/add",
                method: "POST",
                body: data
            }),
            invalidatesTags: ["Contact"]
        }),
        updateTask: build.mutation({
            query: ({ id, ...data }) => ({
                url: `/update`,
                method: "PUT",
                body: data
            }),
            invalidatesTags: ["Contact"]
        }),
        deleteTask: build.mutation({
            query: (id) => ({
                url: `/delete/${id}`,
                method: "DELETE"
            }),
            invalidatesTags: ["Contact"]
        })
    })
});

export const {
    useFetchTasksQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation
} = contactApi;