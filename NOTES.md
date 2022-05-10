<!-- Sample web service requests: -->
https://api.nasa.gov/planetary/apod?api_key=wd5U8KXHEwH3VFh4LFzXqeqMIW4vUjMqn7EtRgSU

<!-- Objectives: -->
    1) Fetch data from one of NASA’s APIs and display the resulting images [x]
    2) Display descriptive data for each image (for example: title, date, description, etc.) [x]
    3) Like an image [x]
    4) Unlike an image [x]


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
    - id & classNames {e.g. "heading-container"}, {e.g. "heading-paragraph-btn"}


<!-- Stylesheets: -->
    - {https://sass-lang.com/install} 


<!-- TODO: Limitations -->
    - 1) Would be nice to show query instructions on the UI, perhaps a modal on initial render, and a button that renders the modal on click
    - 2) Like-state maintained in local storage persist for any similarly indexed card - need unique identifier in backend for proper state mgmt...unless it's a re-render issue

    //TODO: The single query is not rendering properly, yet a start_date&end_date works

    TroubleShooting Bugs:

    **NOTE: if query a date, you don't receive a JSON Array, but rather a string
    **NOTE: count=integer and start_date to end_date return JSON Arrays

    a) Currently, once a specific card's like button is clicked for the first time, state is maintained upon refresh
    b) if user makes a new query, the first card to return will have it's like button showing as active; however, if refreshed on this same card, active state is removed.  IF user return's to original card, the state is also gone.  YET a refresh on the original card will return the active state on the like button

    c) If previously liked a postm you can query anything EXCEPT the original post by it's {date=} query, and the "liked" state will return false.  If you refresh while the liked posts are in view (meaning liked state is true), the state reflects this change.


