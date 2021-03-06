import React, { useState } from 'react';
import users from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';
const Review = () => {
  const [index, setIndex] = useState(0);
  const { name, job, image, text } = users[index];
  const checkNumber = (number) => {
    if (number > users.length - 1) {
      return 0;
    }
    if (number < 0) {
      return users.length - 1;
    }
    return number;
  };
  const nextUser = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };
  const prevUser = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const randomUser = () => {
    let randomNumber = Math.floor(Math.random() * users.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    setIndex(checkNumber(randomNumber));
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img"></img>
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevUser}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextUser}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomUser}>
        Suprise Me
      </button>
    </article>
  );
};

export default Review;