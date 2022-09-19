import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  collection,
  getDocs,
} from "firebase/firestore";
import { db } from "../config/firebase-config";

const initialState = {
  users: [],
  error: null,
  isLoading: false,
};

export const getUsersInfos = createAsyncThunk("User/getUsersInfos", async () => {
  try {
    let list = [];
    const userCollectionRef = collection(db, "users");
    const usersSnapShot = await getDocs(userCollectionRef);
    usersSnapShot.docs.map((doc) => {list.push({...doc.data(), id: doc.id})})
    return list;
  } catch (error) {
    console.log(error);
  }
});

const UserSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers:(builder)=> {
    builder
      .addCase(getUsersInfos.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getUsersInfos.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload;
      });
  },
});

export default UserSlice.reducer;
