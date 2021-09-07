export default function Reviews({ reviewsData }) {
  return (
    <section>
      <ul>
        {reviewsData.map((review) => (
          <li key={review.id}>
            <p>{review.author}</p>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
