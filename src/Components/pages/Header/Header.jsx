import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../Auth/AuthProvider";
import { Link,  useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logOut ,loading } = useContext(AuthContext);
  const navigate = useNavigate();
  


  const handleSignOut = () => {
    return logOut();
  };
  const handleAddTask = (e) => {
    e.preventDefault();

    if (!user) {
      return navigate("/login");
    }

    const form = e.target;

    const title = form.title.value;
    const desc = form.desc.value;
    const email = user.email;

    const task = { email , title, desc };

    console.log(task);

    axios
      .post("http://localhost:5000/todos", task)
      .then((res) =>{
       
        if(res.data.insertedId)
        { console.log(res.data)
            alert('DataInserted')
        }
        form.reset()
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="bg-gradient-to-r  mb-10 ">
      <div className="flex justify-between">
        <div className="navbar bg-base-100">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                 <Link to="/login"><li>Login</li></Link>
                 <Link to="/register"><li>Register</li></Link>

              </ul>
            </div>
          </div>
          <div className="navbar-center ">
            <h2 className="md:text-5xl text-3xl font-bold mt-2">My Todos</h2>
          </div>
          <div className="navbar-end mt-3">
            { user ? 
              <button onClick={handleSignOut} className="btn btn-sm hover:shadow-xl hover:shadow-[#0ecb34] text-white text-sm ">
                Logout
              </button>
              :
             <Link to="/login"><button  className="btn">Sign In</button></Link> 
            }
          </div>
        </div>
      </div>

      <div>
        <form
          onSubmit={handleAddTask}
          className="md:flex items-center justify-center gap-10 mt-10"
        >
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              className="input input-bordered outline outline-1 text-white focus:shadow-xl focus:shadow-[#0ecb34]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Description</span>
            </label>
            <input
              type="text"
              name="desc"
              placeholder="Task Description"
              className="input input-bordered focus:shadow-xl text-white focus:shadow-[#0ecb34] outline outline-1"
              required
            />
          </div>
          <div className="form-control mt-9 ">
            <button className="btn hover:shadow-xl hover:shadow-[#0ecb34] text-white text-xl ">
              +Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
