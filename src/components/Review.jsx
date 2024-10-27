const Review = ({ review }) => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h3 className="font-semibold  text-2xl">{review.title}</h3>
        <p className="bg-gray-900 text-white w-8 h-8 flex items-center justify-center rounded">
          {review.rating}
        </p>
      </div>
      <p className="font-bold text-xl py-2">{review.movie}</p>
      <p>{review.text}</p>
      <p className="text-sm text-gray-500">
        {review.first_name} {review.last_name} - {review.email}
      </p>
    </div>
  );
};

export default Review;
