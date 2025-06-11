// import React, { useState } from "react"
import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar";
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootReducer } from "../../../store/initStore";

const LiscenceUpload = () => {
  const navigate = useNavigate();
  // const [uploadedFile, setUploadedFile ]= useState<File|null>(null)
  // const [preview, setPreview ]= useState<string|undefined>()
  // const handleFileUpload = (e:React.ChangeEvent<HTMLInputElement>)=>{
  //   const uploadedFile = e.target.files?.[0];
  //   if (uploadedFile) {
  //     setUploadedFile(uploadedFile)
  //     setPreview(URL.createObjectURL(uploadedFile))
  //   }

  // }

  const licenceDetails = useSelector(
    (state: RootReducer) => state.doctorCertificateAndLicence,
  );

  return (
    <div>
      <DoctorHomeNavBar title="Liscences" />
      <DoctorNavBarMobile title="Liscences" />
      <div className="p-4 flex flex-col gap-4">
        {/* <input type="file" accept="image/*, application/pdf" className="hidden" id="liscence" onChange={handleFileUpload}/> */}
        <button
          type="button"
          className="bg-cosmic-primary-color w-fit text-white p-2 font-bold rounded-md"
          onClick={() => {
            navigate("/doctor/liscence-details-upload");
          }}
        >
          Upload New
        </button>
        <div className={`bg-white  rounded-md shadow-md  p-4 `}>
          <div
            className={`max-w-full bg-white overflow-hidden  p-4 max-h-[60vh] `}
          >
            {
              <img
                src={licenceDetails.licenceDetails?.license ?? "/"}
                alt="Uploaded Image"
                className="w-full object-cover max-h-[60dvh]"
              />
            }
            {/* {uploadedFile && uploadedFile.type ==='application/pdf' && <embed src={preview} type="application/pdf" width='100%' height='300px' className="overflow-hidden" />} */}
          </div>
          <div className="flex justify-between flex-wrap items-center border-t border-black mt-2 w-full px-4">
            <p className="font-bold">
              {licenceDetails.licenceDetails?.fullName ?? "not uploaded yet."}
            </p>
            <p className="font-extralight">
              {licenceDetails.licenceDetails?.LicenseNumber ?? "no upload yet"}
            </p>
            <p className="font-extralight">
              {licenceDetails.licenceDetails?.expiration ?? "no upload yet"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiscenceUpload;
