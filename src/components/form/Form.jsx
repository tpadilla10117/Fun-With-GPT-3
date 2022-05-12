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
    
/* TODO: Stretch Goal: Sample Prompts: */

    const samplePrompts = [
        {
            Prompt: 'What is the meaning of life?',
            id: 1
        },
        {
            Prompt: 'Why are cats rude?',
            id: 2
        },
        {
            Prompt: 'Why are dogs dumb?',
            id: 3
        },
        {
            Prompt: 'Write a poem about pizza',
            id: 4
        },
        {
            Prompt: 'I love hiking!',
            id: 5
        },
    ];

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

            if(savedResponsesString) {

            /* If I had a string in local storage, I have to take my parsed data from local Storage
                - then unshift() the new object into the existing array
                - then re-stringify the updated array
                - then re-set the array back in localStorage
            */
                parseSavedResponses.unshift( {postData, apiResponseData} ) ;
                let reconvertedSavedResponses = JSON.stringify(parseSavedResponses);
                localStorage.setItem('initial-responses', reconvertedSavedResponses);
                console.log('Here is my test: ', typeof reconvertedSavedResponses)

               /*  setPostDataArray(
                    [ {postData, apiResponseData} , ...postDataArray]
                ); */
            } else {
                setPostDataArray(
                    [ {postData, apiResponseData} , ...postDataArray]
                );
        /* Here I save the array of objects in LocalStorage: */
                localStorage.setItem('initial-responses', JSON.stringify( [ {postData, apiResponseData} , ...postDataArray] ));
            }

        /* Here I save the array of objects in LocalStorage: */
            
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

                <div className='form-input-dropdown-parent'>
                    <div className='form-input-dropdown dropdown'>
                        <ul className='form-input-dropdown-options'>
                            { samplePrompts.map ( (prompts, index) => {
                                return (
                                    <li 
                                        id='form-input-dropdown-_li' 
                                        className='form-input-dropdown-_li'
                                        key={index}
                                        value={prompts.Prompt}
                                        name='formInputDropdownSelector'
                                        /* onClick={ () => revealItems(items.name) }  */
                                        >
                                        {prompts.Prompt}
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>


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