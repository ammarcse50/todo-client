import  { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link } from "react-router-dom";

const Login = () => {

      const {signInUser}= useContext(AuthContext)

  const handleLogin = (e) => {
    e.preventDefault();

 

      const form = e.target;

      const email = form.email.value;

      const password = form.password.value;
          
       signInUser(email,password)
       .then((res)=>{
        console.log(res.user)
        alert('Login Success!')
       })
       .catch((err)=> {
        console.log(err)
       })
        

  };

  return (
    <div className="mt-10">
            <h2 className="text-5xl font-bold text-center">Login Now! </h2>
      <form onSubmit={handleLogin} className="card-body md:w-1/2 mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-[#0ecb34] text-white text-xl font-bold hover:shadow-xl hover:shadow-orange-500">Login</button>
        </div>
      </form>
      <p className="text-center text-xl text-white font-semibold">New to here ? <Link className="text-orange-600 font-bold" to="/register">Register</Link></p>
    </div>
  );
};

export default Login;
