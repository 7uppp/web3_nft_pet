import {createSlice} from "@reduxjs/toolkit";


const setConnectStateSlice = createSlice({
        name: 'setConnectState',
        initialState: {
            isConnect: false,
            defaultAccount: '',
        },
        reducers: {
            setState(state, action) {
                state.isConnect = action.payload
            },

        }
    })

export const {setState} = setConnectStateSlice.actions
export const setConnectStateReducer = setConnectStateSlice.reducer