interface prop {
  quantity: number;
  changeQuantity: (a: string) => void;
}

const QuantityComponent = (prop: prop) => {
  return (
    <div className="w-[80px] p-1 flex rounded-md border justify-between border-slate-500">
      <div
        className="rounded-[50%] bg-cosmic-primary-color w-[1.5rem] h-[1.5rem] flex justify-center items-center p-1"
        onClick={() => prop.changeQuantity("d")}
      >
        <i className="fas fa-minus text-white"></i>
      </div>
      <p>{prop.quantity}</p>
      <div
        className="rounded-[50%] bg-cosmic-primary-color w-[1.5rem] h-[1.5rem] flex justify-center items-center p-1"
        onClick={() => prop.changeQuantity("i")}
      >
        <i className="fas fa-plus text-white"></i>
      </div>
    </div>
  );
};

export default QuantityComponent;
