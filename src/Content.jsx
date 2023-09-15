import { BreweriesIndex } from "./BreweriesIndex";
import axios from "axios";
import { useState, useEffect } from "react";

export function Content() {
  const [breweries, setBreweries] = useState([])

  const handleIndexBreweries = () => {
         axios.get("http://localhost:3000/breweries.json").then((response) => {
           console.log(response.data);
           setBreweries(response.data);
         });
       };

       useEffect(handleIndexBreweries, [])

  return (
    <div>
     <BreweriesIndex breweries={breweries}/>
    </div>
  )
}