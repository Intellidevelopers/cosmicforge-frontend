import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { FavoriteItem } from "../components/favorite-card";
import FavoriteCard from "../components/favorite-card";
import { changeWidthToFit } from "../../home/component/HomeNavBar";

const dummyCard: FavoriteItem = {
    image: 'src/assets/Tennin-temp-files/image.png',
    title: 'Ibuprofen 400mg',
    quantity: '100 Tablets',
    location: 'Lagos, Zenith Pharmacy',
    price: '3,500'
};

//Redeploying to check what went wrong.

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
        <div className={changeWidthToFit + " w-full flex gap-2 justify-center items-center md:justify-start mx-auto mt-4"}>
            {/* <FavoriteHeader/> */}
            <div className="flex w-[80%] justify-center md:pl-4 md:justify-start">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4 w-full gap-4" >
                    {FavoriteList.map((item, index) => (
                        <FavoriteCard key={index} {...item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Favorites;