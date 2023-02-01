import {configureStore} from "@reduxjs/toolkit";
import {setConnectStateReducer} from "./setConnectState";
import {setDefaultAccountReducer} from "./setDefaultAccount";
import {setBalanceReducer} from "./setBalance";
import {setGasReducer} from "./setGasSlice";

const store = configureStore({
        reducer: {
            setConnectState: setConnectStateReducer,
            setDefaultAccount: setDefaultAccountReducer,
            setBalance: setBalanceReducer,
            setGasPrice: setGasReducer,
        }
    }
)

export default store