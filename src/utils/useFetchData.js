import { useEffect,useState } from "react";

const useFetchData = (link) => {
    const [data,setData]=useState(null);
    const [error,setError]=useState(null);
    const [loading,setLoading]=useState(true);
  useEffect(() => {
    const fetchData = async () => {
        try {
          const response = await fetch(link);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const jsonData = await response.json();
          setData(jsonData);
        } catch (err) {
          setError(err.message);
        } finally {
            setLoading(false);
        }
      };
    fetchData();
  }, []);

   
  return {data,error,loading};
};

export default useFetchData;
