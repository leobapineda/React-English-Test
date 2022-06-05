import { React, useEffect, useState } from "react";
import axios from "axios";
import Recipe from "./components/Recipe";
export default function App() {

  // the initial value of photos has to be something, otherwise the first render will throw and error because it is trying to use map on an undefined element
  const [photos, setPhotos] = useState([]);
  
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/photos")
      .then(
      (photos) => {
        setPhotos(photos.data);
      }
    );
  }, [0]);
  
  console.log(photos);
        let photosMap = photos.map(item => { 
          return(
            <Recipe 
            key={item.title}
            title={item.title}
            />
          )
        })



  return (
    <>
    <div>{photosMap}</div>
    </>
  );
}
