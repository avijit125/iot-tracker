import {createSlice} from "@reduxjs/toolkit";



const initialState = {
    user:[],
    error:null,
    isLoading:false,
}



const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        
    }
})


export default AuthSlice.reducer