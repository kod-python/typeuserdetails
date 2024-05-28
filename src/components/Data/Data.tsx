
import React from 'react';
import Link from 'next/link';
import { data } from '../Display/Display';

const DataPage = () => {

  return (
    <div>
      <h1 className='text-center text-[2rem] text-gray-600 font-bold'>User Page</h1>
      <div className='flex space-x-10 items-center justify-center mt-[300px]'>
        {data.map(item => (
          <div key={item.name}>
        
           <p className='text-center text-[2rem]'>{item.name}</p>
            <Link href={`/${item.name}`}>
            <button className='py-1 px-4 bg-blue-500'>submit</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataPage;
