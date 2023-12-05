
#### Setup

First created - three components (Tours, Tour, and Loading), then created three separate files in project directory: Tours.jsx, Tour.jsx, and Loading.jsx. In each of these files, defined a React functional component that returns JSX code for rendering the respective component.

#### Fetch Tours

The Tours component will be responsible for rendering a list of Tour components. In App.jsx, fetched the tours data from a URL using the fetch API. Before the data is loaded,showed a loading spinner or message, which can be implemented using the Loading component.

#### Render Tours

Once the data is loaded, set the state of component to store the tours data.Then map over the tours array and render a Tour component for each tour. Each Tour component  received the tour data as props, including the tour's id, image, info, name, and price.

#### Remove Tour

 Implemented the "remove tour" functionality, by adding a button to each Tour component that, when clicked, removes the tour from the list of tours.Achieve this by updating the state of the Tours component to remove the tour from the tours array.

#### Read More

To implement the "read more" functionality,added a button to each Tour component that, when clicked, expands the description of the tour. also achieved this by updating the state of the Tour component to toggle a "read more" flag, and conditionally rendered the full description based on the flag.

#### Re-fetch Tours

 Implementing a "re-fetch" functionality by adding a button or other user interface element that, when clicked, re-fetches the tours data from the URL and updates the state of the Tours component. Also added a loading state again during the re-fetching process.

### Liking and disliking tours

Implemented a "decreement like" and " increement like" functionality by adding a dislike button and like button respectively. And fetching the tour data according to the highest no positive ratings (likes-dislikes).
Showing most popular tour card first and most lower rated at the last.

### Dynamic search 

Implemented dynamic search functionality where from searching by city name we can get the respective tour card component.

### Added Cart feature

Added increase and decrease count functionality and calcalted the total amount by by adding the product of no of counts and the respective price of an indiviual tour card.

### Dark Mode and Light Mode 

Implementing and toggling between dark and light mode by using toggle button.
