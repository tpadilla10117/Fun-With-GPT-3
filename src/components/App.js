import React, {useState, useEffect} from 'react';
import { 
  Form,
  ApiResponses,
  CtaButton

} from './utils';
import { progressBarFetch, setOriginalFetch } from 'react-fetch-progressbar';
import { ProgressBar } from 'react-fetch-progressbar';

require('dotenv').config();

const apiKey = process.env.OPEN_AI_KEY;

const BASE_URL = 'https://api.openai.com/v1/engines/text-curie-001/completions';

setOriginalFetch(window.fetch);
window.fetch = progressBarFetch;

function App() {

  return (
    <div className='App'>

    {/* TODO: Form Component */}
      <Form 
        content={
          <CtaButton 
            classnames={'form-submit-btn'}
            text={'Submit'}
          />
        }
      />

      <ApiResponses />

    </div>
  );
}

export default App;
