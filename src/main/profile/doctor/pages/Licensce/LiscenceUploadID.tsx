
import lock from '../../../../../assets/images/Security Lock green.png'

import CountryPicker from 'react-phone-number-input'
import { useDispatch, useSelector } from 'react-redux';
import { RootReducer } from '../../../../store/initStore';
import countryList from 'country-list'
import { cacheDoctorCertificateAndLicenceDetailsForUpload } from '../../../../store/reducers/doctorCertificateAndLicence';
import useGetImageBase64String from '../../../patient/hooks/useGetImageBase64String';

let LiscenceUploadID = () => {


    const dispatch = useDispatch()


    const liscenseDetails = useSelector((state: RootReducer) => state.doctorCertificateAndLicence.uploadLicenseDetails)

    const { getImageBase64String } = useGetImageBase64String()


    return <div className="flex flex-col gap-5  ">


        <div className="flex flex-col gap-1 ">
            <label htmlFor="country" className="">Country</label>

            <CountryPicker onCountryChange={(c) => {
                const country = countryList.getName(c!!)
                if (country) {
                    dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                        uploadLicenseDetails: {
                            ...liscenseDetails!!,
                            country: country


                        }
                    }))
                }
            }} defaultCountry='NG' name="country" id="country" className="bg-transparent  border-black p-2 border rounded-md"
                onChange={() => {

                    //setFormDetails({ ...formDetails, fullName: e.target.value })
                }}
            />
        </div>


        <div className="flex flex-col gap-1  ">
            <label htmlFor="LD Type" className="">I.D Type</label>

            <select className="bg-transparent  border-black p-2 border rounded-md" onChange={(e) => {

                dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                    uploadLicenseDetails: {
                        ...liscenseDetails!!,
                        docummentType: e.target.value


                    }
                }))

            }}>

                <option>NIN No</option>
                <option>Driver's License</option>
                <option>Voter's Card</option>
                <option>Internation Passport</option>
            </select>




        </div>

        <div className="flex flex-col gap-1">
            <label htmlFor="LD Number" className="">I.D Number</label>
            <input type="text" name="LD Number" id="LD Number" className="border-black p-2 border rounded-md bg-transparent"
                onChange={(e) => {

                    dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                        uploadLicenseDetails: {
                            ...liscenseDetails!!,
                            documentId: e.target.value


                        }
                    }))
                }}
            />
        </div>


        <div className="flex flex-col gap-1">
            <label htmlFor="Holder Name" className="">Holder Name</label>
            <input type="text" name="Holder Name" id="Holder Name" className="border-black p-2 border rounded-md bg-transparent"
                onChange={(e) => {

                    dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                        uploadLicenseDetails: {
                            ...liscenseDetails!!,
                            documentHoldName: e.target.value


                        }
                    }))
                }}
            />
        </div>


        <div className="flex flex-col gap-1  ">
            <label htmlFor="ld" className="">I.D</label>

            <input type="file" name="ld" id="ld" className="border-black p-2 border rounded-md bg-transparent"




                onChange={async (e) => {




                    if (e.target.files)

                        dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                            uploadLicenseDetails: {
                                ...liscenseDetails!!,
                                documentImage: await getImageBase64String(e.target.files[0]!!)


                            }
                        }))


                }}
            />
        </div>


        <div className="flex flex-col gap-1  ">
            <label htmlFor="ldPhoto" className="">Hold I.D and take a picture </label>

            <input type="file" name="ldPhoto" id="ldPhoto" className="border-black p-2 border rounded-md bg-transparent"

                onChange={async (e) => {

                    if (e.target.files)
                        dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({
                            uploadLicenseDetails: {
                                ...liscenseDetails!!,
                                pictureWithDocument: await getImageBase64String(e.target.files[0]!!)


                            }
                        }))


                }}
            />
        </div>



        <p className="p-1 text-sm ">To verify your License, we require you to provide a government approved ID copy. This will validate your operations with Cosmicforge Health Net. </p>
        <p className="p-1 text-sm "><b>Please Note;</b>  Your ID is subject to verification. We will reach out to you via email once verification is completed and confirmed.</p>
        <p className="text-green-800 bg-green-200 w-fit px-2 py-1 rounded-md text-sm font-bold">
            <img src={lock} alt="lock" className="w-4 inline-block" />
            All data is safely stored and encrypted</p>
    </div>
}


export default LiscenceUploadID