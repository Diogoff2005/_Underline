import { useState } from "react";

const useLoading = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLoading = (loading, errorMessage) => {
    errorMessage && setErrorMessage(errorMessage);
    setIsLoading(loading);
  };

  return [isLoading, errorMessage, handleLoading];
};

export default useLoading;
