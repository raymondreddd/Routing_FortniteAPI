import React, {useState, useEffect} from "react";
//import {Link} from 'react-router-dom';
function Itemdetail({ match }) {

    useEffect(() => {
        console.log("match: "+JSON.stringify(match));
        fetchItems();
    },[]);

    const [item, setItem] = useState({});

    const fetchItems = async () => {
        const fetchItem= await fetch('https://fortnite-api.theapinetwork.com/item/get?id=${{match.params.id}}');
        const item= await fetchItem.json();
        console.log("fetched api item");
        console.log(item);
    }
        
    
  return (
    <div>
      <h2>Item</h2>
      
    </div>
  );
}

export default Itemdetail;
