import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const Register = () => {
  const { user, signUpUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;

    const password = form.password.value;

    signUpUser(email, password)
      .then((res) => {
        let timerInterval;
        Swal.fire({
          title: "Registration Successful!",

          timer: 1000,
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
          },
        }).then((result) => {
          /* Read more about handling dismissals below */
          if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
          }
        });
      })

      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-10">
      <h2 className="text-5xl font-bold text-center">Register Now!</h2>
      <form onSubmit={handleRegister} className="card-body md:w-1/2 mx-auto">
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
          <button className="btn bg-[#0ecb34] text-xl text-white font-bold hover:shadow-xl hover:shadow-orange-500">
            Register
          </button>
        </div>
        <p className="text-center text-xl text-white font-semibold">
          Already have an account ?{" "}
          <Link className="text-orange-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
