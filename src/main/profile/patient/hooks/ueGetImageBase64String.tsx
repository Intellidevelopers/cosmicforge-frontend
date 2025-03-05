


const useGetImageBase64String = () => {

    let getImageBase64String = async (imageFile:File) =>{
        let imageBase64 =''

        if(!imageFile){
            return 'empty file'
        }

        const fileReader =  new FileReader()

        fileReader.onload = (e) =>{
           imageBase64 =e.target?.result?.toString()!!
        }

        fileReader.readAsDataURL(imageFile)

        return imageBase64
    }

    return {getImageBase64String}
}

export default useGetImageBase64String