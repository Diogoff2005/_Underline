import { useState } from "react";
import FormInput from "./FormInput";
import { useFetchGet } from "../hooks/useFecthGet";

const ReviewForm = ({ handleLoading, isLoading }) => {
  const movies = useFetchGet(`GetMovies?sortBy=name`, isLoading, handleLoading);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);
  const [submitSuccess, setSubmitSuccess] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    text: "",
    movie: "",
    movieId: "",
    email: "",
    rating: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "movieId") {
      const selectedOption = event.target.options[event.target.selectedIndex];
      const dataName = selectedOption.getAttribute("data-name");
      setFormData({
        ...formData,
        movie: dataName,
      });
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitError(null);
    setSubmitSuccess(null);

    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$/;

    if (!formData.title) {
      setSubmitError("Title is required");
      return;
    }

    if (!formData.text) {
      setSubmitError("Text is required");
      return;
    }

    if (!formData.firstName) {
      setSubmitError("First name required");
      return;
    }

    if (!formData.lastName) {
      setSubmitError("Last name required");
      return;
    }

    if (!formData.email) {
      setSubmitError("Email is required");
      return;
    } else if (!regex.test(formData.email)) {
      setSubmitError("Invalid email format");
      return;
    }

    if (!formData.rating) {
      setSubmitError("Rating is required");
      return;
    }

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
        setFormData({
          title: "",
          text: "",
          movie: "",
          movieId: "",
          email: "",
          rating: "",
          firstName: "",
          lastName: "",
        });
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
            handleChange={handleChange}
            value={formData.title}
          />
          {movies && (
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Movie
              <select
                name="movieId"
                className="block w-full mt-1 p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-900"
                onChange={handleChange}
              >
                {movies.map((movie, index) => (
                  <option
                    key={index}
                    name={"movieId"}
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
            handleChange={handleChange}
            value={formData.text}
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
            handleChange={handleChange}
            value={formData.firstName}
          />
        </div>
        <div className="md:w-1/4 w-full">
          <FormInput
            label={"Last Name"}
            type={"text"}
            placeholder={"Enter your last name"}
            name={"lastName"}
            handleChange={handleChange}
            value={formData.lastName}
          />
        </div>
        <div className="md:w-1/4 w-full">
          <FormInput
            label={"Email"}
            type={"email"}
            placeholder={"Enter your email"}
            name={"email"}
            handleChange={handleChange}
            value={formData.email}
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
            handleChange={handleChange}
            value={formData.rating}
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
        <p className="text-l text-red-500 pt-2 font-medium">{submitError}</p>
      )}
      {submitSuccess && submitSuccess == "200" && (
        <p className="text-l text-green-500 pt-2 font-medium">
          Review submetida com sucesso!
        </p>
      )}
    </form>
  );
};

export default ReviewForm;
