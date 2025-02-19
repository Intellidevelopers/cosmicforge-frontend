export interface  ResponseBodyProps {
    title:string
    status:number,
    successful:boolean,
    message:string,
    error? :string,
    data?:any,
    otp?:any
  }