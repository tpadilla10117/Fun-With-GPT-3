import React from 'react';
import './Home.scss';
import {
    ApiResponses,
    Form,
} from '../../components/utils.js';

const HomePage = () => {

    return (
        <main id="homepage-parent-container">
            
        {/* TODO: Form Component */}
            <Form />

            <ApiResponses />
        
        </main>
    );
};

export default HomePage;