import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile"
import lock from '../../../../assets/images/Security Lock green.png'
import React, { useEffect, useState } from "react"
import Upload from "../components/upload"
import success from '../../../../assets/images/uploadSccessful.png'

const UploadLiscenceDetails = () => {

  // const [fullName,setFullName] = useState('')
  // const [institution,setInstitution] = useState('')
  // const [certificateNo,setCertificateNo] = useState('')
  // const [date,setDate] = useState('')
  const [formIsValid,setFormIsValid] = useState(false)
  const [showUploadComp,setShowUploadComp] = useState(false)
  const [uploadedFile, setUploadedFile ]= useState<File|null>(null)


  const hideComp = ()=>{
    setShowUploadComp(false)
  }

  const handleSubmit = ()=>{
    if (formIsValid && uploadedFile) {
      console.log(formDetails,uploadedFile)
    }
    else if(formIsValid && !uploadedFile){
      setShowUploadComp(true)
    }
    else if(!formIsValid && !uploadedFile){
      setShowUploadComp(true)
    }
  }
  const handleFileUpload = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const uploadedFile = e.target.files?.[0];
    if (uploadedFile) {
      setUploadedFile(uploadedFile)
    //   setPreview(URL.createObjectURL(uploadedFile))
    }
  }

  const [formDetails,setFormDetails] = useState({
    fullName:'',
    institution:'',
    certificateNo:'',
    date:''
  })

  const validateForm = ()=>{
    if (formDetails.fullName !== '' &&
        formDetails.institution !== '' &&
        formDetails.certificateNo!== '' &&
        formDetails.date !== ''
    ) {
      setFormIsValid(true)
    } else{
      return
    }
  }

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    if (e) {
      const {name,value} = e.target
      setFormDetails({...formDetails,[name]:value})
      console.log(formDetails)
    }
  }
  useEffect(()=>{
    validateForm()
    // console.log(formDetails)
    // console.log(formIsValid)
  }, [formDetails])

  useEffect(()=>{
    setShowUploadComp(false)
  },[uploadedFile])

  return (
    <div className="bg-white relative z-1">
       <DoctorHomeNavBar title="Upload Liscence"/>
       <DoctorNavBarMobile title="Upload Liscence"/>
       <div className="p-4 space-y-4">
        <div className="flex flex-col gap-1  ">
          <div className="flex flex-col gap-1">
            <label htmlFor="fullName" className="font-bold">Full Name</label>
            <input type="text" name="fullName" id="fullName" className="border-black p-2 border rounded-md"
            onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="institution" className="font-bold">Institution</label>
            <input type="text" name="institution" id="institution" className="border-black p-2 border rounded-md"
            onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="certificateNo" className="font-bold">Certificate No</label>
            <input type="text" name="certificateNo" id="certificateNo" className="border-black p-2 border rounded-md"
            onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="date" className="font-bold">Date</label>
            <input type="text" name="date" id="date" className="border-black p-2 border rounded-md"
            onChange={handleChange}
            />
          </div>
          <p className="p-1 text-sm ">To verify your certificate, we require you to provide an original certificate copy. This will validate your operations with Cosmicforge Health Net.</p>
          <p className="p-1 text-sm "><b>Please Note;</b> Your certificcate is subject to verification with the necessary healthcare body. We will reach out to you via email once verification is complete and confirmed.</p>
          <p className="text-green-800 bg-green-200 w-fit px-2 py-1 rounded-md text-sm font-bold">
            <img src={lock} alt="lock"  className="w-4 inline-block"/>
            All data is safely stored and encrypted</p>
        </div>
        {uploadedFile && 
        <div className="flex w-full justify-center items-center">
          <div className="flex flex-col justify-center w-[90%] items-center gap-1 border-black border-2 p-4 border-dashed max-w-[400px]">
            <img src={success} alt="success" />
            <p className="text-xs">File Upload Successful</p>
          </div>
        </div>}
        <button type="button"
        className="min-w-[100px] p-2 bg-cosmic-primary-color font-bold text-white rounded-md"
        onClick={handleSubmit}
        >{formIsValid && uploadedFile ? 'Submit' : 'Upload Certificate' }</button>
       </div>
       {showUploadComp && <Upload uploadedFile={uploadedFile} hideComp={hideComp} handleFileUpload={handleFileUpload}/>}
    </div>
  )
}

export default UploadLiscenceDetails