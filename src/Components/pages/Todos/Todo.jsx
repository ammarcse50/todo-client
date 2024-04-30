
import axios from 'axios';
import { FaPen } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const Todo = ({data}) => {

    const {_id,title,desc}=data

     const handleDelete = (_id)=>{


        axios.delete(`http://localhost:5000/todos/${_id}`)
        .then(res=>{

            const user = res.data;

        })
        .catch(err=>console.log(err))

     }

        

    return (
        <div className='bg-gray-800 w-full h-26 rounded-lg p-3 m-3 flex items-center justify-between'>
         
         <div>   
            
            <h2 className='text-xl font-bold text-white' >{title}</h2>
            <p className='font-semibold text-white'>{desc}</p>

          </div>

          <div className='flex items-center gap-3'>
          <a onClick={handleDelete} href=""> <FaPen  className='text-2xl text-[#0ecb34]'/></a>  

       <a href=""> <MdDeleteForever   className='text-4xl text-[#ff0707]'/>
          </a>  
              

          </div>
         

        </div>
    );
};

export default Todo;