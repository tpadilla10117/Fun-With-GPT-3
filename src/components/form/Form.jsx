import React, { useRef, useState, useEffect } from 'react';
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

    const formInputRef = useRef();
    const [ postData, setPostData ] = useState('');
    const [ postDataArray, setPostDataArray] = useState( [] );

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
     
        console.log('Here is testData: ', testData)
        console.log('Here is postData: ', postData)
       
        postRequest();
        setPostDataArray([postData, ...postDataArray]);
        /* setPostData(''); */
    };
    console.log("My postData without doing anything: ", postData)
    console.log("Data to pass onto child component: ", postDataArray)

    const handleChange = (event) => {
        const value = event.target.value;
        setPostData(value);
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
            console.log('The text response of my API call:: ', result.choices[0].text )
        });
    };

    
  return (
    <section className='form-parent-container'>
        
      {/* <img src={bannerImg} alt={alt} className='emailForm-img' /> */}

      <div className='form-header-parent-container'>
        <h1 className='form-header'>Fun With AI</h1>
      </div>

      <div className='form-wrapper'>
        <form className='form' onSubmit={submitForm} >
            <div className='form-input-wrapper'>
                <label />
                <input placeholder='Message' name='message' type='text' required ref={formInputRef}
                onChange={handleChange}
                />
            </div>

    {/* Where the 'Submit' button is rendered: */}
            <CtaButton 
                classnames={'form-submit-btn'}
                text={'Submit'}
                /* clickHandler={event => submitForm(event)} */
            />

        </form>

      </div>
      {/* <ApiResponses 
                apiResponseState={postDataArray}
            /> */}

    {/* TODO: Need to pass state down to ApiResponses to render out a feed: */}
        {
            postDataArray ?

            <ApiResponses 
                apiResponseState={postDataArray}
            /> 

            :

            <div>
                No Responses Yet!
            </div>
        }
      

    

    </section>
  )
}

export default Form;