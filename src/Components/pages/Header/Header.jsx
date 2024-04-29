import axios from "axios";

const Header = () => {

    const handleAddTask = e=>{
       
        e.preventDefault()


        const form = e.target;

        const title = form.title.value;
        const desc = form.desc.value;

        const task = {title,desc}


        console.log(task)

         
        axios.post('')

    }
    return (
        <div className="bg-gradient-to-r  mb-10 ">
            <h2 className="text-5xl font-bold text-center text-white">My Todos</h2>

            <div>
        <form onSubmit={handleAddTask} className="md:flex items-center justify-center gap-10 mt-10">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Title</span>
          </label>
          <input type="text" name="title" placeholder="Task Title" className="input input-bordered outline outline-1 text-white focus:shadow-xl focus:shadow-[#0ecb34]" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-white">Description</span>
          </label>
          <input type="text" name="desc" placeholder="Task Description" className="input input-bordered focus:shadow-xl text-white focus:shadow-[#0ecb34] outline outline-1" required />
         
        </div>
        <div className="form-control mt-9 ">
          <button className="btn hover:shadow-xl hover:shadow-[#0ecb34] text-white text-xl ">+Add</button>
        </div>
      </form>


            </div>
        </div>
    );
};

export default Header;