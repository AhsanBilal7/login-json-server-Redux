import registerSlice from "./registerSlice";
import { configureStore } from "@reduxjs/toolkit";
import LoggedUserSlice from "./LoggedUserSlice";
// import {persistStore , persistReducer} from "redux-persist/es/persistStore";
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage"; // Corrected import
import { combineReducers } from "@reduxjs/toolkit";

// const store = configureStore({
//   reducer: {
//     register: registerSlice,
//     loggedUser: LoggedUserSlice,
//   },
// });

const persistConfig= {
    key: "root",
    storage ,
}

const rootReducer = combineReducers({
    register: registerSlice,
    loggedUser: LoggedUserSlice,
  });
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
reducer:persistedReducer,
});
const persistor = persistStore(store);
export { store, persistor };
