import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import ItemDetails from '../Dashboard/ItemDetails/ItemDetails';
import Diagram from '../Diagram/Diagram';

const Country = () => {
  const data = useLoaderData();
  const country = data[1].country;

  return (
    <div>
      <div>
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
