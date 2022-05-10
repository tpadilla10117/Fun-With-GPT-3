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

  


  
  return (
    <div className='App'>

      

    </div>
  );
}

export default App;
