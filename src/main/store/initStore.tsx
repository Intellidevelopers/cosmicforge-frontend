import { configureStore } from "@reduxjs/toolkit";
import {  combineReducers} from "redux";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { thunk } from "redux-thunk";
import userReducer, { UserProps } from './reducers/userReducers'
import  userSocketReducer,{ UserSocketProps } from "./reducers/userSocketReducer";
import userDiagnosisReducer,{ UserDiagnosisProps } from "./reducers/diagnosisReducer";
import  specialistDetailsReducer,{ SpecialistDetailsProps } from "./reducers/specialistDetailsReducer";
import  appoinmentsReducer,{ DoctorAppointmentInterface } from "./reducers/doctorAppointmentsReducer";
import doctorWalletReducer,{ DoctorWalletProps } from "./reducers/doctorWalletReducer";



const persistConfig = {
    key:'root',
    storage,
    whitelist:['user',]
}

 export interface RootReducer {
    user:UserProps,
    socket:UserSocketProps,
    diagnosis:UserDiagnosisProps,
    specialistDetails:SpecialistDetailsProps,
    appointments:DoctorAppointmentInterface,
    doctorWallet:DoctorWalletProps
 }


const rootReducer =  combineReducers({
  user:userReducer,
  socket:userSocketReducer,
  diagnosis:userDiagnosisReducer,
  specialistDetails:specialistDetailsReducer,
  appointments:appoinmentsReducer,
  doctorWallet:doctorWalletReducer
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