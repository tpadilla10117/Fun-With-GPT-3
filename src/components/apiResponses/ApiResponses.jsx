import React, {useEffect} from 'react'

function ApiResponses( { apiResponseState } ) {
console.log('test:', apiResponseState)
  const savedResponsesString = localStorage.getItem('initial-responses');
  const parseSavedResponses = JSON.parse(savedResponsesString);

  const renderCorrectDomElementsBasedOnUserInput = (parseSavedResponses) => {
    console.log('Coming from the render function...');
    if(parseSavedResponses) {
      return parseSavedResponses.map( (response, index) => {
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
    } else {
      return <div>No data</div>
    }


  };


  useEffect( () => {
    console.log('Firing my useEffect...')
    /* 
       return apiResponseState.map( (response, index) => {
        return (
          <div className='apiResponses-wrapper' key={index}>
                <p>
                  <b>Prompt:</b> {response.postData}
                </p>
                <p>
                  <b>Response:</b> {response.apiResponseData}
                </p>

          </div>
        )
      }) */

      renderCorrectDomElementsBasedOnUserInput(apiResponseState)
    
  },[apiResponseState]);

  
  

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

  
     

     {/* parseSavedResponses.map( (response, index) => {
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
        }) */}
     
    </section>
  )
};

export default ApiResponses;


/* 
 - If I have data in localStorage || if I'm using the state value,
    - return the data from localStorage

  - else, return <div>No Data</>



  OR:

  If parseSavedResponses changes,
    - call a function that returns the parsed data from storage


    if firing from a useEffect, how can I store the data and render it in React?

*/