import React from 'react';
import './Home.scss';
import {
    ApiResponses,
    Form,
    CtaButton
} from '../../components/utils.js';

require('dotenv').config();

const apiKey = process.env.OPEN_AI_KEY;

const BASE_URL = 'https://api.openai.com/v1/engines/text-curie-001/completions';


const HomePage = () => {

/* TODO: Data returns as an array from the API still */

    
    return (
        <main id="homepage-parent-container">
            
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
        
        </main>
    );
};

export default HomePage;