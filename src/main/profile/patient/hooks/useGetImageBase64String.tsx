const useGetImageBase64String = () => {
  let getImageBase64String = async (imageFile: File) => {
    return new Promise<string>((resolve, reject) => {
      if (!imageFile) {
        reject("empty file");
        return;
      }
      const fileReader = new FileReader();

      fileReader.onload = () => {
        resolve(fileReader.result?.toString()!!);
      };

      fileReader.readAsDataURL(imageFile);
    });
  };

  return { getImageBase64String };
};

export default useGetImageBase64String;
