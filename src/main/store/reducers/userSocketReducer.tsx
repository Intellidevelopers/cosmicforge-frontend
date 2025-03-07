import { createSlice, PayloadAction } from "@reduxjs/toolkit"



  export interface UserSocketProps {
    socket:SocketIOClient.Socket | null,
    isOnline?:boolean,
    connected?:boolean
   
 }

 const  initialState:UserSocketProps = {
   socket:null,
   isOnline:false,
   connected:false
   
 }


 const userSocketSlice = createSlice({
    name:"socket",
    initialState,
    reducers:{
        connectSocket(state,action:PayloadAction<UserSocketProps>){
            state.socket = action.payload.socket ?? state.socket!!
            state.connected = action.payload.connected ?? state.connected
          
        }
    }

 })

 export const {connectSocket} =userSocketSlice.actions


 export default userSocketSlice.reducer