
// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
// import { userAPI } from './userAPI'

// // First, create the thunk
// const fetchUserById = createAsyncThunk(
//   'users/fetchByIdStatus',
//   async ( ) => {
//     const response = await fetch(`http://localhost:3002/api/web/customizeAbout/get`)
//     return response.json()
//   }
// )

 

// const initialState = {
//   entities: [],
  
// } 
 
// const usersSlice = createSlice({
//   name: 'users',
//   initialState,
//   reducers: {
    
//   },
//   extraReducers: (builder) => {
//      builder.addCase(fetchUserById.fulfilled, (state, action) => {
//        state.entities.push(action.payload)
//     })
//   },
// })

 
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl:'http://localhost:3002/api/web/customizeAbout/'}),
  endpoints: (builder) => ({
    getPokemonByName: builder.query({
      query: () => ({ url:`get`, method: "GET" })
    }),
    updatePost: builder.mutation({
      query: (updatePostData) => 
      {
        const {id, ...data}=updatePostData
        return{
          url:`update`,
          method:'PUT',
          body: updatePostData,
          headers:{
            'Content-Type': 'application/json'
          },
        }
       }
    }),
  }),
})

export const { useGetPokemonByNameQuery ,useUpdatePostMutation} = pokemonApi;


// import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
// const URL = `${(process.env.API_ROUTE)}/customizeAbout`;

 


// export  const  fetchAll = createAsyncThunk("about/fetchAll",  async( ) => {
//   return   fetch(`http://localhost:3002/api/web/customizeAbout/get`).then((res) => res.json()
//   )
  
// });

// export const updatePut = createAsyncThunk("about/updatePut", async ({ id,heading,text}) => {
//   return await fetch(`http://localhost:3002/api/web/customizeAbout/update`,{
//     method:"PUT",
//     headers:{
     
//       'Content-type':'application/json'
//     },
//     body:JSON.stringify({
//       heading,
//       text,
//     })
//   }).then((res) => res.json()
//   )
// });



// const aboutSlice = createSlice({

//   name: 'about',
//   initialState: { about: [] },


//   reducers: {
//     [fetchAll.fulfilled]: (state, action) => {
//       state.about = [action.payload]
//     },

//     [updatePut.fulfilled]: (state, action) => {
//       state.about = [action.payload]
//     }
   
//   }


// });


 

// export default aboutSlice.reducer;














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