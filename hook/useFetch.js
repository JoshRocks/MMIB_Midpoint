import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (query) => {
  const ApiUrl = process.env.API_URL;
  const ApiKey = process.env.API_KEY;

  const [data, setData] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const options = {
    method: "POST",
    url: ApiUrl,
    headers: {
      "Content-Type": "application/json",
      "X-Goog-Api-Key": ApiKey,
      "X-Goog-FieldMask":
        "places.displayName,places.formattedAddress,places.types,places.websiteUri,places.location",
    },
    params: { ...query },
  };

  const fetchdata = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      alert("There was a fetch Error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetchdata();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
