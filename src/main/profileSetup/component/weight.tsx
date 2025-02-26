interface weightValue{
    figure:string;
    // onChange: ;
    formData.weight:string;
}
const Weight = ({figure, formData.weight}:weightValue) => {
  return (
    <>
        <h2 className="text-xl font-bold mb-4 text-center">Enter your {figure} manually:</h2>
        <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={onChange}
            className="border p-2 w-full"
            placeholder="Enter your weight"
        />
    </>
  )
}

export default Weight