import { useState, useEffect } from "react";
import { useFetcher, useSubmit } from "react-router-dom";
import Form from "../components/home/CreateForm";
import List from "../components/home/List";
const TaskDay3 = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState();
  const [age, setAge] = useState();
  const [gender, setGender] = useState();

  const handleCreate = () => {
    const newData = data?.length ? [...data] : [];
    newData.push({
      name,
      age: age.toString()?.substring(0, 16),
      gender,
      key: Date.now(),
    });
    setData(newData);
    localStorage.setItem("propsItem", JSON.stringify(newData));
  };
  useEffect(() => {
    const getData = JSON.parse(localStorage.getItem("propsItem"));
    setData(getData);
  }, []);
  return (
    <div className="main-container">
      <Form
        name={name}
        setName={setName}
        age={age}
        setAge={setAge}
        gender={gender}
        setGender={setGender}
        handleCreate={handleCreate}
      />
      <List data={data} />
    </div>
  );
};

export default TaskDay3;
