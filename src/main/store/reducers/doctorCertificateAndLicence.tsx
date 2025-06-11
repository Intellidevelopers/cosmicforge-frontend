import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface DoctorCertificateAndLicenceProps {
  licenceDetails?: {
    fullName: string;
    LicenseNumber: string;
    license: string;
    expiration: string;
    country: string;
    docummentType: string;
    documentId: string;
    documentHoldName: string;
    documentImage: string;
    pictureWithDocument: string;
    doctorImage: string;
    photoWithLicence: string;
  } | null;

  certificationDetails?: {
    fullName: string;
    institution: string;
    certificateNo: string;
    date: string;
    certificate: string;
    country: string;
    docummentType: string;
    documentId: string;
    documentHoldName: string;
    documentImage: string;
    pictureWithDocument: string;
    doctorImage: string;
    photoWithCertification: string;
  } | null;

  uploadLicenseDetails?: {
    fullName: string;
    LicenseNumber: string;
    license: string;
    expiration: string;
    country: string;
    docummentType: string;
    documentId: string;
    documentHoldName: string;
    documentImage: string;
    pictureWithDocument: string;
    doctorImage: string;
    type: "licence" | "certificate";
    photoWithLicence: string;
  } | null;

  uploadCertificationDetails?: {
    fullName: string;
    institution: string;
    certificateNo: string;
    date: string;
    certificate: string;
    country: string;
    docummentType: string;
    documentId: string;
    documentHoldName: string;
    documentImage: string;
    pictureWithDocument: string;
    doctorImage: string;
    type: "licence" | "certificate";
    photoWithCertification: string;
  } | null;
}

const initialState: DoctorCertificateAndLicenceProps = {
  licenceDetails: null,
  certificationDetails: null,

  uploadLicenseDetails: {
    fullName: "",
    license: "",
    LicenseNumber: "",
    expiration: "",
    country: "Nigeria",
    documentId: "",
    documentHoldName: "",
    docummentType: "NIN No",
    documentImage: "",
    pictureWithDocument: "",
    doctorImage: "",
    type: "licence",
    photoWithLicence: "",
  },

  uploadCertificationDetails: {
    fullName: "",
    institution: "",
    certificateNo: "",
    date: "",
    certificate: "",
    country: "Nigeria",
    documentId: "",
    documentHoldName: "",
    docummentType: "NIN No",
    documentImage: "",
    pictureWithDocument: "",
    doctorImage: "",
    type: "certificate",
    photoWithCertification: "",
  },
};

const doctorCertificateAndLicenceSlice = createSlice({
  name: "doctorCertificateAndLicence",
  initialState,
  reducers: {
    cacheDoctorCertificateAndLicence(
      state,
      action: PayloadAction<DoctorCertificateAndLicenceProps>,
    ) {
      state.licenceDetails =
        action.payload.licenceDetails ?? state.licenceDetails!!;
      state.certificationDetails =
        action.payload.certificationDetails ?? state.certificationDetails;
    },
    cacheDoctorCertificateAndLicenceDetailsForUpload(
      state,
      action: PayloadAction<DoctorCertificateAndLicenceProps>,
    ) {
      state.uploadLicenseDetails =
        action.payload.uploadLicenseDetails ?? state.uploadLicenseDetails!!;
      state.uploadCertificationDetails =
        action.payload.uploadCertificationDetails ??
        state.uploadCertificationDetails!!;
    },
  },
});

export const {
  cacheDoctorCertificateAndLicence,
  cacheDoctorCertificateAndLicenceDetailsForUpload,
} = doctorCertificateAndLicenceSlice.actions;

export default doctorCertificateAndLicenceSlice.reducer;
