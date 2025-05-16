// react icons imports
import { GrFormNextLink } from "react-icons/gr";
import { GrFormPreviousLink } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";

// image imports
import Shop1 from "../../../../assets/HomeImg/shop1.png";
import Shop2 from "../../../../assets/HomeImg/shop2.png";
import Shop3 from "../../../../assets/HomeImg/shop3.png";
import Shop4 from "../../../../assets/HomeImg/shop4.png";
import Shop5 from "../../../../assets/HomeImg/shop5.png";

const ShopComponent = () => {
  // shop data
  const ShopData = [
    {
      productName: "First Aid Kit",
      productPrice: "120",
      productImage: Shop1,
      rating: 88,
    },
    {
      productName: "First Aid Kit",
      productPrice: "120",
      productImage: Shop2,
      rating: 75,
    },
    {
      productName: "Tylenol 400mg",
      productPrice: "960",
      productImage: Shop3,
      rating: 99,
    },
    {
      productName: "Acetaminophen 400mg",
      productPrice: "370",
      productImage: Shop4,
      rating: 99,
    },
    {
      productName: "Ibuprofen 400mg",
      productPrice: "370",
      productImage: Shop5,
      rating: 99,
    },
  ];

  // date function
  const date = new Date();

  // time stamps initials
  const timeString = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  return (
    <section className="max-w-[80%] mx-auto mb-20">
      <h1 className="border-l-[10px] border-[#272EA7] text-[#272EA7] rounded-md pl-2">
        Today's
      </h1>
      <div className="mt-6">
        {/* flash sales */}
        <div className="flex justify-between items-center">
          <div className="flex gap-4 items-center">
            <div>
              <h1 className="text-3xl font-semibold capitalize">Flash Sales</h1>
            </div>
            {/* flash sales times */}
            <div className="hidden sm:flex flash_time_stamps text-xl font-medium">
              <p>{timeString}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <div className="bg-[#F5F5F5] text-xl p-2 rounded-full cursor-pointer">
              <GrFormPreviousLink />
            </div>
            <div className="bg-[#F5F5F5] text-xl p-2 rounded-full cursor-pointer">
              <GrFormNextLink />
            </div>
          </div>
        </div>
        {/* products contents */}
        <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 items-start gap-4 mt-6">
          {ShopData.map((items, index) => (
            <div className="flex flex-col gap-4" key={index}>
              <div className="relative bg-[#f5f5f5] p-8 rounded-md h-[180px]">
                <img src={items.productImage} alt="" />
                <p className="absolute top-1 left-0 bg-[#272EA7] text-white text-sm py-1 px-4 rounded-sm">
                  -30%
                </p>
                <div className="absolute top-2 left-40 flex flex-col gap-2 text-[16px] font-bold cursor-pointer">
                  <div className="bg-white p-2 rounded-full">
                    <IoEyeOutline />
                  </div>
                  <div className="bg-white p-2 rounded-full">
                    <CiHeart />
                  </div>
                </div>
              </div>
              <div className="text">
                <h1 className="text-sm font-semibold">{items.productName}</h1>
                <p className="text-[#272EA7] font-medium">
                  ${items.productPrice}{" "}
                  <span className="line-through text-[#00000059] text-[12px]">
                    $400
                  </span>
                </p>
                <div className="rating flex gap-2 text-sm">
                  <div className="text-yellow-500 text-sm flex items-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <p className="text-[#00000059]">({items.rating})</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopComponent;
