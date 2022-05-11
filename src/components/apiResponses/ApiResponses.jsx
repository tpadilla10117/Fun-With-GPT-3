import React, { useState } from 'react'

function ApiResponses( { apiResponseState } ) {


  const [ formState, setFormState ] = useState();

  return (
    <section className='apiResponses-parent-container'>
        {/* TODO: Would need to .map over apiResponseState (the app state) and render out responses */}
      Api form

      {apiResponseState ? 
            
            apiResponseState.map( (response, index) => {
              return (
                <div className='apiResponses-wrapper' key={index}>
                  <p>
                    Prompt: {response.postData}
                  </p>
                  <p>
                    Response: {response.apiResponseData}
                  </p>

                </div>
              )
            })

            :

            <div className='apiResponses-wrapper'>
              No Responses
            </div>
        
          }

     
    </section>
  )
};

export default ApiResponses;