import { createSlice } from "@reduxjs/toolkit";
import { type } from "@testing-library/user-event/dist/type";
import { toast } from "react-toastify";
// http://localhost:3000/registeration
const registerSlice = createSlice({
    name: "registeration",
    initialState: [] , 
    reducers:{
        regisFunc: (state , action) => {
            return action.payload;
        }
        
    }
})


export const { regisFunc} = registerSlice.actions;
export default registerSlice.reducer;



// This is to get the data from the api
export function register_get () {
    return async function fetchuserapi (dispatch){
        // const response  = await fetch({`$"http://localhost:4000/user"`})
        // const response  = await fetch(`${window.location.origin}/db.json/user`)
        const response  = await fetch("https://my-json-server.typicode.com/AhsanBilal7/login-json-server-Redux/user")
        // console.log(`${window.location.origin}/db.json/user`)
        const data_json = await response.json();
        console.log(data_json)
        dispatch(regisFunc(data_json));
    }
}
export function register_post(Newdata) {
    return async function fetchuserapi_post(dispatch) {
      try {
        console.log("Newdata: ", Newdata);
        const response = await fetch("https://my-json-server.typicode.com/AhsanBilal7/login-json-server-Redux/user", {
        // const response = await fetch("http://localhost:4000/user", {
          method: "POST",
          headers: { 'Content-Type': "application/json" },
          body: JSON.stringify(Newdata)
        });
  
        if (!response.ok) {
          throw new Error("Failed to post data");
        }
  
        const data = await response.json();
        console.log("Posted Data: ", data);
        toast.success("Data Registered Successfully");
        // You can dispatch an action here if needed
        // For example:
        // dispatch({ type: "POST_SUCCESS", payload: data });
  
      } catch (error) {
        console.error("Error posting data:", error);
  
        // You can dispatch an error action here if needed
        // For example:
        // dispatch({ type: "POST_FAILURE", error: error.message });
      }
    };
  }
  