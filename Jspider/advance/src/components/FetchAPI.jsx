import { useEffect } from "react";
import { useState } from "react";
const FetchAPI = () => {
  let [dbData, setDbData] = useState([]);
  useEffect(() => {
    async function fetchDB(params) {
      try {
        let resp = await fetch("https://jsonplaceholder.typicode.com/posts");
        let data = await resp.json();
        // console.log(data);
        setDbData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchDB();
  }, []);
  return (
    <>
      {dbData.map((ele) => {
        console.log(ele);
      })}
    </>
  );
};

export default FetchAPI;
