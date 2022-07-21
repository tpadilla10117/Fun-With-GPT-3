import React, { useRef, useState } from 'react';
import { CtaButton, ApiResponses } from '../utils';


require('dotenv').config();

const apiKey = process.env.REACT_APP_OPEN_AI_KEY;

function Form( { content } ) {

    const formInputRef = useRef();
    const [ postData, setPostData ] = useState('');
    const [ postDataArray, setPostDataArray] = useState( [] );
    const savedResponsesString = localStorage.getItem('initial-responses');
    const parseSavedResponses = JSON.parse(savedResponsesString);

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
        postRequest();
    };

/* handleChange(event) is a controlled form input: */
    const handleChange = (event) => {
        let value = event.target.value;
        setPostData(value);
    };

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
       
            const apiResponseData = result.choices[0].text;

        /* Here I make an array of objects to iterate over in <ApiResponses />: */

            if(savedResponsesString) {

            /* If I had a string in local storage, I have to take my parsed data from local Storage
                - then unshift() the new object into the existing array
                - then re-stringify the updated array
                - then re-set the array back in localStorage
            */
                parseSavedResponses.unshift( {postData, apiResponseData} ) ;
                let reconvertedSavedResponses = JSON.stringify(parseSavedResponses);
                localStorage.setItem('initial-responses', reconvertedSavedResponses);

            } else {
                setPostDataArray(
                    [ {postData, apiResponseData} , ...postDataArray]
                );
        /* Here I save the array of objects in LocalStorage: */
                localStorage.setItem('initial-responses', JSON.stringify( [ {postData, apiResponseData} , ...postDataArray] ));
            }
            
            setPostData('')
        });

    };

    
  return (
    <section className='form-parent-container'>

      <div className='form-header-parent-container'>
        <h1 className='form-header'>Fun With A.I.</h1>
      </div>

      <div className='form-wrapper'>
        <form className='form' onSubmit={submitForm} >
            <div className='form-input-wrapper'>
                <label htmlFor='form-input' className='form-input-label'>Enter a Prompt Below:</label>
                <textarea id='form-input' rows='5' name='form-input' type='text' required ref={formInputRef}
                onChange={handleChange}
                />
    {/* Where the 'Submit' button is rendered: */}
            <CtaButton 
                classnames={'form-submit-btn'}
                text={'Submit'}
                /* clickHandler={event => submitForm(event)} */
            />
            </div>


        </form>

      </div>

    {/* I pass state down to ApiResponses to render out a feed: */}
        
            <ApiResponses 
                apiResponseState={postDataArray}
            /> 


            {
                !savedResponsesString ? 

                <div className='form-nodata'>
                    <h1>No data</h1>
                </div>

                :

                ''
            }

    </section>
  )
}

export default Form;