import { useState, useEffect } from "react";
import { getGIFs } from "../helpers/getGifs";


// un hook es una función

export const useFetchGifs = ( category ) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    const getImages = async () => {
      const newImages = await getGIFs(category);
      setImages(newImages)
      setIsLoading(false)

    }

    useEffect(() => {
      getImages();
    }, [  ])

        return{
            images,
            isLoading
        }
}
