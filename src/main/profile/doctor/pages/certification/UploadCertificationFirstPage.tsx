
import lock from '../../../../../assets/images/Security Lock green.png'
import useGetImageBase64String from '../../../patient/hooks/useGetImageBase64String';
import { useDispatch, useSelector } from 'react-redux';
import { cacheDoctorCertificateAndLicenceDetailsForUpload } from '../../../../store/reducers/doctorCertificateAndLicence';
import { RootReducer } from '../../../../store/initStore';



let UploadCertificationFirstPage = () => {


    const dispatch = useDispatch()


    const certificateDetails = useSelector((state: RootReducer) => state.doctorCertificateAndLicence.uploadCertificationDetails)






    const { getImageBase64String } = useGetImageBase64String()



    return <div className="flex flex-col gap-5  ">


        <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="">Full Name:</label>

            <input type="text" name="fullName" id="fullName" className="bg-transparent border-black p-2 border rounded-md"
                onChange={(e) => {

                    if (certificateDetails !== null)
                        dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                           uploadCertificationDetails: {
                                ...certificateDetails!!,
                                fullName:e.target.value


                            }
                        }))


                }}
            />
        </div>




        <div className="flex flex-col gap-1  ">

            <label htmlFor="liscenseNo" className="">Institution:</label>

            <input type="text" name="institution" id="institution" className="border-black p-2 border rounded-md bg-transparent"

                onChange={(e) => {
                    dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                        uploadCertificationDetails: {
                            ...certificateDetails!!,
                           institution:e.target.value


                        }
                    }))

                }}
            />
        </div>




        <div className="flex flex-col gap-1">
            <label htmlFor="certificateNo" className="">Certificate No:</label>
            <input type="text" name="certificateNo" id="certificateNo" className="border-black p-2 border rounded-md bg-transparent"
                onChange={(e) => {

                    dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                       uploadCertificationDetails: {
                            ...certificateDetails!!,
                            certificateNo: e.target.value


                        }
                    }))

                }}
            />
        </div>



        <div className="flex flex-col gap-1">

            <label htmlFor="date" className="">Date:</label>

            <input type="text" name="date" id="certificateNo" className="border-black p-2 border rounded-md bg-transparent"
               
               onChange={(e) => {

                    dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                       uploadCertificationDetails: {
                            ...certificateDetails!!,
                            date: e.target.value


                        }
                    }))

                }}
            />
        </div>



        <div className="flex flex-col gap-1  ">
            <label htmlFor="certificate" className="">Certificate:</label>

            <input type="file" name="certificate" id="certificate" className="border-black p-2 border rounded-md bg-transparent"




                onChange={async (e) => {
                    
                       


                    if (e.target.files)

                        dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                            uploadCertificationDetails: {
                                ...certificateDetails!!,
                                certificate: await getImageBase64String(e.target.files[0]!!)


                            }
                        }))


                }}
            />
        </div>


        <div className="flex flex-col gap-1  ">

            <label htmlFor="cfs" className="">Hold Ceertificate and snap </label>

            <input type="file" name="cfs" id="cfs" className="border-black p-2 border rounded-md bg-transparent"
               
               onChange={async (e) => {

                    if (e.target.files)
                        dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                            uploadCertificationDetails: {
                                ...certificateDetails!!,
                                photoWithCertification: await getImageBase64String(e.target.files[0]!!)


                            }
                        }))


                }}
            />
        </div>




        <p className="p-1 text-sm ">To verify your certificate, we require you to provide an original certificate copy. This will validate your operations with Cosmicforge Health Net.</p>
        <p className="p-1 text-sm "><b>Please Note;</b> Your certificcate is subject to verification with the necessary healthcare body. We will reach out to you via email once verification is complete and confirmed.</p>
        <p className="text-green-800 bg-green-200 w-fit px-2 py-1 rounded-md text-sm font-bold">
            <img src={lock} alt="lock" className="w-4 inline-block" />
            All data is safely stored and encrypted</p>
    </div>


}



export default UploadCertificationFirstPage