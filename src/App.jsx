import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

// URL from which we are fetching data.
const url = "https://course-api.com/react-tours-project";

function App() {
  // state variable for showing loading spiral till the data is fetch.
  const [loading, setLoading] = useState(true); 
  // state variable storing the data coming from API.
  const [tours, setTours] = useState([]);
  // state variable for toggling between light and dark mode
  const [tog, setTog] = useState(true); 
  // state variable storing total amount value displayed over cart.
  const [total, setTotal] = useState(0);

  // function for toggling between light (tog === true) and dark(tog === false)  mode.
  const setDark = () => {
    setTog(!tog);
  };

  // Conditionals for setting background and font color for respective color modes.
  if (!tog) {
    document.body.style = "background:  #121212;color:#fff";
  } else {
    document.body.style = "background: #f8fafc;color:#0f172a";
  }

  // functionality for (not interested) option deleting the tour card with id.
  const removeTour = (id) => {
    const newTours = tours
      .filter((tour) => tour.id !== id)
      .sort((a, b) => (b.likes > a.likes ? 1 : -1)); // sorting decreasingly filtered array according to no of likes.
    setTours(newTours);
  };

  const likeIncreement = (id) => {
    const newTours = tours
      .map((el) => {
        if (el.id === id) {
          return { ...el, likes: el.likes + 1 };// spread operator.
        }// function increasing likes of tour card with given id by 1.
        return { ...el };
      })
      .sort((a, b) => (b.likes > a.likes ? 1 : -1)); //sorting decreasingly filtered array according to no of likes.
    console.log(newTours);
    setTours(newTours);
  };

  const countIncreement = (id) => {
    const newTours = tours.map((el) => {
      if (el.id === id) {
        return { ...el, count: el.count + 1 };
      } // function increasing count of tour card with given id by 1.
      return { ...el };
    });
    console.log(newTours);
    setTours(newTours);
  };

  const likeDecreement = (id) => {
    const newTours = tours
      .map((el) => {
        if (el.id === id) {
          return { ...el, likes: el.likes - 1 };
        } //// function decreasing likes of tour card with given id by 1.
        return { ...el };
      })
      .sort((a, b) => (b.likes > a.likes ? 1 : -1));
    setTours(newTours);
  };

  // function to check the count state variable if it goes negative or becomes 0.
  const checkNumber = (num) => {
    const result = num <= 0 ? 0 : num; // Ternary Operator
    return result;
  };

  const countDecreement = (id) => {
    const newTours = tours.map((el) => {
      if (el.id === id) {
        return { ...el, count: checkNumber(el.count - 1) };
      } // function decreasing count of tour card with given id by 1.
      return { ...el };
    });
    setTours(newTours);
  };


  // function for calculating the total amount,
  //by adding the product of no of counts and the respective price of an indiviual tour card.

  const calculateAmount = () => {
    /* let amount = tours[0].price;
   let num = amount.replace(',','');
   console.log(2,parseInt(num));*/

   // using reduce function of array where total indicates total amount and el is instance (individual tour object),
   // from tours array.
   // replacing the ',' with '' as prices are given in string form in array of objects.
    let amount = tours.reduce(
      (total, el) =>
        (total = total + el.count * parseInt(el.price.replace(",", ""))),
      0
    );

    setTotal(amount);
  };

  /* const filterSearch = (search) =>{
    let new_list = tours.filter((el)=>{
      return search === ''?el:el.name.substr(7,5).includes(search);
    })
    setSearch(new_list);
  }
*/


  // functionality for fetching the data and setting it to tours state variable from API.
  const fetchTours = async () => {
    // will use later
    setLoading(true); // display of loading spiral till the data is fetched and displayed on the screen.
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      // new code
      let new_tours = tours.map((el) => {
        return { ...el, likes: 0, count: 0 }; // adding likes and count properties inside tours array.
      });
      setTours(new_tours);
    } catch (error) {
      setLoading(false);
      console.log(error); // error handling
    }
  };
  useEffect(() => {
    fetchTours();
  }, []); // fetching the data during initial render of component.
  useEffect(() => {
    if (!loading) {
      calculateAmount(); // invoking calculating amount function after loaing is over, as data will be available.
    }
  }, [tours]); // adding tours to dependency array as this function will always be invoked when tours state is updated.
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    ); // diplaying the Loading component when loading is true.
  } 
  if (tours.length === 0) { // again refetching the data when we have eliminated all the tour cards.
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchTours()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return ( // showing the main area.
  // passing props to Tours component.
    <main>
      <Tours
        tours={tours}
        removeTour={removeTour}
        likeIncreement={likeIncreement}
        likeDecreement={likeDecreement}
        tog={tog}
        setDark={setDark}
        countIncreement={countIncreement}
        countDecreement={countDecreement}
        total={total}
      />
    </main>
  );
}

export default App;
