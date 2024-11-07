import { useState } from "react";
import FormInput from "./FormInput";
import { useFetchGet } from "../hooks/useFecthGet";

const ReviewForm = ({ handleLoading, isLoading }) => {
  const movies = useFetchGet(`GetMovies?sortBy=name`, isLoading, handleLoading);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);

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

    setSubmitError(false);
    setSubmitSuccess(false);
    setIsSubmitting(true);

    fetch(`https://moviesfunctionapp.azurewebsites.net/api/SubmitReview`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        setSubmitSuccess(response.status);
        e.target.reset();
      })
      .catch((err) => {
        setSubmitError(err);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <form className="pb-10" onSubmit={handleSubmit}>
      <h1 className="text-2xl w-full font-bold mb-6">Submit Review</h1>
      <div className="flex md:flex-row flex-col md:gap-6 gap-0">
        <div className="flex md:w-1/3 w-full flex-col">
          <FormInput
            label={"Title"}
            type={"text"}
            placeholder={"Enter the title of your review"}
            name={"title"}
          />
          {movies && (
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Movie
              <select
                name="movieId"
                className="block w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900"
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
        </div>
        <div className="md:w-2/3 w-full flex flex-col max-h-full">
          <FormInput
            label={"Review"}
            type={"textarea"}
            placeholder={"Enter the title of your review"}
            name={"text"}
          />
        </div>
      </div>
      <div className="w-full flex md:flex-row flex-col md:gap-6 gap-0 mt-2 md:items-center items-start">
        <div className="md:w-1/4 w-full">
          <FormInput
            label={"First Name"}
            type={"text"}
            placeholder={"Enter your first name"}
            name={"firstName"}
          />
        </div>
        <div className="md:w-1/4 w-full">
          <FormInput
            label={"Last Name"}
            type={"text"}
            placeholder={"Enter your last name"}
            name={"lastName"}
          />
        </div>
        <div className="md:w-1/4 w-full">
          <FormInput
            label={"Email"}
            type={"email"}
            placeholder={"Enter your email"}
            name={"email"}
          />
        </div>
        <div className="md:w-1/4 w-full">
          <FormInput
            label={"Rating (0 to 5)"}
            type={"number"}
            min="0"
            max="5"
            placeholder={"Enter the moovie rating"}
            name={"rating"}
          />
        </div>
      </div>
      <div className="flex flex-col md:w-1/6 w-full">
        <button
          disabled={isSubmitting}
          type="submit"
          className={`w-full py-3 mt-2 px-4 bg-gray-900 text-sm text-white font-semibold rounded-lg ${!isSubmitting && "hover:bg-gray-800"}`}
        >
          {isSubmitting ? "Submitting..." : "Submit Review"}
        </button>
      </div>
      {submitError && (
        <p className="text-l pt-2 font-medium">{submitError.toString()}</p>
      )}
      {submitSuccess && submitSuccess == "200" && (
        <p className="text-l pt-2 font-medium">Review submetida com sucesso!</p>
      )}
    </form>
  );
};

export default ReviewForm;
