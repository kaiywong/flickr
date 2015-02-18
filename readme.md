Ticket Master Coding challenge - K Y Wong

The test was to integrate a flicker search, image viewer and pagination with the complication of building it, where possible, without the use of third-party libraries or frameworks.

I decided to use jQuery to keep the code managable and re-able. To parse the json and store the different attributes using native js would cumbersome and difficult to manage in the time available.

The interface works by entering a search term in the input and then it is possible to preview and select the results.

The search function inserts the results from the json object into an array of jquery objects that can be accessed to page the previews or access the large image's url.

If more time was available it would be disable to add the following:

1. Animate the main image into a carousel with transitions.
2. Place the carousel buttons on top of the image so that they are not lost when the image is narrow.
3. fix the pagingnation so that is starts at 1 instead of 0 and underlines the current page.
4. Namespace the js so that it will interfere with other modules.
5. Add extra images for hover states.
6. Add the prev/next methods for the paging.# flickr
