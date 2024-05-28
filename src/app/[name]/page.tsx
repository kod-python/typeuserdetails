// "use client";
import React from "react";
import { data } from "@/components/Display/Display";

// import { useParams } from "next/navigation";

const DisplayPage = ({ params }: { params: { name: string } }) => {
  // const { name } = useParams();
  const user = data.find((user) => user.name === params.name);

  const Newuser = data.filter((user) => user.age < 30);

  console.log(Newuser);

  console.log(user);

  return (
    <div>
       {user && user.age <= 20 && <p>{user.age}</p>}

      {/* {user ? (
        <div>
          <p>{user.name}</p>
          <p>{user.age}</p>
          <p>{user.password}</p>
        </div>
      ) : (
        <p>{}</p>
      )} */}
    </div>
  );
};

export default DisplayPage;
