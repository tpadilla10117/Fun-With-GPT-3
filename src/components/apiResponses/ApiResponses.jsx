import React from 'react'

function ApiResponses( { apiResponseState } ) {
console.log('test:', apiResponseState)
  const savedResponsesString = localStorage.getItem('initial-responses');
  const parseSavedResponses = JSON.parse(savedResponsesString);


  console.log(apiResponseState)
  console.log( 'Coming from localStorage: ',typeof savedResponsesString);
  console.log( ' parsing the localStorage items: ', typeof parseSavedResponses)

  return (
    <section className='apiResponses-parent-container'>
  {/* I .map over apiResponseState (the app state) and render out responses */}
      
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