import { createSlice } from '@reduxjs/toolkit';
import { servicesJson } from '../../data/services/ServicesData';

export const manageData = createSlice({

    name: 'servcie',
    initialState: [],

    reducers: {
        showServices: (state, action) => {
            state.services = [...state.services]

        },

        addServices: (state, action) => {
            state.push(action.payload)
        }

    },

})
export const { addServices, showServices } = manageData.actions

export default manageData.reducer;
