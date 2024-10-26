import { useEffect, useState } from "react";

//Call API
export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => {
        setErrorMessage(err);
      })
      .finally(() => setIsLoading(false));
  }, [url]);

  return [isLoading, errorMessage, data];
};
