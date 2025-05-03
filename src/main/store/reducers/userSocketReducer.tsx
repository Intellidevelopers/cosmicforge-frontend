
import { createSlice, PayloadAction } from "@reduxjs/toolkit"



  export interface UserSocketProps {

    socket?:SocketIOClient.Socket | null,
    isOnline?:boolean,
    connected?:boolean,
    remoteUserId?:string,
    localStream?:MediaStream | null
    remoteStream?:MediaStream | null
     offerCreated?:boolean,
     answerCreated?:boolean,
     offerReceived?:boolean,
     remoteDescription?:RTCSessionDescription | null
    localDescription?:RTCSessionDescription | null,
    localPeerConnectionInstance?:RTCPeerConnection | null,
    remotePeerConnectionInstance?:RTCPeerConnection | null,

    remoteCallerDetails?:{
      name:string,
      profilePicture:string
    
    } | null,
    startPlayingRingTone?:boolean,
    remoteConnected?:boolean,
    callMode?: 'audio' | 'video' | null,
    tearDown?:boolean,
    newPeerConnectionInstance?:boolean,
    newInComingCall?:boolean,
    isCallInitiated?:boolean,
    locallyConnected?:boolean,
    onCallAnswered?:boolean,
    isNewAppointmentNotification?:boolean,
    totalAppointments?:number,
    appointmentSessionStarted?:boolean,
    sessionID?:string | null

    
    
    
    
    
    
    
    
    userChats?:[{  
     
      chatID:string,
    userOneID:{
      userId:string,
     userName:string,
     userProfile:{
  
      profilePicture:string,
      professionalTitle?: string,
      specialization?: string,
      currentClinic?: string,
      department?: string,
      bio?: string,
      pricing?: string,

      workAddress?:string,
      experience?: {

          hospitalName?: string,
          NoOfPatientTreated?: string,
          specializationAndDepartment?: string,
          date?: string
      },
      workTime?: {
          day?: string,
          time?: string
      }
     }
    },
    userTwoID:{
      userId:string,
     userName:string,
     userProfile:{

profilePicture:string,
professionalTitle?: string,
specialization?: string,
currentClinic?: string,
department?: string,
bio?: string,
pricing?: string,

workAddress?:string,
experience?: {

    hospitalName?: string,
    NoOfPatientTreated?: string,
    specializationAndDepartment?: string,
    date?: string
},
workTime?: {
    day?: string,
    time?: string
}
     }
    }

    messages:[{
      messageType?:string,
      message?:string,
      timeStamp?:string,
      sender?:string,
      reciever?:string
 
    }] | null
   
 }]| null

  }




 const  initialState:UserSocketProps = {
   socket:null,
   isOnline:false,
   connected:false,
   remoteUserId:'',
   localStream:null,
   remoteStream:null,
   offerCreated:false,
   answerCreated:false,
   offerReceived:false,
   remoteDescription: null,
  localDescription:null,
  localPeerConnectionInstance:null,
  remotePeerConnectionInstance:null,
  remoteCallerDetails: null,
   startPlayingRingTone:false,
   remoteConnected:false,
   callMode:null,
   tearDown:false,
   newPeerConnectionInstance:false,
   newInComingCall:false,
   isCallInitiated:false,
   locallyConnected:false,
   onCallAnswered:false,
   isNewAppointmentNotification:false,
   totalAppointments:0,
   appointmentSessionStarted:false,
   sessionID:null,
   

   //user chat state
   userChats: null
 }

 


 const userSocketSlice = createSlice({
    name:"socket",
    initialState,
    reducers:{
        connectSocket(state,action:PayloadAction<UserSocketProps>){
            state.socket = action.payload.socket ?? state.socket!!
            state.connected = action.payload.connected ?? state.connected
           
          
        },

        updateUserCallingData (state,action:PayloadAction<UserSocketProps>){
         
          state.remoteUserId = action.payload.remoteUserId?? state.remoteUserId
          state.remoteCallerDetails = action.payload.remoteCallerDetails ?? state.remoteCallerDetails
        },

        updateUserLocalStream (state,action:PayloadAction<UserSocketProps>){
         
          state.localStream = action.payload.localStream?? state.localStream
        },

        updateRemoteStream (state,action:PayloadAction<UserSocketProps>){
         
          state.remoteStream = action.payload.remoteStream ?? state.remoteStream
        },
        updateOfferOrAnswer (state,action:PayloadAction<UserSocketProps>){
          state.offerCreated = action.payload.offerCreated ?? state.offerCreated
          state.answerCreated = action.payload.answerCreated?? state.answerCreated
          state.offerReceived = action.payload.offerReceived ?? state.offerReceived
        },
        updateRemoteDescription (state,action:PayloadAction<UserSocketProps>){
          state.remoteDescription = action.payload.remoteDescription?? state.remoteDescription
        },

        updateLocalDescription (state,action:PayloadAction<UserSocketProps>){
          state.localDescription = action.payload.localDescription?? state.localDescription
        },

        updatePeerConnectionInstance  (state,action:PayloadAction<UserSocketProps>){
              
        


          state.localPeerConnectionInstance = action.payload.localPeerConnectionInstance ?? null
          state.remotePeerConnectionInstance = action.payload.remotePeerConnectionInstance ?? null
        },

        tearDownConnection  (state,action:PayloadAction<UserSocketProps>){
          state.tearDown = action.payload.tearDown ?? state.tearDown
          state.remoteUserId = ''
          state.remoteCallerDetails = null
          state.localStream = null
          state.remoteStream = null
          state.offerCreated = false
          state.answerCreated = false
          state.offerReceived = false
          state.remoteConnected = false
          state.callMode =  null
          state.newInComingCall = false,
          state.isCallInitiated =false,
          state.locallyConnected  = false,
          state.localPeerConnectionInstance?.close()
          state.remotePeerConnectionInstance?.close()
          state.localPeerConnectionInstance = null
          state.remotePeerConnectionInstance = null,
          state.onCallAnswered = false,
          state.appointmentSessionStarted =false
          state.sessionID= null
        },

        updateRingTone (state,action:PayloadAction<UserSocketProps>){
          state.startPlayingRingTone = action.payload.startPlayingRingTone?? state.startPlayingRingTone
        },

        updateRemoteConnection(state,action:PayloadAction<UserSocketProps>){
          state.remoteConnected = action.payload.remoteConnected?? state.remoteConnected
        },

        updateCallMode(state,action:PayloadAction<UserSocketProps>){
          state.callMode = action.payload.callMode?? state.callMode
        },

        updatePeerNewConnectionInstance(state,action:PayloadAction<UserSocketProps>){
          state.newPeerConnectionInstance = action.payload.newPeerConnectionInstance?? state.newPeerConnectionInstance
        },

        updateCallInitialization(state,action:PayloadAction<UserSocketProps>){
          state.isCallInitiated = action.payload.isCallInitiated ?? state.isCallInitiated
        },

        updateIncomingCall(state,action:PayloadAction<UserSocketProps>){
          state.newInComingCall = action.payload.newInComingCall?? state.newInComingCall
        },

 
        updateUserChat(state,action:PayloadAction<UserSocketProps>){
          state.userChats = action.payload.userChats?? state.userChats
        },

        updateLocalConection(state,action:PayloadAction<UserSocketProps>){
          state.locallyConnected = action.payload.locallyConnected?? state.locallyConnected
        },

        updateCallAnswered(state,action:PayloadAction<UserSocketProps>){
          state.onCallAnswered = action.payload.onCallAnswered?? state.onCallAnswered
        },
        
        updateNewAppointmentNotification(state,action:PayloadAction<UserSocketProps>){
          state.isNewAppointmentNotification = action.payload.isNewAppointmentNotification ?? state.isNewAppointmentNotification
          state.totalAppointments = action.payload.totalAppointments ?? state.totalAppointments
        },

        updateAppointmentSession(state,action:PayloadAction<UserSocketProps>){
          state.appointmentSessionStarted = action.payload.appointmentSessionStarted?? state.appointmentSessionStarted
          state.sessionID = action.payload.sessionID?? state.sessionID
        },






    }

 })

 export const {connectSocket,updateUserCallingData,updateUserLocalStream,updateRemoteStream,updateOfferOrAnswer,updateRemoteDescription,updateLocalDescription,updatePeerConnectionInstance,tearDownConnection,updateRingTone,updateRemoteConnection,updateCallMode,updatePeerNewConnectionInstance,
  updateUserChat,updateIncomingCall,updateCallInitialization,updateLocalConection,updateCallAnswered,updateNewAppointmentNotification,updateAppointmentSession
 } =userSocketSlice.actions


 export default userSocketSlice.reducer