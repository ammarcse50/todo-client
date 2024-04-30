import axios from 'axios';
import React, { useContext } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../Auth/AuthProvider';

const Update = () => {

       
    
     const loadData = useLoaderData();

     const {_id,email} = loadData
          
     const handleUpdate = (e)=>{

              e.preventDefault()
                
              const form = e.target;

              const title = form.title.value;
              const desc = form.desc.value;
            
               

              const task = {email,title,desc}
              console.log(task)

              axios.put(`http://localhost:5000/todos/${_id}`,task)
              .then(res=>{
                console.log('updated data',res.data)
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