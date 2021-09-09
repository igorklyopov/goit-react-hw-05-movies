import React from "react";

export default function ReviewsList({ reviewsData }) {
  return (
    <ul>
      {reviewsData.map((review) => (
        <li key={review.id}>
          <p>{review.author}</p>
          <p>{review.content}</p>
        </li>
      ))}
    </ul>
  );
}
