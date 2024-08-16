"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const AboutPages = () => {
  // const time = Date.now();
  // const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
  //   cache: 'no-store',
  // });

  // const data = await res.json();
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log(`count: ${count}, Effect fired!`);
    return () => {
      console.log(`count: ${count}, Effect cleaned-up!`);
    };
  }, [count]);

  return (
    <div>
      <div>{count}</div>
      <button type={"button"} onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br />
      <Link href={"/atsu"}>next</Link>
    </div>
    // <div>
    //   <h1>{time}</h1>
    //   {data?.map((data: any) => (
    //     <p key={data.id}>{data.name}</p>
    //   ))}
    // </div>
  );
};

export default AboutPages;
