//Loading error e data con use effect che ritorni//

import { useState, useEffect } from "react";

const useFetch = (endpoint) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  const handleFetch = async () => {
    setLoading(true);
    try {
      const data = await fetch(endpoint, { headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJkYWRhZGIxNGE1MTAwMTQ2NjQwMDYiLCJpYXQiOjE2ODIzMjgwNDcsImV4cCI6MTY4MzUzNzY0N30.2VgXJNV14Ds6dxR5uTqXM1IcZ3VS3hvWvE3YVLOfPxU",
      }});
      const response = await data.json();
      setData(response);
      setLoading(false);
    } catch (error) {
      if (error) setError("Errore generico server");
    }
  } 
  useEffect(() => {
handleFetch()
  }, [endpoint])
  return {data, loading, error}
}

export default useFetch;
