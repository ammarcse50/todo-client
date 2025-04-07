import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import Todo from "../Todos/Todo";

const Board = () => {
  const { user } = useContext(AuthContext);

  const [record, setRecord] = useState([]);

  const url = `http://localhost:5000/todos?email=${user?.email}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setRecord(response.data);
      } catch (error) {
        // Handle errors here
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
  }, []);

     // delete task 
    const handleDelete = (id) => {
        axios.delete(`http://localhost:5000/todos/${id}`).then((res) => {
          console.log(res.data);
        });
        const filter = record.filter((data) => data._id !== id);
    
        setRecord(filter);
      };
    


  return (
    <div className=" min-h-screen">
      <div className="pr-5 pb-4">
        {record?.map((data) => (
          <Todo key={data._id} handleDelete={handleDelete} data={data}></Todo>
        ))}
      </div>
    </div>
  );
};

export default Board;
