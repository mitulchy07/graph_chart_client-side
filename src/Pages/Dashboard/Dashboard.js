import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Spinner } from 'react-bootstrap';
import ItemDetails from './ItemDetails/ItemDetails';

const Dashboard = () => {
  const { data: allData = [], isLoading } = useQuery({
    queryKey: ['allData'],
    queryFn: async () => {
      const res = await fetch('https://server-side-zeta.vercel.app/data');
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className='grid grid-cols-3 gap-5 mx-5'>
      <h1>Total Data: {allData.length}</h1>
      {isLoading ? <Spinner animation='grow' /> : ''}
      {allData.map((data) => (
        <ItemDetails key={data._id} data={data}></ItemDetails>
      ))}
    </div>
  );
};

export default Dashboard;
