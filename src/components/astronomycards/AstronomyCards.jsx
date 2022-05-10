import React, {useState, useRef} from 'react';
import './AstronomyCards.scss';

function AstronomyCards(props) {

    const {date, url, copyright, title, explanation } = props.data;
    console.log("From the astronomyCards component: ", props)
    
    const likeBtnRef = useRef(null);

    const [likes, setLikes] = useState(() => {
        const saved = localStorage.getItem('likecount');
        const initialValue = JSON.parse(saved);
        return initialValue || 1;
    });

    const [liked, setLiked] = useState(() => {
        const saved = localStorage.getItem(`liked-state ${title}`);
        const initialValue = JSON.parse(saved);
        return initialValue || false;
    });
    console.log("Are we liked? :", liked) /* TODO: this value is not consistent... */

    const [likedBtn, setLikedBtn] = useState( () => {
        const saved = localStorage.getItem(`liked-btn ${title}`);
        const initialValue = JSON.parse(saved);
        return initialValue || null
    });

/* .astronomycard-likebtn functionality: */
    function onLikeClick() {
        setLikes( (num) => num + 1);
        localStorage.setItem(`click amount ${title}`, JSON.stringify(likes)  );
        handleLikeState();
        
    };

/* console.log(props.astronomy) */ /* TODO: Getting back the astronomy array now */


/* "liked" state toggler -> if true, gets 'active' class: */
    function handleLikeState() {
        if(liked === false) {
            setLiked(true);
            setLikedBtn(`${title}`);
            localStorage.setItem(`liked-state ${title}`, JSON.stringify( true)  ); /* TODO: Essential for state persistence */
            localStorage.setItem(`liked-btn ${title}`, JSON.stringify(`${title}`)  );
           
        } else {
            setLiked(false);
            localStorage.removeItem(`liked-state ${title}`);
            localStorage.removeItem(`liked-btn ${title}`);
            console.log("The button title: ", likedBtn)
        }

        
    };

    return (
        <section id='astronomycard-container'>
            <article className='astronomycard'>
                <small className='astronomycard-id'>{date}</small>

                <section className='astronomycard-img-container'> 

                    <figure className='astronomycard-img-wrapper'>
                        <img className='astronomycard-img' src={url} alt=""/>

                    </figure>

                    <figcaption className='astronomycard-copyright-container'>
                        <p className='astronomycard-copyright'> {copyright ? `© ${copyright}` : '' }</p>
                    </figcaption>

                </section>

                <h1 className='atronomycard-heading'>{title}</h1>
                <h3 className='astronomycard-date'>{date}</h3>

                <p className='astronomycard-details'>{explanation}</p>
                
                <button ref={likeBtnRef} type="button" id={props.data.title} className={liked /* || likedBtn */ ? 'astronomycard-likebtn active' : 'astronomycard-likebtn' /* || likedBtn === null ? 'astronomycard-likebtn' : 'astronomycard-likebtn active' */} onClick={onLikeClick}>   

                    <svg xmlns="http://www.w3.org/2000/svg" className="astronomycard-likebtn-heart" viewBox="0 0 20 20" fill="currentColor" height="20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                    </svg>

                    <p className='astronomycard-likebtn-txt'>Like</p>
                </button>

            </article>
        </section>
    );
}

export default AstronomyCards;
