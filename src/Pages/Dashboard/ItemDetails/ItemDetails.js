import React from 'react';

const ItemDetails = ({ data }) => {
  return (
    <div>
      <div className='card w-96 h-96 bg-primary text-primary-content'>
        <div className='card-body'>
          <h2 className='card-title'>{data.title.slice(0, 20)}...</h2>
          <h2 className='card-title'>
            Country: {data?.country ? data.country : 'Not Specified'}
          </h2>
          <h2 className='card-title'>
            City: {data?.region ? data.region : 'Not Specified'}
          </h2>
          <h2 className='card-title'>Source: {data.source}</h2>
          <h2 className='card-title'>Topic: {data.topic}</h2>
          <h2 className='card-title'>Sector: {data.sector}</h2>
          <h2 className='card-title'>PEST: {data.pestle}</h2>
          <h2 className='card-title'>Insight: {data.insight.slice(0, 20)}..</h2>
        </div>
      </div>
    </div>
  );
};

export default ItemDetails;
