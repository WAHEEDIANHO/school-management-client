import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import currentAccountSlice from "@/src/store/currentAccountSlice";
import transactionSlice from "@/src/store/transactionSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        account: currentAccountSlice.reducer,
        transaction: transactionSlice.reducer,
    }
})

export default store;