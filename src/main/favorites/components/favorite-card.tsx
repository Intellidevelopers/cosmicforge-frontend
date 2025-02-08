export interface FavoriteItem {
  image:string;
  title:string;
  quantity:string;
  location:string;
  price:string;
};

const FavoriteCard = (props:FavoriteItem) => {

  return <div className="w-[170px] border p-2 rounded-md space-y-1.5 ring-[3px] ring-neutral-200" >
          <div className="border-2 w-[150px] h-[80px] grid items-center justify-center rounded-md">
            <img className="max-w-[70px]" src={props.image} alt={props.title}  />
          </div>
          <div className="flex justify-between">
            <div>
              <p className="font-bold text-xs">{props.title}</p>
              <p className="text-xs">{props.quantity}</p>
            </div>
            <i className="fas fa-heart text-red-800"></i>
          </div>
            <p className="text-xs text-slate-400">{props.location}</p>
          <div className="flex justify-between items-end">
            <div className="text-cosmic-primary-color font-bold " >
              <p >N{props.price}</p>
            </div>
            <div className="bg-cosmic-primary-color px-2 py-1 font-bold text-white rounded text-xs">Cart <i className="fas fa-shopping-cart text-white"></i></div>
          </div>
        </div>;
};

export default FavoriteCard;