// "use client";
import React from "react";
import { data } from "@/components/Display/Display";
import Link from "next/link";

import Image from "next/image";


// import { useParams } from "next/navigation";

const DisplayPage = ({ params }: { params: { name: string } }) => {
  // const { name } = useParams();
  const user = data.find((user) => user.name === params.name);

  const Newuser = data.filter((user) => user.age < 30);

  console.log(Newuser);

  console.log(user);

  return (
    <div>
      <h1 className='text-center text-[2rem] text-gray-600 font-bold'>Data Display Page</h1>
<Link href="/" className="py-1 px-4 rounded bg-blue-500">back</Link>

       {user && user.age <= 20 && <p>Qualified Age:{user.age}</p>}

       {user ? (
        <div>
        <img src={user.imageUrl} alt="logo" width={500} height={100} />
          <p>Name: {user.name}</p>
          <p>Age: {user.age}</p>
          <p>Password: {user.password}</p>
        </div>
      ) : (
        <p>{}</p>
      )} 
    </div>
  );
};

export default DisplayPage;
