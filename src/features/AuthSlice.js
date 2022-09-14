import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {collection, addDoc, Timestamp} from 'firebase/firestore';
import {signInWithEmailAndPassword} from "firebase/auth";
import {db,Auth} from "../config/firebase-config";



const initialState = {
    user:[],
    error:null,
    isLoading:false,
}

export const createUser = createAsyncThunk("Auth/createUser", async (form)=>{
    try {
        await addDoc(collection(db, 'users'), {
            firstName: form.firstName, 
            lastName: form.lastName,
             email: form.email, 
            password: form.password,
            role:"Admin",
            isAproved:false,
            created: Timestamp.now()
          })       
    } catch (error) {
       console.log(error); 
    }
})

export const getUser = createAsyncThunk("Auth/getUser", async (form)=>{
    try {
        await signInWithEmailAndPassword(Auth, form.email, form.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          // ...
        })
    } catch (error) {
        console.log(error);
    }
    
})



const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        
    }
})


export default AuthSlice.reducer