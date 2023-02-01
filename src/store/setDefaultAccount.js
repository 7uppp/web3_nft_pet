

import {createSlice} from "@reduxjs/toolkit";

const setDefaultAccountSlice = createSlice({
        name: 'setDefaultAccount',
        initialState: {
            defaultAccount: '',
        },
        reducers: {
            setDefaultAccount(state, action) {
                state.defaultAccount = action.payload
            }
        }
    }
)

export const {setDefaultAccount}=setDefaultAccountSlice.actions;
export const setDefaultAccountReducer = setDefaultAccountSlice.reducer;