import React from 'react';

function CtaButton( {text, classnames, clickHandler} ) {
  return (
    <>
        <button className={classnames} onClick={clickHandler} >
            {text}
        </button>
    </>
  )
}

export default CtaButton;