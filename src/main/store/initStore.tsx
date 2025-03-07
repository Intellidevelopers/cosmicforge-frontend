import { configureStore } from "@reduxjs/toolkit";
import {  combineReducers} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import userReducer, { UserProps } from './reducers/userReducers'
import  userSocketReducer,{ UserSocketProps } from "./reducers/userSocketReducer";
import userDiagnosisReducer,{ UserDiagnosisProps } from "./reducers/diagnosisReducer";



const persistConfig = {
    key:'root',
    storage,
    whitelist:['user',]
}

 export interface RootReducer {
    user:UserProps,
    socket:UserSocketProps,
    diagnosis:UserDiagnosisProps
 }


const rootReducer =  combineReducers({
  user:userReducer,
  socket:userSocketReducer,
  diagnosis:userDiagnosisReducer
})


const persistedReducer = persistReducer(persistConfig,rootReducer)



const store = configureStore({
    reducer:persistedReducer,
    middleware:(getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck:false
    }).concat(thunk)
})

const persistore = persistStore(store)




export  {store,persistore}