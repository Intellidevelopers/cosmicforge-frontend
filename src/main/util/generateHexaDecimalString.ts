export const generateHexaDecimal = (length: number = 10) => {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let hexaDecimal = "";
  for (let i = 0; i < length; i++) {
    hexaDecimal += characters.charAt(Math.random() * characters.length);
  }
  return hexaDecimal;
};
