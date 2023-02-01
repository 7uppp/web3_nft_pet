import {createSlice} from "@reduxjs/toolkit";

const setNFTSlice = createSlice({
    name: "setNFT",
    initialState: {
        nft: [],
    },
    reducers: {
        setNFT: (state, action) => {
            state.nft = action.payload;
        }
    }
}
)

export const {setNFT} = setNFTSlice.actions;
export const setNFTReducer = setNFTSlice.reducer;