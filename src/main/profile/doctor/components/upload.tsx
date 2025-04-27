// import { useState } from 'react'
import uploadImg from '../../../../assets/images/uploadIcon.png'

interface Props {
    uploadedFile: File | null;
    hideComp: ()=>void;
    handleFileUpload: (e: React.ChangeEvent<HTMLInputElement>)=>void;
}

const Upload = ({hideComp,handleFileUpload,uploadedFile}:Props) => {
    // const [uploadedFile, setUploadedFile ]= useState<File|null>(null)
    //   const [preview, setPreview ]= useState<string|undefined>()
      
  return (
    <div className='absolute top-0 bottom-0 left-0 right-0 bg-gray-400 opacity-80 flex justify-center items-center p-4'>
        <div className='flex flex-col  justify-between items-center bg-white w-[60%] max-w-[600px] h-[400px] p-4'>
            <div className="flex justify-between items-center w-full">
                <p className="font-bold">Upload File</p>
                <i className="fas fa-close" onClick={hideComp}></i>
            </div>
            <div className='flex flex-col justify-center items-center'>
                <img src={uploadImg} alt="UploadImg" className='border border-black bg-white' />

                <input type="file" accept="image/*, application/pdf" className="hidden" id="liscence" onChange={handleFileUpload}/>
                {uploadedFile ? <p>{uploadedFile?.name}</p>:
                <div>
                    <label htmlFor="liscence" className="underline mr-2">Upload File</label>
                    <span className="text-sm">here</span>
                </div>}
            </div>
            <div className="flex flex-col w-full border-t border-gray-400 gap-4">
                <div className="flex justify-between w-full">
                    <p className="text-gray-400 text-sm">SUPPORTED FORMATS: XLS, XLSX, PDF, DOXT</p>
                    <p className="text-gray-400 text-sm">Maximum size: 30mb</p>
                </div>
                <div className="flex justify-between w-full">
                   <div className="flex h-fit">
                    <p className="text-gray-400 text-center rounded-[50%] border border-gray-400 w-6">!</p>
                    <p className="text-gray-400 max-h-fit ml-2">HELP CENTER</p>
                   </div>
                   <div className="flex gap-2">
                        <button type="button" className='rounded-md font-bold border border-black p-2'
                        onClick={hideComp}
                        >Cancel</button>
                        <label htmlFor="liscence" className="bg-cosmic-primary-color w-fit text-white p-2 font-bold rounded-md">Upload</label>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upload