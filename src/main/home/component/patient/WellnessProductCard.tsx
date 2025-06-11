import cartImage from "../../../../assets/icons/cosmic-cart-white-s-icon.svg";

export interface WellnessProductCardProps {
  productImage: string;
  productTitle: string;
  productDescription: string;
  productPrice: string;
}

const WellnessProductCard = ({
  productImage,
  productTitle,
  productDescription,
  productPrice,
}: WellnessProductCardProps) => {
  return (
    <div className="bg-white text-[15px] rounded-[5px]  min-w-[250px] h-[270px] flex justify-center p-4 ">
      <div className="relative">
        <img
          className="min-h-[130px] max-h-[130px]"
          src={productImage ?? "/"}
        />
        <div className="mt-1">
          <p className="font-semibold">{productTitle}</p>
        </div>
        <p className="font-light">{productDescription}</p>
        <p className="font-light text-nowrap overflow-x-hidden text-ellipsis w-[100%]">
          Lagos, Zenith Pharmacy
        </p>
        <div className="mt-3 flex text-white">
          <p className="text-cosmic-primary-color p-1 min-w-[200px]">
            {productPrice}
          </p>
          <div className="bg-cosmic-primary-color absolute p-1 right-0 min-w-[80px] font-light text-white cursor-pointer hover:bg-cosmic-light-color-call flex justify-center items-center gap-1 rounded-[5px]">
            <p>Cart</p>
            <img className="" alt="cart" src={cartImage} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default WellnessProductCard;
