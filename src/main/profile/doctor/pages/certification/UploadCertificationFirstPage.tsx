
import lock from '../../../../../assets/images/Security Lock green.png'
import useGetImageBase64String from '../../../patient/hooks/useGetImageBase64String';
import { useDispatch, useSelector } from 'react-redux';
import { cacheDoctorCertificateAndLicenceDetailsForUpload } from '../../../../store/reducers/doctorCertificateAndLicence';
import { RootReducer } from '../../../../store/initStore';



let UploadCertificationFirstPage = () => {


    const dispatch = useDispatch()


    const liscenseDetails = useSelector((state: RootReducer) => state.doctorCertificateAndLicence.uploadLicenseDetails)






    const { getImageBase64String } = useGetImageBase64String()



    return <div className="flex flex-col gap-5  ">


        <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="">Full Name</label>

            <input type="text" name="fullName" id="fullName" className="bg-transparent border-black p-2 border rounded-md"
                onChange={(e) => {

                    if (liscenseDetails !== null)
                        dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                            uploadLicenseDetails: {
                                ...liscenseDetails!!,
                                fullName: e.target.value


                            }
                        }))


                }}
            />
        </div>




        <div className="flex flex-col gap-1  ">

            <label htmlFor="liscenseNo" className="">Licence Number</label>

            <input type="text" name="liscenseNo" id="liscenseNo" className="border-black p-2 border rounded-md bg-transparent"

                onChange={(e) => {
                    dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                        uploadLicenseDetails: {
                            ...liscenseDetails!!,
                            LicenseNumber: e.target.value


                        }
                    }))

                }}
            />
        </div>




        <div className="flex flex-col gap-1">
            <label htmlFor="expiration" className="font-bold">Expiration</label>
            <input type="text" name="expiration" id="expiration" className="border-black p-2 border rounded-md bg-transparent"
                onChange={(e) => {

                    dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                        uploadLicenseDetails: {
                            ...liscenseDetails!!,
                            expiration: e.target.value


                        }
                    }))

                }}
            />
        </div>



        <div className="flex flex-col gap-1  ">
            <label htmlFor="licence" className="">Licence </label>

            <input type="file" name="lincense" id="lincense" className="border-black p-2 border rounded-md bg-transparent"




                onChange={async (e) => {
                    
                       


                    if (e.target.files)

                        dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                            uploadLicenseDetails: {
                                ...liscenseDetails!!,
                                license: await getImageBase64String(e.target.files[0]!!)


                            }
                        }))


                }}
            />
        </div>


        <div className="flex flex-col gap-1  ">
            <label htmlFor="licence" className="">Hold Licensce and snap </label>

            <input type="file" name="lincense" id="lincense" className="border-black p-2 border rounded-md bg-transparent"
                onChange={async (e) => {

                    if (e.target.files)
                        dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                            uploadLicenseDetails: {
                                ...liscenseDetails!!,
                                photoWithLicence: await getImageBase64String(e.target.files[0]!!)


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