import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FavoriteItem } from "../components/product-card";
import ProductCard from "../components/product-card";
import image from "../../../assets/images/image.png";
import HomeMobileNavBar from "../../home/component/patient/HomeMobileNavBar";
import HomeNavBar from "../../home/component/patient/HomeNavBar";

const dummyCard: FavoriteItem = {
  image: image,
  title: "Ibuprofen 400mg",
  quantity: "100 Tablets",
  location: "Lagos, Zenith Pharmacy",
  price: "3,500",
  favorite: true,
};

const Favorites = () => {
  const [FavoriteList, setFavoriteList] = useState<FavoriteItem[]>([]);
  const location = useLocation();

  useEffect(() => {
    // Make API call to get favorites then create a collection of components and store them in an array to render

    const favoriteArray: FavoriteItem[] = [];

    for (let index = 0; index < 7; index++) {
      favoriteArray.push(dummyCard);
    }
    setFavoriteList(favoriteArray);
  }, [location]);

  return (
    <>
      <HomeNavBar title="Favorites" onSearchFired={() => {}} />
      <HomeMobileNavBar title="Favorites" onSearchFired={() => {}} />
      <div
        className={
          "ps-0  md:ps-[250px]  w-full flex gap-2 justify-around items-center  mx-auto mt-4"
        }
      >
        <div className="flex w-[80%] xs:w-[90%] justify-center md:w-full md:pl-4 md:justify-start">
          <div className="grid  grid-cols-2 sm:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-5 3xl:grid-cols-6 lg:grid-cols-3 w-full gap-4 pb-6 md:p-4">
            {FavoriteList.map((item, index) => (
              <ProductCard key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Favorites;
