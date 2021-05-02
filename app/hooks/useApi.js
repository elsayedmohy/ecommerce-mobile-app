import React, { useState } from "react";

export default useApi = (apiFunc) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const requestData = async () => {
    setLoading(true);
    const result = await apiFunc();
    setLoading(false);
    if (!result.ok) return setError(true);

    setError(false);
    setData(result.data);
  };
  return { requestData, loading, error, data };
};
