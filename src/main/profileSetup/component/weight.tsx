interface weightValue{
    figure:string,
     onChange:()=> void ,
    weight:string,
}
const Weight = ({figure, weight,onChange}:weightValue) => {
  return (
    <>
        <h2 className="text-xl font-bold mb-4 text-center">Enter your {figure} manually:</h2>
        <input
            type="number"
            name="weight"
            value={weight}
            onChange={onChange}
            className="border p-2 w-full"
            placeholder="Enter your weight"
        />
    </>
  )
}

export default Weight