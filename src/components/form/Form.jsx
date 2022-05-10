import React from 'react';

function Form( { content } ) {
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

        {content}

        </form>

      </div>

    

    </section>
  )
}

export default Form;