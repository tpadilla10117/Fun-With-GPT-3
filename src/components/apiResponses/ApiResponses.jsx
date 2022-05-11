import React, {useEffect} from 'react'

function ApiResponses( { apiResponseState } ) {

  const savedResponsesString = localStorage.getItem('initial-responses');
  const parseSavedResponses = JSON.parse(savedResponsesString);

  const renderCorrectDomElementsBasedOnUserInput = () => {
    if(parseSavedResponses) {
      return parseSavedResponses.map( (response, index) => {
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
      })
    } else {
      console.log('No Data Condition:')
      return <div>No data</div>
    }


  };


  useEffect( () => {
    
    if(parseSavedResponses) {
      return parseSavedResponses.map( (response, index) => {
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
      })
    } else {
      console.log('No Data Condition:')
      return <div>No data</div>
    }

  },[parseSavedResponses]);

  
  

console.log(apiResponseState)
console.log( 'Coming from localStorage: ',typeof savedResponsesString);
console.log( ' parsing the localStorage items: ', typeof parseSavedResponses)
  return (
    <section className='apiResponses-parent-container'>
        {/* TODO: Would need to .map over apiResponseState (the app state) and render out responses */}
      
      <h3>Responses:</h3>
      
      {renderCorrectDomElementsBasedOnUserInput()}
        

     {/*  {
        parseSavedResponses ?
          parseSavedResponses.map( (response, index) => {
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
          })

        :

        apiResponseState.map( (response, index) => {
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
        })
 
      } */}

      

      {/* {apiResponseState ? 
            
            apiResponseState.map( (response, index) => {
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
            })

            :

            <div className='apiResponses-wrapper'>
              No Responses
            </div>
        
          } */}

     
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