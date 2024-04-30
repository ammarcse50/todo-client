
import { FaPen } from 'react-icons/fa';
import { MdDeleteForever } from 'react-icons/md';

const Todo = ({data}) => {

    const {title,desc}=data

    return (
        <div className='bg-slate-500 w-full h-26 rounded-lg p-3 m-3 flex items-center justify-between'>
         
         <div>   
            
            <h2 className='text-xl font-bold text-white' >{title}</h2>
            <p className='font-semibold text-white'>{desc}</p>

          </div>

          <div className='flex items-center gap-3'>
          <FaPen  className='text-2xl text-[#0ecb34]'/>
          <MdDeleteForever   className='text-4xl text-[#ff0707]'/>
          
              

          </div>
         

        </div>
    );
};

export default Todo;