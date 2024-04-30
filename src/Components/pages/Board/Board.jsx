import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Todo from "../Todos/Todo";

const Board = () => {
  const { user } = useContext(AuthContext);

  const [record, setRecord] = useState([]);

  axios
    .get(`http://localhost:5000/todos?email=${user?.email}&sort=1`)
    .then((res) => {
      console.log(res.data);
      setRecord(res.data);
    });

  return (
    <div className="border min-h-screen">
      <div className="pr-5">
        {record.map((data) => (
          <Todo key={data._id} data={data}></Todo>
        ))}
      </div>
    </div>
  );
};

export default Board;
