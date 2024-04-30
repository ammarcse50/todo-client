import axios from 'axios';
import React, { useContext } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';

const Update = () => {

        const navigate = useNavigate()
    
     const loadData = useLoaderData();

     const {_id,email} = loadData
          
     const handleUpdate = (e)=>{

              e.preventDefault()
                
              const form = e.target;

              const title = form.title.value;
              const desc = form.desc.value;
            
               

              const task = {email,title,desc}
              console.log(task)

              axios.put(`https://todoo-server-79c10agex-ammars-projects-dc5c7534.vercel.app/todos/${_id}`,task)
              .then(()=>{
                 
                let timerInterval;
                Swal.fire({
                  title: "Your Task Updated!",
                  
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
                  }
                }).then((result) => {
                  /* Read more about handling dismissals below */
                  if (result.dismiss === Swal.DismissReason.timer) {
                    console.log("I was closed by the timer");
                  }
                });
                
                 navigate("/")
            })


     }
    return (
        <div className="mt-10">
        <h2 className="text-5xl font-bold text-center">Register Now!</h2>
        <form onSubmit={handleUpdate} className="card-body md:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Title</span>
            </label>
            <input
              type="text"
              name="title"
              placeholder="Task Title"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              name="desc"
              placeholder="Task Description"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-[#0ecb34] text-xl text-white font-bold hover:shadow-xl hover:shadow-orange-500">
           Update
            </button>
          </div>
         
        </form>
      </div>
    );
};

export default Update;