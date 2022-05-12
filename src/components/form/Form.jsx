import React, { useRef, useState } from 'react';
import { CtaButton, ApiResponses } from '../utils';


require('dotenv').config();

    const apiKey = process.env.REACT_APP_OPEN_AI_KEY;

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
     
        console.log('Here is testData: ', testData.prompt)
        console.log('Here is postData: ', postData)
       
        postRequest();
     
    };

    console.log("My postData without doing anything: ", postData)
    console.log("Data to pass onto child component: ", postDataArray)

/* handleChange(event) is a controlled form input: */
    const handleChange = (event) => {
        const value = event.target.value;
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
            console.log('The result of Post req with Fetch: ', result);
            
            console.log('The text response of my API call:: ', result.choices[0].text );
            const apiResponseData = result.choices[0].text;

        /* Here I make an array of objects to iterate over in <ApiResponses />: */
            setPostDataArray(
                [ {postData, apiResponseData} , ...postDataArray]
            );
        /* Here I save the array of objects in LocalStorage: */
            localStorage.setItem('initial-responses', JSON.stringify( [ {postData, apiResponseData} , ...postDataArray] ));
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
            </div>

    {/* Where the 'Submit' button is rendered: */}
            <CtaButton 
                classnames={'form-submit-btn'}
                text={'Submit'}
                /* clickHandler={event => submitForm(event)} */
            />

        </form>

      </div>

    {/* I pass state down to ApiResponses to render out a feed: */}
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