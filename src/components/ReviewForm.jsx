import { useState } from "react";
import FormInput from "./FormInput";
import Loader from "./Loader";
import { useFetchGet } from "../hooks/useFecthGet";

const ReviewForm = () => {
  const [isLoading, errorMessage, movies] = useFetchGet(
    `GetMovies?sortBy=name`
  );

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      title: e.target.title.value,
      text: e.target.text.value,
      movie:
        e.target.movieId.options[e.target.movieId.selectedIndex].getAttribute(
          "data-name"
        ),
      movieId: e.target.movieId.value,
      email: e.target.email.value,
      rating: e.target.rating.value,
      firstName: e.target.firstName.value,
      lastName: e.target.lastName.value,
    };

    setIsSubmitting(true);

    fetch(`https://moviesfunctionapp.azurewebsites.net/api/SubmitReview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        console.log(response);
        e.target.reset();
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form className="max-w-xl mx-auto pb-14" onSubmit={handleSubmit}>
      <h1 className="text-2xl font-bold mb-6">Submit Review</h1>
      <FormInput
        label={"Title"}
        type={"text"}
        placeholder={"Enter the title of your review"}
        name={"title"}
      />
      <FormInput
        label={"Review"}
        type={"textarea"}
        placeholder={"Enter the title of your review"}
        name={"text"}
      />
      {isLoading && <Loader />}
      {errorMessage && <Loader message={errorMessage} />}
      {movies && (
        <label className="block mb-2 text-sm font-medium text-gray-700">
          Movie
          <select
            name="movieId"
            className="block w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
          >
            {movies.map((movie, index) => (
              <option
                key={index}
                name={movie.id}
                value={movie.id}
                data-name={movie.title}
              >
                {movie.title}
              </option>
            ))}
          </select>
        </label>
      )}
      <FormInput
        label={"Rating (0 to 5)"}
        type={"number"}
        min="0"
        max="5"
        placeholder={"Enter your email"}
        name={"rating"}
      />
      <FormInput
        label={"First Name"}
        type={"text"}
        placeholder={"Enter your first name"}
        name={"firstName"}
      />
      <FormInput
        label={"Last Name"}
        type={"text"}
        placeholder={"Enter your last name"}
        name={"lastName"}
      />
      <FormInput
        label={"Email"}
        type={"email"}
        placeholder={"Enter your email"}
        name={"email"}
      />
      <button
        disabled={isSubmitting}
        type="submit"
        className="w-full py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
      >
        {isSubmitting ? "Submitting..." : "Submit Review"}
      </button>
    </form>
  );
};

export default ReviewForm;
