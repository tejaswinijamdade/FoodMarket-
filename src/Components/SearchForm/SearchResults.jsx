import React, { useEffect, useMemo, useState } from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { getNameFromZomato } from "./zomato.service";
import style from "./SearchForm.module.css";




export function SearchResults() {
  const params = useLocation();
  const [results, setResult] = useState([]);


  const query = useMemo(() => {
    return new URLSearchParams(params.search).get("q");
  }, [params.search]);

  useEffect(() => {
    getNameFromZomato(query).then((docs) => {
      setResult(docs.restaurants);
    });
  }, [query]);

 
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 30;
  

  return (
    <>
     
      
      <div className={style.List}>
       <h1 style={{marginRight: + '5px'}}>Top Picks</h1>
        <div className={style.ListItemWrapper}>
          {results.map((result) => {
            const restaurant = result.restaurant;
            return (
              <Link
                to={`/hotel/${restaurant.id}`}
                className={style.ListLink}
                key={result.restaurant.id}
              >
                <div className={style.ListItem}>
                  {restaurant.featured_image && (
                    <img src={restaurant.featured_image} alt="" />
                  )}
                  <br />
                  <b>{restaurant.name}</b>
                  <br />
                  <span>Ratings: {restaurant.user_rating.rating_text}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
