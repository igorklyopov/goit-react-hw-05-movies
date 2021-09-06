export default function Reviews({ reviews }) {
  return (
    <section>
      <ul>
        {reviews &&
          reviews.map((review) => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </section>
  );
}
