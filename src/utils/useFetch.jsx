import { useState, useEffect } from 'react';

const useFetch = (url) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error('Could not fetch data for that resource');
        }
        return res.json();
      })
      .then((response) => {
        setData(response);
        setIsLoaded(true);
      })
      .catch((err) => {
        setIsLoaded(true);
        setError(err.message);
      });
  }, [url]);

  return { isLoaded, error, data };
};

export default useFetch;
