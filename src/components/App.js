import React, {useState, useEffect} from 'react';
import { HomePage} from './utils';
import { progressBarFetch, setOriginalFetch } from 'react-fetch-progressbar';
import { ProgressBar } from 'react-fetch-progressbar';

require('dotenv').config();

const apiKey = process.env.REACT_APP_ASTRONOMY_KEY;

const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=';

setOriginalFetch(window.fetch);
window.fetch = progressBarFetch;

function App() {

  const [query, setQuery] = useState('');
  const [astronomy, setAstronomy] = useState(() => {
    const saved = localStorage.getItem('initial-posts');
    const initialValue = JSON.parse(saved);
    return initialValue || []
    
  });
 
  const [error, setError] = useState('');
  
/* To dynamically render astronomy data: */
  /* E.g. date=2017-07-08 or date=2014-10-01*/
  const search = event => {
    
    if(event.key === "Enter") {
      fetch(`${BASE_URL}${apiKey}&${query}`)
        .then(result => result.json())
        .then(result => {
          setQuery('');
          setAstronomy(result);
          console.log("Here is astronomy data:", result);
        } );
    }
  };

/* Function to store queried data in LocalStorage: */
  function storeCurrentData(postdata) {
    localStorage.setItem('initial-posts', JSON.stringify(postdata) )
  };

/* Main API fetch call: */

async function fetchData() {
  fetch(`${BASE_URL}${apiKey}&start_date=2017-07-08&end_date=2017-07-20
`)
/* fetch(`${BASE_URL}${apiKey}&count=100`) */
/* fetch(`${BASE_URL}${apiKey}`) */
  .then((res) => {
    if (res.ok) return res.json();
    throw new Error('An Error occurred when fetching posts');
  })
  .then((posts) => setAstronomy(posts))
  .catch((error) => setError(error.message));
}


/* Runs only if no data is in local Storage: */
useEffect(() => {
 
  if (astronomy.length === 0) {
    fetchData();
  }
    
} , [astronomy]);


/* Persisting the initial fetch in local-storage: */
useEffect( () => {
  storeCurrentData(astronomy)
  /* console.log("here is astronomy from the useEffect: ", astronomy); */
  /* console.log(astronomy[1])  *//* Data in astronomy is currently indexed by the return from API */
}, [astronomy]);

/* Error Handling: */
if (error) return <h1>{error}</h1>

  
  return (
    <div className='App'>

      <ProgressBar style={ {backgroundColor:'#36BF9D', height: '8px', borderRadius: '5px'}}/>
      <HomePage query={query} setQuery={setQuery} astronomy={astronomy} setAstronomy={setAstronomy}
        apiKey={apiKey}
        BASE_URL={BASE_URL}
        search={search}
      />

    </div>
  );
}

export default App;
