import { useState } from "react";
import "./Reviews.scss";

export default function Reviews() {
  const [review, setReview] = useState({
    name: "",
    bookTitle: "",
    overallRating: "",
    plotRating: "",
    characterRating: "",
    recommend: "",
    thoughts: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReview((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Review submitted:", review);
  };

  return (
    <div className="reviews">
      <h2 className="reviews__title">Book of the Month Review Form</h2>
      <form className="reviews__form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={review.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Book Title:
          <input
            type="text"
            name="bookTitle"
            value={review.bookTitle}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Overall Rating:
          <select
            name="overallRating"
            value={review.overallRating}
            onChange={handleChange}
            required
          >
            <option value="">Select one</option>
            <option value="1">★☆☆☆☆</option>
            <option value="2">★★☆☆☆</option>
            <option value="3">★★★☆☆</option>
            <option value="4">★★★★☆</option>
            <option value="5">★★★★★</option>
            <option value="DNF">DNF</option>
            <option value="Did not read">Did not read</option>
          </select>
        </label>

        <label>
          Plot Rating (1–5):
          <input
            type="number"
            name="plotRating"
            value={review.plotRating}
            onChange={handleChange}
            min="1"
            max="5"
          />
        </label>

        <label>
          Character Rating (1–5):
          <input
            type="number"
            name="characterRating"
            value={review.characterRating}
            onChange={handleChange}
            min="1"
            max="5"
          />
        </label>

        <label>
          Would you recommend this book?
          <select
            name="recommend"
            value={review.recommend}
            onChange={handleChange}
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
            <option value="Maybe">Maybe</option>
          </select>
        </label>

        <label>
          Overall Thoughts:
          <textarea
            name="thoughts"
            value={review.thoughts}
            onChange={handleChange}
            rows="5"
          ></textarea>
        </label>
      </form>

      <button type="submit" className="reviews__submit">
        Submit Review
      </button>
    </div>
  );
}
