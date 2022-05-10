import React, {useState, useEffect} from 'react';
import {AstronomyCards} from '../utils';
import './Pagination.scss';

const Pagination = ({ data, /* RenderComponent, */ pageLimit, dataLimit, astronomy}) => {

/* TODO: data returns an array of the fetched data: */
console.log("From pagination component: ", data)
console.log("astronomy from pagination: ", astronomy)

const [pages] = useState(Math.round(data.length / dataLimit));
const [currentPage, setCurrentPage] = useState(1);

/* To scroll back to the top of the page after user changes: */
useEffect( () => {
    window.scrollTo({ behavior: 'smooth', top: '0px'});

}, [currentPage]);

/* NextPage Button: */
function nextPage() {
    setCurrentPage( (page) => page + 1);
};

/* PreviousPage Button: */
function previousPage() {
    setCurrentPage( (page) => page - 1);
};

/* When a user clicks to change pages: */
function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
}


/* Returns posts equal to our limit (10) to return to user: */
const getPaginatedData = () => {
    const startingIdx = currentPage * dataLimit - dataLimit;
    const endIdx = startingIdx + dataLimit;

    return data.slice(startingIdx, endIdx); //posts on current pg
};

/* Show group of page numbers to user: */
    //gives us page 1 since we start at index 0
const getPaginatedGroup = () => {
    let pageStart = Math.floor( (currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map( (_, idx) => pageStart + idx + 1);
};

    return (
        <article id="pagination">
            <h1>{data.title}</h1>
            <section className='pagination-data-container'>

        {/* Show up to 10 posts at a time: */}
            {getPaginatedData().map( (data, idx) => (
                <AstronomyCards data={data} idx={idx} key={idx} />
            ))}

            </section>

            <nav className='pagination-interactions'>
                <button onClick={previousPage} className={`pagination-prev ${currentPage === 1 ? 'disabled' : ''}`}>
                    <p>Prev</p>
                </button>
            
            <div className='pagination-item-container'>
            {/* Reveal pg numbers: */}
                {getPaginatedGroup().map( (item, idx) => (
                    <button
                        key={idx}
                        onClick={changePage}
                        className={`pagination-item ${currentPage === item ? 'active' : null}`}
                    >
                        <span>{item}</span>
                    </button>
                ))}
            </div>


                <button onClick={nextPage} className={`pagination-next ${currentPage === pages ? 'disabled' : ''}`}>
                    <p>Next</p>
                </button>
            </nav>

            
            
            
            
        </article>
    );
};

export default Pagination;
