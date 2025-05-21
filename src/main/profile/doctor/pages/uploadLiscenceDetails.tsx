import DoctorHomeNavBar from "../../../home/component/doctor/DoctorHomeNavBar"
import DoctorNavBarMobile from "../../../home/component/doctor/DoctorNavBarMobile"

import { MutableRefObject, useEffect, useRef, useState } from "react"
import success from '../../../../assets/images/successfulIUploadmage.png'
import Loader from "../../../generalComponents/Loader"

import { useSelector } from "react-redux"
import { RootReducer, store } from "../../../store/initStore"
import { cacheDoctorCertificateAndLicence, cacheDoctorCertificateAndLicenceDetailsForUpload } from "../../../store/reducers/doctorCertificateAndLicence"
import '@mediapipe/face_detection'
import '@tensorflow/tfjs-core'
import '@tensorflow/tfjs-backend-webgl'
import * as faceDtection from '@tensorflow-models/face-detection'
import { Outlet, useLocation, useNavigate } from "react-router-dom"
import Textextractor from 'tesseract.js'
import { uploadLicense } from "../../service"
import { Mutex } from 'async-mutex'


const UploadLiscenceDetails = () => {


  const mutex = new Mutex()

  // const [fullName,setFullName] = useState('')
  // const [institution,setInstitution] = useState('')
  // const [certificateNo,setCertificateNo] = useState('')
  // const [date,setDate] = useState('')


   

  const navigate = useNavigate()

  const [processing, setProcessing] = useState(false)

  const [capturedImage, setCapturedImage] = useState('')
  const { pathname } = useLocation()

  const path = pathname?.split('/')[3] ?? ''

  const [imageCaptured,] = useState(false)

  const [videoStream, setVideoStream] = useState<MediaStream | null>(null)
  const videoRef: MutableRefObject<HTMLVideoElement | null> = useRef(null)
  const canvasRef: MutableRefObject<HTMLCanvasElement | null> = useRef(null)

  const liscenseDetails = useSelector((state: RootReducer) => state.doctorCertificateAndLicence.uploadLicenseDetails)


  const [faceDetected, setFaceDetected] = useState(false)
  const [showUploadComp, setShowUploadComp] = useState(false)
  const [successfulUpload, setSuccessfulUpload] = useState(false)

  const [startFaceVerificationProcess, setStartFaceVerificationProcess] = useState(false)

  const [loading, setLoading] = useState<boolean>(false)



  const user = useSelector((state: RootReducer) => state.user)

  const [errorMessage, setErrorMessage] = useState<string>('')

  const [activeState, setActivetate] = useState(0)

  const [processingImage, setProcessingImage] = useState(false)






  const detectImage = async (imageBase64: string) => {


  
    const release = await mutex.acquire()

    const image = document.createElement('img')
    image.src = imageBase64



   setProcessingImage(true)


    try {


      const model = faceDtection.SupportedModels.MediaPipeFaceDetector




      const detector = await faceDtection.createDetector(model, { runtime: 'tfjs' })


      const faceOneEstimate = await detector.estimateFaces(image)


      const faceOneData: any[] = []

     

      if (faceOneEstimate) {

     

        faceOneEstimate[0].keypoints.forEach((e) => {

          faceOneData.push([Math.ceil(e.x), Math.ceil(e.y)])

        })



      }


      if (faceOneData.length > 0) {
        setCapturedImage(imageBase64)
          setFaceDetected(true)
          return
      }

      setFaceDetected(false)
      setProcessingImage(false)



    } catch (error) {
      setFaceDetected(false)
      setProcessingImage(false)
      // setErrorMessage('Image provided does not match face on the id. Please provide a clear id and image of yourself.')
      // setShowUploadComp(false)
      // setImageValidated(false)
      // setLoading(false)
    }finally{
      release()
    }



  }




  /*const detectImageFromLiveCam = async (imageBase64: string) => {
    const image = document.createElement('img')
    image.src = imageBase64

    const licenceImage = document.createElement('img')
     licenceImage.src = liscenseDetails?.license!!

    try {


      const model = faceDtection.SupportedModels.MediaPipeFaceDetector




      const detector = await faceDtection.createDetector(model, { runtime: 'tfjs' })


      const faceOneEstimate = await detector.estimateFaces(image)

      if (faceOneEstimate && faceOneEstimate[0].keypoints.length > 0) {

        let faceDetails:any[] = []

        faceOneEstimate[0].keypoints.forEach((e) => {
          if (e.name === 'rightEye') {
            faceDetails.push([Math.ceil(e.x), Math.ceil(e.y)])
          }

          if (e.name === 'leftEye') {
            faceDetails.push([Math.ceil(e.x), Math.ceil(e.y)])
          }

          if (e.name === 'noseTip') {
            faceDetails.push([Math.ceil(e.x), Math.ceil(e.y)])
            return
          }
        })

   

        setFaceDetected(true)
      } else {
        setFaceDetected(false)
      }


    } catch (error) {

      setFaceDetected(false)

    }

  }*/







  useEffect(() => {

    if (startFaceVerificationProcess)
      (async () => {

        navigator.mediaDevices.getUserMedia({
          audio: false,
          video: true
        }).then((stream) => {
          setVideoStream(stream)
          if (videoRef.current) {
            videoRef.current.srcObject = stream
          }
        })
      })()
    else if (videoStream) {
      videoStream.getTracks().forEach((track) => {
        track.stop()
      })
    }

  }, [startFaceVerificationProcess])




  /*let captureImage = () => {

    const video = videoRef.current
    const canvas = canvasRef.current

    if (video && canvas) {

      const canvasContext = canvas.getContext('2d')

      canvasContext?.drawImage(video, 0, 0, canvas.width, canvas.height)
      setCapturedImage(canvas.toDataURL('image/png'))
      setImageCaptured(true)
    }

  }*/





  useEffect(() => {
    if (path === '') {
      setActivetate(0)
      return
    }
    if (path === 'id') {
      setActivetate(1)
      return
    }
    if (path === 'face-id') {
      setActivetate(2)
      return
    }
  }, [path])




  useEffect(() => {

    if (videoStream && startFaceVerificationProcess)
      (async () => {

        const video = videoRef.current
        const canvas = canvasRef.current


        if (video && canvas) {

          const canvasContext = canvas.getContext('2d')


          const draw = async () => {

            canvasContext?.drawImage(video, 0, 0, canvas.width, canvas.height)

            await detectImage(canvas.toDataURL('image/png'))

            requestAnimationFrame(draw)


          }

          if (!faceDetected && !processingImage) {

            await draw()

          }

        }


      })()

  }, [videoStream])





  return (


    <div className="bg-[#F5F5F5] font-poppins relative z-1 h-screen overflow-y-auto pb-4  ">


      <DoctorHomeNavBar title="Upload Liscence" />
      <DoctorNavBarMobile title="Upload Liscence" />



      <div className=' hidden md:flex  cursor-default  place-items-center gap-3 m-5' onClick={() => {
        navigate(-1)
      }}>
        <i className='fa fa-arrow-left fa-2x' />
        <p>back</p>
      </div>






      <div className="p-8 space-y-4 ">


        <Outlet />











      </div>





      <div className="w-full relative flex justify-center gap-1 p-2">


        {
          new Array(3).fill(0).map((_, index) => (
            (index === activeState) ? <div className="w-[50%] bg-cosmic-primary-color h-[10px] rounded-r-md rounded-l-md " /> :
              <div className="w-[50%] bg-cosmic-light-color-call h-[10px] rounded-r-md rounded-l-md " />

          ))
        }



      </div>





      <div className="md:flex justify-center place-items-center gap-6 mt-6">


        <button type="button"
          className="min-w-[100px] p-2 bg-cosmic-primary-color font-bold text-white rounded-md mb-2"
          onClick={async () => {
            setErrorMessage('')



            if (path === '') {

              if (liscenseDetails && (!liscenseDetails.fullName || !liscenseDetails.LicenseNumber || !liscenseDetails.expiration || !liscenseDetails.license && !liscenseDetails.photoWithLicence)) {
                setErrorMessage("Please enter the fields completely.")
                return
              }



              {
                /**
                 * Extract text from the licence to check if it is valid
                 */
              }
              setProcessing(true)

              Textextractor.recognize(liscenseDetails?.license!!, 'eng',
                {}).then(({ data: { text } }) => {
                  const isLicenceValid = text.trim().toLowerCase().includes('Federal republic of nigeria'.trim().toLowerCase()) || text.trim().toLowerCase().includes('Medical & Dental Council Of Nigria'.trim().toLowerCase())
                  setProcessing(false)
                  if (isLicenceValid) {

                    navigate('/doctor/liscence-details-upload/id')

                  } else {
                    setErrorMessage("Invalid license provided.")
                  }

                }).catch(() => setErrorMessage("Invalid license provided."))

              return
            }

          

            if (path === 'id') {

              if (liscenseDetails && (!liscenseDetails.country || !liscenseDetails.docummentType || !liscenseDetails.documentId || !liscenseDetails.documentHoldName || !liscenseDetails.documentImage || !liscenseDetails.pictureWithDocument)) {
                setErrorMessage("Please enter the fields completely.")
                return
              }




              {
                /**
                 * Extract text from the licence to check if it is valid
                 */
              }

              setProcessing(true)

              Textextractor.recognize(liscenseDetails?.documentImage!!, 'eng',
                {}).then(({ data: { text } }) => {
                  const isLicenceValid = text.trim().toLowerCase().includes('Federal republic of nigeria'.trim().toLowerCase())
                  setProcessing(false)
                  if (isLicenceValid) {

                    navigate('/doctor/liscence-details-upload/face-id')

                  } else {
                    setErrorMessage("Invalid document  provided.")
                  }

                }).catch(() => setErrorMessage("Invalid document provided."))

              return
            }



            if (path === 'face-id') {



              if (liscenseDetails && (!liscenseDetails.country || !liscenseDetails.docummentType || !liscenseDetails.documentId || !liscenseDetails.documentHoldName || !liscenseDetails.documentImage || !liscenseDetails.pictureWithDocument || !liscenseDetails.fullName || !liscenseDetails.LicenseNumber || !liscenseDetails.expiration || !liscenseDetails.license && !liscenseDetails.photoWithLicence)) {
                setErrorMessage("One or teo fields are missing check please.")
                return
              }



              setStartFaceVerificationProcess(true)


              return
            }





            /*
                  if (isAllDataNotComplete) {
                    setErrorMessage('Please enter all required details needed.')
            
                    return
                  }
            
            
                  try {
            
                    setLoading(true)
                    setShowUploadComp(true)
                    await detectImage(formDetails.licenceImage!!, formDetails.photoWithLicence!!)
            
            
            
                  } catch (error) {
                    alert(error)
                  }*/







          }}
        >{(path !== 'face-id') ? 'Next' : 'Verify'}</button>

        {
          errorMessage && <p className="text-red-600">{errorMessage}</p>
        }

        {
          processing && <div>

            <Loader size="40px" />
          </div>
        }
      </div>


      {
        /**
         * Show upload modal
         */
      }




      <div className={` ${startFaceVerificationProcess || showUploadComp ? 'flex' : 'hidden'} absolute top-[70px] bg-black h-screen w-screen bg-opacity-15  place-items-center justify-center`}>


        <div className={`${showUploadComp ? 'hidden' : 'block'} md:w-[500px] min-h-[530px] bg-white p-4 mt-3 `}>

          <div className="w-full relative flex place-items-center">
            <p className="font-bold">Face Verification</p>
            <i className="fa fa-times absolute right-0" onClick={() => {
              setStartFaceVerificationProcess(false)
            }} />
          </div>


          <p className="font-light text-center mt-10">Face the camera and hold your device steady.</p>


          <div className={` w-full  flex-col place-items-center justify-center mt-8 h-fit `}>

            <div className="ellipse   ">
              {
                <video ref={videoRef} className={`ellipse border-[2px] ${faceDetected ? 'border-green-600' : 'border-red-700'}  object-fill h-full w-full bg-black bg-opacity-20`} autoPlay />

              }

              <canvas ref={canvasRef} className={`${imageCaptured ? 'visible' : 'invisible'}  ellipse border-[2px]  border-red-700 object-fill h-full w-full bg-black bg-opacity-20`} />



            </div>




            <div className="w-full flex mt-4 gap-3">

              {
                new Array(3).fill(0).map(() => (

                  <div className="w-[50%] bg-cosmic-primary-color h-[6px] rounded-r-md rounded-l-md " />

                ))
              }
            </div>

            {
              !faceDetected && <p className="mt-6">Hold on while the system verify your face</p>
            }





            {

              faceDetected && <div className="w-full flex justify-center mt-4">
                <button type="button"
                  className="min-w-[100px] p-2 bg-cosmic-primary-color font-bold text-white rounded-md" onClick={async () => {

                    if (capturedImage && liscenseDetails) {


                      const updatedData = {
                        ...liscenseDetails,
                        doctorImage: capturedImage
                      }




                      try {
                        setStartFaceVerificationProcess(false)
                        setLoading(true)
                        setShowUploadComp(true)
                        const result = await uploadLicense(updatedData, user.data?.token!!)

                        if (result.status === 200) {

                          store.dispatch(cacheDoctorCertificateAndLicence({ licenceDetails: result.data.licenseDetails, }))
                          setLoading(false)
                          setSuccessfulUpload(true)
                          return
                        }
                        setLoading(false)
                        setShowUploadComp(false)
                        setErrorMessage('Failed to upload.')



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
                      }




                    }

                  }}>

                  Verify Now
                </button>
              </div>
            }



          </div>




        </div>


        {
          !startFaceVerificationProcess && showUploadComp &&

          <div className=' absolute top-0 bottom-0 left-0 right-0 bg-black bg-opacity-25 flex justify-center z-[900] items-center p-4'>

            <div className='flex flex-col  justify-between items-center bg-white w-[60%] rounded-md shadow-lg shadow-black  z-[200]    max-w-[600px] h-[400px] p-4'>

              <div className="flex justify-between items-center w-full relative">
                <p className="font-bold">Upload File</p>
                <i className="fa fa-times absolute right-2" onClick={() => {
                  if (successfulUpload) {
                    store.dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({ licenceDetails: null }))

                  }
                  setShowUploadComp(false)
                }} />
              </div>




              {
                !startFaceVerificationProcess && !loading && successfulUpload &&
                <div className="flex w-full justify-center items-center cursor-default">
                  <div className="flex flex-col justify-center w-full items-center  gap-6 p-4  max-w-[400px]">
                    <img src={success} alt="success" />


                    <p className="text-xs">Your verification has been submitted successfully.</p>
                    <p>You will receive a confirmation email upon eveluation.</p>

                    <p className="mt-3 p-3 bg-cosmic-color-lightBlue text-white w-[100px] text-center rounded-md" onClick={() => {
                      store.dispatch(cacheDoctorCertificateAndLicenceDetailsForUpload({ licenceDetails: null }))
                      setShowUploadComp(false)
                      navigate('/doctor/liscence-upload')
                    }}>Ok</p>
                  </div>
                </div>

              }






              {
                loading &&
                <div className="h-full w-full flex flex-col justify-center place-items-center">
                  <label htmlFor="liscence" className=" mr-2 mb-14 ">Uploading... this may take 2-3mins</label>

                  {
                    <Loader size="100px" />
                  }
                </div>

              }

            </div>
          </div>}



      </div>



    </div>
  )
}

export default UploadLiscenceDetails