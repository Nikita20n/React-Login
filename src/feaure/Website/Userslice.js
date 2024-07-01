import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const user_get=createAsyncThunk("user_get",async()=>{
    const res=await axios.get(`http://localhost:3000/categories`); //data show
    console.log(res.data);
    return res.data;

})
export const user_insert=createAsyncThunk("user_insert",async(formvalue)=>{
    const res=await axios.post(`http://localhost:3000/categories`,formvalue);
    console.log(res.data);
    return res.data;
})
export const user_update=createAsyncThunk("user_update",async(formvalue)=>{
    const res=await axios.patch(`http://localhost:3000/categories/${formvalue.id}`,formvalue);
    return res;
})
export const user_delete=createAsyncThunk("user_delete",async(id)=>{
    const res=await axios.delete(`http://localhost:3000/categories/${id}`);
    return res;
})

export const Userslice=createSlice({
    name:"user",
    initialState:{
        demo:"nikita",
        user:[]
    },
    reducers:{

    },
    extraReducers:{
        [user_get.fulfilled]:(state,actions)=>{
            state.user=actions.payload;
        }
    }
})
export const {}=Userslice.actions
export default Userslice.reducer