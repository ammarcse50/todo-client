import { FaPen } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";

const Todo = ({ data, handleDelete }) => {
  const { title, desc, _id } = data;

  return (
    <div className="bg-gray-800 w-full h-26 rounded-lg p-3 m-3 flex items-center justify-between">
      <div>
        <h2 className="text-xl font-bold text-white">{title}</h2>
        <p className="font-semibold text-white">{desc}</p>
      </div>

      <div className="flex items-center gap-3">
        <Link to={`/update/${_id}`} >
          {" "}
          <FaPen className="text-2xl text-[#0ecb34]" />
        </Link>

        <a onClick={() => handleDelete(_id)} href="">
          {" "}
          <MdDeleteForever className="text-4xl  text-[#ff0707]" />
        </a>
      </div>
    </div>
  );
};

export default Todo;
