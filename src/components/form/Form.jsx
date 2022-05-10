import React from 'react';
import axios from 'axios';
import { CtaButton } from '../utils';

require('dotenv').config();

    const apiKey = process.env.OPEN_AI_KEY;

    const BASE_URL = 'https://api.openai.com/v1/engines/text-curie-001/completions';
    const TEST_BASE_URL = `${apiKey}https://api.openai.com/v1/engines/text-curie-001/`;

function Form( { content } ) {

    const submitForm = () => {
        /* event.preventDefault(); */
        console.log('clicked the form button!')
    /*TODO: Test a basic get request */
        getRequestTest();

    };

    const getRequestTest = async () => {
        try {
            const response = axios.get(TEST_BASE_URL)
            console.log('Response from the getRequestTest: ', response);
        } catch(error) {
            console.error(error);
        }
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
                <textarea rows='5' placeholder='Message' name='message' required/>
            </div>

    {/* Where the 'Submit' button is rendered: */}
            <CtaButton 
                classnames={'form-submit-btn'}
                text={'Submit'}
                clickHandler={submitForm }
            />

        </form>

      </div>

    

    </section>
  )
}

export default Form;