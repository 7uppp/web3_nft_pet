import {createSlice} from "@reduxjs/toolkit";


const setBalanceSlice = createSlice({
        name: 'setBalance',
        initialState: {
            balance: null,
        },
        reducers: {
            setBalance(state, action) {
                state.balance = action.payload
            }
        }
})

export const {setBalance} = setBalanceSlice.actions
export const setBalanceReducer = setBalanceSlice.reducer