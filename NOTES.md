<!-- Sample web service requests: -->
https://beta.openai.com/overview

<!-- Objectives: -->
    1) Fetch data from OpenAI API [x]
    2) Display a form that takes in a prompt as a submission [x]
    3) Styling [x]
   


<!-- Structure: -->
    src
        |
        index.js
        |
        pages
        |
        components
        |
        assets

    
<!-- Compnent Syntax & Naming conventions: -->
    - id & classNames {e.g. "heading-parent-container"}, {e.g. "heading-paragraph-btn"}


<!-- Stylesheets: -->
    - {https://sass-lang.com/install} 


<!-- TODO: Limitations -->
    - 1) Would be nice to show query instructions on the UI, perhaps a modal on initial render, and a button that renders the modal on click
    - 2) Like-state maintained in local storage persist for any similarly indexed card - need unique identifier in backend for proper state mgmt...unless it's a re-render issue

    //TODO: The single query is not rendering properly, yet a start_date&end_date works

    TroubleShooting Bugs:

    


