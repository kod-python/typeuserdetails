
import React from 'react';
import Link from 'next/link';
import { data } from '../Display/Display';
import gamer from "../../../public/gamer.png"
import woman from "../../../public/woman.png"
import Image from 'next/image';



const DataPage = () => {

  return (
    <div>
      <h1 className='text-center text-[2rem] text-gray-600 font-bold'>User Page</h1>
      <div className='flex space-x-10 items-center justify-center mt-[300px]'>


<div className="flex mt-[-200px] justify-center ">

<Image src={gamer} alt='' width={100}></Image>
        <Image src={woman} alt='' width={100}></Image>

        <Image src={gamer} alt='' width={100}></Image>

</div>

        
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
