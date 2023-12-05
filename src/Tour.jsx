import React, { useState } from "react";
import { FaRegThumbsUp, FaRegThumbsDown, FaMinusCircle } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";

const Tour = ({
  id,
  image,
  info,
  likes,
  count,
  name,
  price,
  removeTour,
  likeIncreement,
  likeDecreement,
  tog,
  countIncreement,
  countDecreement,
}) => {
  const [readMore, setReadMore] = useState(false);
  // creating state variables for storing the toogle state to show more information about tours.
  return (
    <article className={tog ? "single-tour" : "single-tour-dark"}>
      <img src={image} alt={name} className="img" />
      <span className={tog ? "tour-price" : "tour-price-dark"}>${price}</span>
      <span className={tog ? "tour-likes" : "tour-likes-dark"}>{likes}</span>
      <div className={tog ? "tour-info" : "tour-info-dark"}>
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            className={tog ? "info-btn" : "info-btn-dark"}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "show less" : "  read more"}
          </button>
        </p>
        <button
          className={
            tog ? "delete-btn btn-block btn" : "delete-btn-dark btn-block btn"
          }
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
      <div className={tog ? "footer_element" : "footer_element-dark"}>
        <button
          className={tog ? "thumbs thumbs_up" : "thumbs-dark thumbs_up"}
          onClick={() => likeIncreement(id)}
        >
          <FaRegThumbsUp />
        </button>
        <div className="counter-container">
          <button
            onClick={() => countIncreement(id)}
            className={tog ? "counter-increement" : "counter-increement-dark"}
          >
            <IoIosAddCircle />
          </button>
          <p className="counter-value">{count}</p>
          <button
            onClick={() => countDecreement(id)}
            className={tog ? "counter-decreement" : "counter-decreement-dark"}
          >
            <FaMinusCircle />
          </button>
        </div>
        <button
          className={tog ? "thumbs thumbs_down" : "thumbs-dark thumbs_down"}
          onClick={() => likeDecreement(id)}
        >
          <FaRegThumbsDown />
        </button>
      </div>
    </article>
  );
};

export default Tour;
