import React from 'react';

const AboutPages = async () => {
  const time = Date.now();
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`, {
    cache: 'no-store',
  });

  const data = await res.json();

  return (
    <div>
      <h1>{time}</h1>
      {data?.map((data: any) => (
        <p key={data.id}>{data.name}</p>
      ))}
    </div>
  );
};

export default AboutPages;
