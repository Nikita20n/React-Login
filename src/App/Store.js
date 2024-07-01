import { configureStore } from "@reduxjs/toolkit";
import Userslice from "../feaure/Website/Userslice";


export const store=configureStore({
    reducer:{
        user:Userslice
    }
})