import { useNavigate } from "react-router-dom";

export interface product {
  image: string;
  title: string;
  quantity: string;
  location: string;
  price: string;
  category: string;
  favorite?: boolean;
}

const ProductCard = (props: product) => {
  const navigate = useNavigate();

  return (
    <div
      className=" w-[100%] border p-2 rounded-md space-y-1.5  self-center justify-self-center max-w-[140px] md:w-full md:max-w-[200px] md:min-w-[190px] flex flex-1 flex-col justify-center items-center cursor-pointer"
      onClick={() => {
        navigate(`products/${props.title}`);
      }}
    >
      <div className=" xs:w-[130px] w-[140px] h-[80px] flex items-center justify-center rounded-md md:w-[90%] md:h-auto">
        <img
          className="max-w-[70px] md:max-w-full"
          src={props.image}
          alt={props.title}
        />
      </div>
      <div className="md:min-w-[90%] w-full space-y-1.5">
        <div className="flex justify-between ">
          <div className="w-[90%]">
            <p className="font-bold text-xs md:text-base truncate max-w-[95%]">
              {props.title}
            </p>
            <p className="text-xs md:text-base">{props.quantity}</p>
          </div>
          <i
            className={` fa-heart  ${props.favorite ? "fas text-red-800" : "far"}`}
          ></i>
        </div>
        <p className="text-xs lg:text-base text-slate-400 max-w-[90%] truncate">
          {props.location}
        </p>
        <div className="flex justify-between items-end md:max-w-[95%] xl:max-w-[90%] ">
          <div className="text-cosmic-primary-color font-bold ">
            <p>N{props.price}</p>
          </div>
          <div className="bg-cosmic-primary-color px-2 py-1 cur font-bold text-white rounded text-xs">
            Cart <i className="fas fa-shopping-cart text-white"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
