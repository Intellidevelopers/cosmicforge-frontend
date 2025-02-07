import { useState, useEffect } from "react";
import { FavoriteItem } from "../components/favorite-card";
import FavoriteCard from "../components/favorite-card";
import FavoriteHeader from "../components/favorite-header";

const dummyCard:FavoriteItem = {
    image:'src/assets/Tennin-temp-files/image.png',
    title:'Ibuprofen 400mg',
    quantity:'100 Tablets',
    location: 'Lagos, Zenith Pharmacy',
    price:'3,500'
}

const Favorites = () => {
    const [FavoriteList, setFavoriteList] = useState<FavoriteItem[]>([])

    useEffect(() => {
        //make API call to get favorites then create a collection of components and store them in an array to render

        const favoriteArray:FavoriteItem[] = []
        
        for (let index = 0; index < 3; index++) {
            favoriteArray.push(dummyCard)
        }
        setFavoriteList(favoriteArray)
    }, [])

  return (
    <div className="w-full flex flex-col gap-2 justify-center mx-auto">
        <FavoriteHeader/>
        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 w-fit justify-center gap-3 items-center ">
          {FavoriteList.map((item, index) => (
              <FavoriteCard key={index} {...item} />
          ))}
          </div>
        </div>
    </div>
  )
}

export default Favorites