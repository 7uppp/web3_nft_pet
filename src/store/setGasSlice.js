import {createSlice} from "@reduxjs/toolkit";


const setGasSlice = createSlice({
    name: 'setGas',
    initialState: {
        gas: null,
    },
    reducers: {
        setGasPrice(state, action) {
            state.gas = action.payload
        }
    }
})

export const {setGasPrice} = setGasSlice.actions
export const setGasReducer = setGasSlice.reducer