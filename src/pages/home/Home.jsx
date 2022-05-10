import React from 'react';
import './Home.scss';


const HomePage = (props) => {

/* TODO: Data returns as an array from the API still */

    const {query, setQuery, astronomy, setAstronomy, search } = props;
    
    return (
        <main id="homepage-container">

            
                
        

            {/* <Pagination data={astronomy} pageLimit={5} dataLimit={10} /> */}

        </main>
    );
};

export default HomePage;