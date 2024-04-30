import  { useContext } from "react";
import { AuthContext } from "./AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Login = () => {

      const {signInUser}= useContext(AuthContext)

       const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();

 

      const form = e.target;

      const email = form.email.value;

      const password = form.password.value;
          
       signInUser(email,password)
       .then((res)=>{
        let timerInterval;
Swal.fire({
  title: "Login Successful!",
 
  timer: 2000,
  timerProgressBar: true,
  didOpen: () => {
    Swal.showLoading();
    const timer = Swal.getPopup().querySelector("b");
    timerInterval = setInterval(() => {
      timer.textContent = `${Swal.getTimerLeft()}`;
    }, 100);
  },
  willClose: () => {
    clearInterval(timerInterval);
  }
}).then((result) => {
  /* Read more about handling dismissals below */
  if (result.dismiss === Swal.DismissReason.timer) {
    console.log("I was closed by the timer");
  }
});
        
        navigate('/')
       })
       .catch((err)=> {
        let timerInterval;
        Swal.fire({
          title: "You don't have an account go to register now!",
         
          timer: 2000,
          timerProgressBar: true,
          didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
              timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
          },
          willClose: () => {
            clearInterval(timerInterval);
          }
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
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
