import React, {useState, useEffect} from "react";
import {Link} from 'react-router-dom';
function Shop() {

    useEffect(() => {
        fetchItems();
    },[]);

    const [items, setItems] = useState([]);

    const fetchItems = async () => {
        const data= await fetch('https://fortnite-api.theapinetwork.com/upcoming/get');
        const items=await data.json();
        const da= items.data;
        console.log(da);
        setItems(items.data); 
    }
  return (
    <div>
      <h2>Shop</h2>
      {items.map(mapitem => {
          return(
          <h3 key={mapitem.itemId}>
            <Link to={`/shop/${mapitem.itemId}`}>
            {mapitem.item.name}
            </Link>
          </h3>
          )
      })}
    </div>
  );
}

export default Shop;
