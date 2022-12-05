import React, { useEffect, useState } from 'react';

import axios from 'axios';
import {
  ComposedChart,
  Line,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Scatter,
  ResponsiveContainer,
} from 'recharts';

const Composed = ({ region }) => {
  const [userData, setUserData] = useState([]);
  useEffect(() => {
    axios
      .get(`https://server-side-zeta.vercel.app/region/${region}`)
      .then((data) => {
        const allData = data.data;
        const countryData = allData.map((country) => {
          const eachCountry = {
            name: country?.region ? country.region : 'Not specified',
            uv: country.likelihood * 1000,
            pv: country.intensity * 50,
            amt: country.relevance * 1000,
            cnt: country?.start_year ? country.start_year : '2022',
          };
          return eachCountry;
        });
        setUserData(countryData);
      });
  }, [region]);
  return (
    <div>
      <div
        style={{ width: '100%', height: 500 }}
        className='bg-black rounded-lg'
      >
        <ResponsiveContainer>
          <ComposedChart
            width={500}
            height={400}
            data={userData}
            margin={{
              top: 20,
              right: 20,
              bottom: 20,
              left: 20,
            }}
          >
            <CartesianGrid stroke='#f5f5f5' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Area
              type='monotone'
              dataKey='amt'
              fill='#8884d8'
              stroke='#8884d8'
            />
            <Bar dataKey='pv' barSize={20} fill='#413ea0' />
            <Line type='monotone' dataKey='uv' stroke='#ff7300' />
            <Scatter dataKey='cnt' fill='red' />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Composed;
