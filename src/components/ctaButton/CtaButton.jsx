import React from 'react';

function CtaButton( {text, classnames} ) {
  return (
    <>
        <button className={classnames} >
            {text}
        </button>
    </>
  )
}

export default CtaButton;