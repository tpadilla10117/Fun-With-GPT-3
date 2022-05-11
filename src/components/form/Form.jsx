import React, { useRef, useState } from 'react';
/* import axios from 'axios'; */
import { CtaButton, ApiResponses } from '../utils';
/* const { Configuration, OpenAIApi } = require("openai"); */

require('dotenv').config();

    const apiKey = process.env.REACT_APP_OPEN_AI_KEY;

    /* const BASE_URL = 'https://api.openai.com/v1/engines/text-curie-001/completions';
    const TEST_BASE_URL = `${apiKey}https://api.openai.com/v1/engines/text-curie-001/`; */

    /* const configuration = new Configuration({
        apiKey: apiKey,
    }); */

    /* const openai = new OpenAIApi(configuration); */


function Form( { content } ) {

    const formInputRef = useRef(null);
    const [ postData, setPostData ] = useState('');
    const [ testDataState, setTestDataState] = useState('');

/* The Request body for my POST Request: */

    const testData = {
        prompt: postData,
        temperature: 0.5,
        max_tokens: 64,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    };       

/* The submitForm function is a Click Handler for when a user submits a form: */

    const submitForm = (event) => {
        event.preventDefault();
        /* console.log('The result of my useRef: ', formInputRef.current.value) */
        console.log('Here is testData: ', testData)
        postRequest();
        setPostData('');
    };
    

    /* const getRequestTest = async () => {
        try {
            const response = await openai.listEngines();
            console.log('Response from the getRequestTest: ', response);
        } catch(error) {
            console.error(error);
        }
    }; */

/* The logic for a POST Request using the openai library:  */
    /* const postRequest = async () => {
        try {
            const response = await openai.createCompletion("text-curie-001", {
                prompt: "write a poem about dinosaurs in the snow",
                max_tokens: 5,
              });
              console.log('Response from my POST Request: ', response)
        } catch(error) {
            console.error(error);
        }
    } */

/* The logic for a POST Request using fetch:  */

    const postRequest = async () => {
        fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
            },
            body: JSON.stringify(testData),
            
        })
        .then(result => result.json() )
        .then( result => {
            console.log('The result of Post req with Fetch: ', result);
            /* setPostData(result); */
            localStorage.setItem('initial-responses', JSON.stringify( result ));
        });
    };

    
  return (
    <section className='form-parent-container'>
        
      {/* <img src={bannerImg} alt={alt} className='emailForm-img' /> */}

      <div className='form-header-parent-container'>
        <h1 className='form-header'>Fun With AI</h1>
      </div>

      <div className='form-wrapper'>
        <form className='form'>
            <div className='form-input-wrapper'>
                <label />
                <textarea rows='5' placeholder='Message' name='message' required ref={formInputRef} value={postData}
                    onChange={event => setPostData(event.target.value)}
                />
            </div>

    {/* Where the 'Submit' button is rendered: */}
            <CtaButton 
                classnames={'form-submit-btn'}
                text={'Submit'}
                clickHandler={event => submitForm(event)}
            />

        </form>

      </div>

    {/* TODO: Need to pass state down to ApiResponses to render out a feed: */}
      <ApiResponses 
        apiResponseState={''}
      />

    

    </section>
  )
}

export default Form;