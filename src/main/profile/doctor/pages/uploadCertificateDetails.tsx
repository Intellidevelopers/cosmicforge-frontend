import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile"
import lock from '../../../../assets/images/Security Lock green.png'
import {  useState } from "react"
import success from '../../../../assets/images/uploadSccessful.png'
import useGetImageBase64String from "../../patient/hooks/useGetImageBase64String"
//import { RootReducer, /*store*/ } from "../../../store/initStore"
//import { useSelector } from "react-redux"
import Loader from "../../../generalComponents/Loader"
//import { cacheDoctorCertificateAndLicence } from "../../../store/reducers/doctorCertificateAndLicence"



const UploadCertificateDetails = () => {

  // const [fullName,setFullName] = useState('')
  // const [institution,setInstitution] = useState('')
  // const [certificateNo,setCertificateNo] = useState('')
  // const [date,setDate] = useState('')



  
    
  
    

  const [showUploadComp, setShowUploadComp] = useState(false)
  const [successfulUpload, /*setSuccessfulUpload*/] = useState(false)

  const [loading, /*setLoading*/] = useState<boolean>(false)

  const { getImageBase64String } = useGetImageBase64String()

 // const user = useSelector((state: RootReducer) => state.user)

  const [errorMessage, setErrorMessage] = useState<string>('')



  const [formDetails, setFormDetails] = useState<{
    fullName: string;
    institution: string;
    certificateNo?: string;
    licenceNo?: string;
    licenceImage?: string;
    certificateImage?: string;
    date: string;
    type: "licence" | "certificate";
    photoWithLicence?: string
  }>({
    fullName: '',
    institution: '',
    certificateImage: '',
    certificateNo: '',
    date: '',
    type: "certificate",

  })




  return (
    <div className="bg-white relative z-1">
      <DoctorHomeNavBar title="Upload Certificate" />
      <DoctorNavBarMobile title="Upload Certificate" />
      <div className="p-4 space-y-4">
        <div className="flex flex-col gap-1  ">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="font-bold">Type of Certificate</label>
            <input type="text" name="fullName" id="fullName" className="border-black p-2 border rounded-md"
              onChange={(e) => {
                setErrorMessage('')
                setFormDetails({ ...formDetails, fullName: e.target.value })
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="institution" className="font-bold">Institution</label>
            <input type="text" name="institution" id="institution" className="border-black p-2 border rounded-md"

              onChange={(e) => {
                setErrorMessage('')
                setFormDetails({ ...formDetails, institution: e.target.value })
              }}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="certificateNo" className="font-bold">Certificate No</label>
            <input type="text" name="certificateNo" id="certificateNo" className="border-black p-2 border rounded-md"
              onChange={(e) => {
                setErrorMessage('')
                setFormDetails({ ...formDetails, certificateNo: e.target.value })
              }}
            />
          </div>

          <div className="flex flex-col gap-1 mt-2">
            <label htmlFor="license" className="font-bold">Certificate</label>
            <input type="file" name="date" id="date" accept=".png, .jpg, .jpeg, .gif, .svg" className="border-black p-2 border rounded-md"
              // onChange={handleChange}

              onChange={async (e) => {

                try {
                  setErrorMessage('')

                  if (e.target.files) {
                    const imageBase64 = await getImageBase64String(e.target.files[0])
                    setFormDetails({ ...formDetails, certificateImage: imageBase64 })

                  }

                } catch (error) {

                }




              }}
            />
          </div>

          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="font-bold">Date</label>
            <input type="text" name="date" id="date" className="border-black p-2 border rounded-md"
              onChange={(e) => {
                setErrorMessage('')
                setFormDetails({ ...formDetails, date: e.target.value })
              }}
            />
          </div>
          <p className="p-1 text-sm ">To verify your certificate, we require you to provide an original certificate copy. This will validate your operations with Cosmicforge Health Net.</p>
          <p className="p-1 text-sm "><b>Please Note;</b> Your certificcate is subject to verification with the necessary healthcare body. We will reach out to you via email once verification is complete and confirmed.</p>
          <p className="text-green-800 bg-green-200 w-fit px-2 py-1 rounded-md text-sm font-bold">
            <img src={lock} alt="lock" className="w-4 inline-block" />
            All data is safely stored and encrypted</p>
        </div>


        <div className="flex justify-center place-items-center gap-6">
          <button type="button"
            className="min-w-[100px] p-2 bg-cosmic-primary-color font-bold text-white rounded-md"
            onClick={async () => {


              const isAllDataNotComplete = Object.entries(formDetails).some(([, value]) => {

                return value === '' || value === undefined
              })


              if (isAllDataNotComplete) {
                setErrorMessage('Please enter all required details needed.')

                return
              }

             /* try {

                setLoading(true)
                setShowUploadComp(true)

                

                const result = await uploadCertificateOrLicence(formDetails, user.data?.token!!)

                if (result.status === 200) {

                  store.dispatch(cacheDoctorCertificateAndLicence({ licence: null, certification: result.data.certification }))
                  setLoading(false)
                  setSuccessfulUpload(true)
                }



              } catch (error: any) {


                if (error.name === 'AbortError') {
                  setLoading(false)
                  setShowUploadComp(false)
                  setErrorMessage('Timeout try again.')
                  return
                }
                setLoading(false)
                setShowUploadComp(false)
                setErrorMessage(error.message)
              }*/



            }}
          > Upload Certificate</button>

          {
            errorMessage && <p className="text-red-600">{errorMessage}</p>
          }
        </div>


      </div>

      {showUploadComp && <div className='absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25 flex justify-center z-[900] items-center p-4'>

        <div className='flex flex-col  justify-between items-center bg-white w-[60%] rounded-md shadow-lg shadow-black  z-[200]    max-w-[600px] h-[400px] p-4'>

          <div className="flex justify-between items-center w-full">
            <p className="font-bold">Upload File</p>

          </div>
          <div className='flex flex-col justify-center items-center'>

            {!loading && successfulUpload &&
              <div className="flex w-full justify-center items-center cursor-default">
                <div className="flex flex-col justify-center w-full items-center gap-1 border-black border-2 p-4 border-dashed max-w-[400px]">
                  <img src={success} alt="success" />
                  <p className="text-xs">File Upload Successful</p>
                  <p className="mt-3 underline decoration-cosmic-color-lightBlue" onClick={() => {
                    setShowUploadComp(false)
                  }}>Cancel</p>
                </div>
              </div>}
            {
              loading && <div>
                <label htmlFor="liscence" className=" mr-2 mb-14 ">Uploading...</label>

                {
                  <Loader size="80px" />
                }
              </div>

            }

          </div>
          <div className="flex flex-col w-full border-t border-gray-400 gap-4">


          </div>
        </div>
      </div>}

    </div>
  )
}

export default UploadCertificateDetails