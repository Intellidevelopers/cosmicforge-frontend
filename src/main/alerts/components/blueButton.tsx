interface props {text:string;}

const BlueButton = ({text}:props) => {
  return (
    <button type="button" className="rounded-sm bg-cosmic-primary-color p-2 w-[250px] text-white font-bold " >
        {text}
    </button>
  )
}

export default BlueButton