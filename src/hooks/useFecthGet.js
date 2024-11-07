import { useEffect, useState } from "react";

//Call API
export const useFetchGet = (url, isPageLoading, handleLoading) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    isPageLoading && !isPageLoading && isLoading && handleLoading(isLoading);
  }, [isPageLoading]);

  useEffect(() => {
    if (errorMessage) {
      handleLoading(isLoading, errorMessage);
    } else {
      handleLoading(isLoading);
    }
  }, [isLoading, errorMessage]);

  useEffect(() => {
    fetch(`https://moviesfunctionapp.azurewebsites.net/api/${url}`)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => {
        setErrorMessage(err);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return data;
};
