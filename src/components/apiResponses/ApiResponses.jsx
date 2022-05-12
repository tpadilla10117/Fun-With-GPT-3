import React from 'react'

function ApiResponses( { apiResponseState } ) {

  const savedResponsesString = localStorage.getItem('initial-responses');
  const parseSavedResponses = JSON.parse(savedResponsesString);

  return (
    <section className='apiResponses-parent-container'>
  {/* I .map / loop over apiResponseState (the app state) and render out responses */}
      
      <h3 className='apiResponses-header'>Responses:</h3>
      
      {
        !parseSavedResponses ?

        apiResponseState.map( (response, index) => {
          return (
            <div className='apiResponses-wrapper' key={index}>
                  <p>
                    <span className='p-spantxt'>Prompt:</span> {response.postData}
                  </p>
                  <p>
                    <span className='p-spantxt'>Response:</span> {response.apiResponseData}
                  </p>
  
            </div>
          )
        }) 

        :

        parseSavedResponses.map( (response, index) => {
          return (
            <div className='apiResponses-wrapper' key={index}>
                  <p>
                    <span className='p-spantxt'>Prompt:</span> {response.postData}
                  </p>
                  <p>
                    <span className='p-spantxt'>Response:</span> {response.apiResponseData}
                  </p>
  
            </div>
          )
        })
       

      }
     
    </section>
  )
};

export default ApiResponses;