import { createSlice } from '@reduxjs/toolkit';
import { servicesJson } from '../../data/services/ServicesData';

export const manageData = createSlice({

    name: 'servcie',
    initialState:
        {
            heading:"",
           
        }
,
    reducers: {
        showServices: (state, action) => {
            state.services =[...state.services]

        },
      addServices:(state,action)=>{
        state.heading==action.payload.addServices
      }

    },

})
export const { addServices } = manageData.actions

export default manageData.reducer;
