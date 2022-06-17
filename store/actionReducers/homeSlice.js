import { createSlice } from '@reduxjs/toolkit';
import { homeJson } from '../../data/home/HomeData';
 

export const homeSlice = createSlice({

    name: 'home',
    initialState:homeJson
 
,
    reducers: {
        homeData: (state, action) => {
            state.home =[...state.home]

        },
        addHome:(state,action)=>{
           
        }
     
    },

})
export const { homeData } = homeSlice.actions

export default homeSlice.reducer;
