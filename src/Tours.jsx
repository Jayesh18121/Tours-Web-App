import React, { useState } from "react";
import Tour from "./Tour";
import { FaMoon, FaCartPlus } from "react-icons/fa";
const Tours = ({ // fetching incoming props
  tours,
  removeTour,
  likeIncreement,
  likeDecreement,
  tog,
  setDark,
  countIncreement,
  countDecreement,
  total,
}) => {
  let [search, setSearch] = useState("");
  // creating state variables for storing input search values.
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className={tog ? "cart-icon" : "cart-icon-dark"}>
          <FaCartPlus />
          <div className="amount-container">
            <p className={tog ? "total-amount" : "total-amount-dark"}>
              ${total}
            </p>
          </div>
        </div>
        <button onClick={setDark} className={tog ? "dark-mode" : "light-mode"}>
          <FaMoon />
        </button>
        <input
          className="input-container"
          placeholder="TYPE CITY NAME"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className={tog ? "tours" : "tours-dark"}> 
        {tours // ternary operator working for toggling dark and light mode.
          .filter((el) => {
            return search === "" ? el : el.name.includes(search);
          })
          .map((tour) => {
            return (
              <Tour
                key={tour.id}
                {...tour}
                removeTour={removeTour}
                likeIncreement={likeIncreement}
                likeDecreement={likeDecreement}
                tog={tog}
                countIncreement={countIncreement}
                countDecreement={countDecreement}
              />
            );
          })}
      </div>
    </section>
  );
};

export default Tours;
