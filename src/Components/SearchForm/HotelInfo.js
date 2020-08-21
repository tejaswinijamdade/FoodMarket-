import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getHotelInfoFromId } from "./zomato.service";

import {Data} from "./Demo3"; 
import style from "./SearchForm.module.css";
import {  useLocation, Link } from "react-router-dom";

export function HotelInfo() {
  const { id } = useParams();
  const [docs, setDocs] = useState({});
  useEffect(() => {
    getHotelInfoFromId(id).then(setDocs);
  }, []);
  

  return (
    <>
      
    <div className={style.List}>
       
        <div className={style.ListItemWrapper}>
          { 
          Data.map((experience, i) => {
            
            return (
              <Link
              to={`/payment`}
              className={style.ListLink}
              
              >
                
              
                <div className={style.ListItem}>
                <div key={i} >
                <a href={experience.Name}>
										<img src={experience.Image} alt={experience.companyName}  />
									</a><br />
										<b>	{experience.Name}</b><br/>
											<b>Rs:{experience.Price}</b><br/>
											<b><span>{experience.type}
                      ({experience.Info})
                      </span></b>
                      </div>
                </div>
                </Link>
             
               );
              })
          }
        </div>
      </div>
           
    
    
    </>
 );
}
