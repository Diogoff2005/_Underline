const Review = ({ review }) => {
  return (
    <div>
      <div>
        <h3>{review.title}</h3>
        <p>{review.rating}</p>
      </div>
      <p>{review.movie}</p>
      <p>{review.text}</p>
      <p>
        {review.first_name} {review.last_name} {review.email}
      </p>
    </div>
  );
};

export default Review;
