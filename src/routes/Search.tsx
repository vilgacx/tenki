import './css/search.css';
import { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";

type City = {
  id: string
  name: string,
  lat: string,
  long: string
}

function Search() {
  const inn = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  const [Cities, setCities] = useState<City[]>([]);
  const [Show, setShow] = useState<Boolean>(false);

  useEffect(() => {
    let CityList: Array<City>;
    fetch("https://api.github.com/repos/xorvet/everycity/git/blobs/c4cf26edf51ed836fb2d2115b5a63c399580c29c")
      .then((response) => response.json())
      .then((data) => {
        CityList = JSON.parse(atob(data['content']));
        setCities(CityList);
      })
      .catch((_e) => {
        alert("Error :( ");
      });

    if (inn.current !== null) {
      const city_search = inn.current;
      city_search.oninput = () => {
        if (city_search.value !== "") {
          const NewCityList: City[] = [];
          setShow(true);
          CityList.map((val,index) => {
            if (((val.name).toLowerCase()).startsWith((city_search.value).toLowerCase()) === true) {
              NewCityList.push(CityList[index]);
            }
          });
          if (NewCityList.length !== 0) {
            setCities(NewCityList);
          } else {
            setCities([]);
            setShow(false);
          }
        } else {
          setCities([]);
          setShow(false);
        }
      }
    }
  },[]);  

  function Enter(city: City) {
    localStorage.setItem("city",JSON.stringify(city));
    navigate("/");
  }

  return (
    <main className="search-main">
      <div className="search-div">
        <p className="search-title">enter city name</p>
        <span className="search-inn-div"> 
          <input type="text" className="search-inn" ref={inn}/>
          <button className="search-btn">↩</button> 
        </span>
        {Show &&
          <span className="city-list-div">
            <ul className="city-list">
              {Cities!.map((city: City) => { return <li key={city.id}><button className="li-btn" onClick={() => Enter(city)}>{city.name}</button></li> })}
            </ul>
          </span>
        }
      </div>
    </main>
  )
}

export default Search;
