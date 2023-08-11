import { createSlice } from "@reduxjs/toolkit";

const loggedUserSlice = createSlice({
    name   : "LoggedUser" ,
    initialState : [] ,
    reducers:{

        loggedUser: (state , action)=>{
            return   action.payload;
        }

    } ,

    })

    export const {loggedUser} = loggedUserSlice.actions;
    export default loggedUserSlice.reducer;
