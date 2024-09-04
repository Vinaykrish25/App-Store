import React, { useContext, useEffect, useState } from 'react';
import "./Styles/Cards.css";
import axios from 'axios';
import { AppContext } from '../Contexts/AppContext';

const Cards = () => {
  const { globalSearchData, category } = useContext(AppContext);
  const [data, setData] = useState([]);

  useEffect(() => {
    let isMounted = true;
    async function fetchData() {
      try {
        let url = `http://localhost:3000/apps`;
        if (category && category !== 'All') {
          url += `?category=${category}`;
        }

        const fetchApps = await axios.get(url);
        if (isMounted) {
          setData(fetchApps.data);
          // console.log(fetchApps.data);

        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();

    return () => {
      isMounted = false;
    };
  }, [category]);

  const searchdata = data.filter(
    (app) => app.name.startsWith(globalSearchData) || app.name.startsWith(globalSearchData.toUpperCase())
  );

  return (
    <div className='cards-container'>
      <div className='cards-section'>
        {searchdata.map((app) => (
          <div className="cards" key={app.id}>
            <img src={app.image} alt={app.name} width={100} height={100} />
            <p>{app.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;
