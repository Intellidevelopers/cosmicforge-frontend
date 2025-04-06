interface props {text:string;}

const LightBlueButton = ({text}:props) => {
  return (
    <button type="button" className="rounded-sm opacity-50 bg-cosmic-primary-color p-2 w-[250px] text-white font-bold " >
        {text}
    </button>
  )
}

export default LightBlueButton