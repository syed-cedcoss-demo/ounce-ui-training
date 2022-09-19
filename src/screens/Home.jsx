import { useEffect, useState } from "react";
import SelectList from "../components/home/SelectList";
import "../components/home/Home.css";
const Home = () => {
  const [data, setData] = useState();
  useEffect(() => {
    const getData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const result = await response.json();
      setData(result);
    };
    getData();
  }, []);

  return (
    <div className="main-container">
      <SelectList data={data} />
    </div>
  );
};

export default Home;
