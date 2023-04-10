'use client'
import { BiSearch } from 'react-icons/bi'
import Container from '../Container'

const Search = () => {
  return (
    
    <div className='w-1/2  mx-auto'>
      <div className='
            w-1/2
            border-[1px]
            md:w-auto
            rounded-full
            shadow-sm
            hover:shadow-md
            transition
            cursor:pointer
            mt-24 py-2 flex items-center justify-between'>
               
                <div className='hidden sm:block text-sm font-semibold text-gray-600 px-6 text-center'>
                    Any Service
                </div>
        
                <div className='hidden flex-1 sm:block text-sm font-semibold text-gray-600 px-6 border-x-[1px] text-center'>
                    Anywhere
                </div>
                <div className='text-sm font-semibold  text-gray-600 flex flex-row items-center pl-6 gap-3'>
                    <div className='hidden sm:block'>Add Service</div>
                        <div className='p-2 bg-rose-500 rounded-full text-white'>
                            <BiSearch size={18} />
                        </div>
                </div>
           </div>  
    </div>
        
  )
}

export default Search