import React, {
  useContext,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import style from "./SearchForm.module.css";
import { Link } from "react-router-dom";
import {
  getLocationFromZomato,
  getNameFromZomato,
} from "./zomato.service";
import { UserLocationContext } from "./user-location";
import { useHistory } from "react-router-dom";
import { SearchResults } from "./SearchResults";

export function SearchForm() {
  const searchApiRef = useRef(null);
  const [results, setResults] = useState([]);
  const history = useHistory();

  const [formValue, setFormValue] = useState({
    location: {},
    name: "",
  });

  const userLocationInfo = useContext(UserLocationContext);

  function onChangeValue(e) {
    const target = e.target;
    setFormValue((state) => ({ ...state, [target.name]: target.value }));
  }

  function onSubmit(e) {
    e.preventDefault();
    if (!formValue.name) {
      alert("Name is required");
      return;
    }
    history.push(`/search?q=${encodeURIComponent(formValue.name)}`);
  }

  return (
    <>
      <form className={style.Form} onSubmit={onSubmit}>
        <div>
          <div className={style.FormField}>
            <label htmlFor="search-by-name"></label>
            <input
              type="search"
              name="name"
              id="search-by-name"
              placeholder="Search Restaurant by name"
              autoComplete={"off"}
              onChange={onChangeValue}
            />
          </div>
        </div>

       
            <div className={style.Action}>
            <div className={style.SearchForm}>
                  <button type="submit" className={style.SubmitButton}>
                    Search
                 </button>
              </div>   
               
                 
            </div>
        

      </form>
    </>
  );
}
