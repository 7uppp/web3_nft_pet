import {configureStore} from "@reduxjs/toolkit";
import {setConnectStateReducer} from "./setConnectState";
import {setDefaultAccountReducer} from "./setDefaultAccount";

const store = configureStore({
        reducer: {
            setConnectState: setConnectStateReducer,
            setDefaultAccount: setDefaultAccountReducer,

        }
    }
)

export default store