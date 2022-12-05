import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import ItemDetails from '../Dashboard/ItemDetails/ItemDetails';
import Diagram from '../Diagram/Diagram';

const Country = () => {
  const data = useLoaderData();
  const country = data[0].country ? data[0].country : 'India';
  console.log(country);

  return (
    <div>
      <div className='m-5'>
        <Diagram data={data} country={country}></Diagram>
      </div>
      <div className='grid md:grid-cols-3 gap-5 mx-5'>
        {data.map((data) => (
          <ItemDetails key={data._id} data={data}></ItemDetails>
        ))}
      </div>
    </div>
  );
};

export default Country;
