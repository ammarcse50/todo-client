import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Todo from "../Todos/Todo";

const Board = () => {
  const { user } = useContext(AuthContext);

  const [record, setRecord] = useState([]);
        
  const url = `http://localhost:5000/todos?email=${user?.email}&sort=1`;

  useEffect(() => {
    axios
      .get(url)
      
      .then(res => setRecord(res.data));
  }, []);

  const handleDelete = (id) => {
    console.log(id, "deleted");
  };

  return (
    <div className=" min-h-screen">
      <div className="pr-5 pb-4">
        {record?.map((data, idx) => (
          <Todo key={idx} handleDelete={handleDelete} data={data}></Todo>
        ))}
      </div>
    </div>
  );
};

export default Board;
