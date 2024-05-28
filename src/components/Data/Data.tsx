
import React from 'react';
import Link from 'next/link';
import { data } from '../Display/Display';

const DataPage = () => {

  return (
    <div>
      <h1>Data Display Page</h1>
      <div className=''>
        {data.map(item => (
          <div key={item.name}>
        
           <p>{item.name}</p>
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
