/* This component contains the Searchbar in the UI: */

    import React from "react";
    import './SearchBox.scss';

    function SearchBox(props) {

        const {query, setQuery,search} = props;

        return (
            <section role="search" className="search-box">
                
                <input 
                    type="text"
                    className="search-bar"
                    placeholder="Search..."
                    onChange={event => setQuery(event.target.value)}
                    value={query}
                    onKeyPress={search}
                />
            </section>
        );
    };

    export default SearchBox;