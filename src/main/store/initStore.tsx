import { configureStore } from "@reduxjs/toolkit";
import {  combineReducers} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import userReducer, { UserProps } from './reducers/userReducers'



const persistConfig = {
    key:'root',
    storage
}

 export interface RootReducer {
    user:UserProps
 }


const rootReducer =  combineReducers({
  user:userReducer
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