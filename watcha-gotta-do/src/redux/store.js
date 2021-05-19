import { configureStore } from "@reduxjs/toolkit";
import { reducer } from "./reducer";

//configureStore automatically takes care of the web dev tools.  The fxn also is handling just one reducer

export const store = configureStore({
    reducer: reducer,
});