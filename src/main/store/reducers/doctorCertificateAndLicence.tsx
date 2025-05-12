
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

export interface DoctorCertificateAndLicenceProps {
  licenceDetails?: {
    fullName: string,
    LicenseNumber: string,
    license: string,
    expiration: string,
    country: string,
    docummentType:string,
    documentId: string,
    documentHoldName: string,
    documentImage: string,
    pictureWithDocument: string,
    doctorImage: string,
    photoWithLicence: string
  } | null,

  certification?: {
    fullName: '',
    institution: string,
    certificateNo: string,
    certificateImage?: string,
    date: string,
    type: "licence",
  } | null

  uploadLicenseDetails?: {
    fullName: string,
    LicenseNumber: string,
    license: string,
    expiration: string,
    country: string,
    docummentType:string,
    documentId: string,
    documentHoldName: string,
    documentImage: string,
    pictureWithDocument: string,
    doctorImage: string,
    type: "licence" | "certificate";
    photoWithLicence: string
  } | null
}




const initialState: DoctorCertificateAndLicenceProps = {
  licenceDetails: null,
  certification: null,

  uploadLicenseDetails:{  
    fullName: '',
    license: '',
    LicenseNumber: '',
    expiration: '',
    country: '',
    documentId: '',
    documentHoldName: '',
    docummentType:'',
    documentImage: '',
    pictureWithDocument: '',
    doctorImage: '',
    type: "licence",
    photoWithLicence:''}
}


const doctorCertificateAndLicenceSlice = createSlice({
  name: "doctorCertificateAndLicence",
  initialState,
  reducers: {
    cacheDoctorCertificateAndLicence(state, action: PayloadAction<DoctorCertificateAndLicenceProps>) {
      state.licenceDetails = action.payload.licenceDetails ?? state.licenceDetails!!
      state.certification = action.payload.certification ?? state.certification


    },
    cacheDoctorCertificateAndLicenceDetailsForUpload(state, action: PayloadAction<DoctorCertificateAndLicenceProps>) {
      state.uploadLicenseDetails = action.payload.uploadLicenseDetails ?? state.uploadLicenseDetails!!



    }

  }

})

export const { cacheDoctorCertificateAndLicence, cacheDoctorCertificateAndLicenceDetailsForUpload } = doctorCertificateAndLicenceSlice.actions


export default doctorCertificateAndLicenceSlice.reducer