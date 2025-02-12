export interface FavoriteItem {
  image:string;
  title:string;
  quantity:string;
  location:string;
  price:string;
};

const FavoriteCard = (props:FavoriteItem) => {

  return <div className="xs:max-w-[200px] w-[100%] border p-2 rounded-md space-y-1.5 ring-[3px] self-center justify-self-center max-w-[170px] ring-neutral-200  md:w-full md:max-w-[240px] md:min-w-[190px] flex flex-1 flex-col justify-center items-center" >
            <div className=" xs:w-[130px] w-[140px] h-[80px] flex items-center justify-center rounded-md md:w-[90%] md:h-auto">
              <img className="max-w-[70px] md:max-w-full" src={props.image} alt={props.title}/>
            </div>
            <div className="md:min-w-[90%] w-full space-y-1.5">
              <div className="flex justify-between ">
                <div className="w-[90%]">
                  <p className="font-bold text-xs md:text-base truncate max-w-[95%]">{props.title}</p>
                  <p className="text-xs md:text-base">{props.quantity}</p>
                </div>
                <i className="fas fa-heart text-red-800"></i>
              </div>
                <p className="text-xs lg:text-base text-slate-400 max-w-[90%] truncate">{props.location}</p>
              <div className="flex justify-between items-end md:max-w-[95%] xl:max-w-[90%] ">
                <div className="text-cosmic-primary-color font-bold " >
                  <p >N{props.price}</p>
                </div>
                <div className="bg-cosmic-primary-color px-2 py-1 font-bold text-white rounded text-xs">Cart <i className="fas fa-shopping-cart text-white"></i></div>
              </div>
            </div>
        </div>;
};

export default FavoriteCard;