import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Diagram = ({ country }) => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    axios
      .get(`https://server-side-zeta.vercel.app/country/${country}`)
      .then((data) => {
        const allData = data.data;
        const countryData = allData.map((country) => {
          const eachCountry = {
            name: country?.region ? country.region : 'Not specified',
            likelihood: country.likelihood,
            pv: country.intensity * 100,
            amt: country.relevance * 1000,
            cnt: country.start_year ? country.start_year : '2022',
          };
          return eachCountry;
        });
        setUserData(countryData);
      });
  }, [country]);
  return (
    <div>
      <div
        style={{ width: '100%', height: 300 }}
        className='bg-black rounded-lg'
      >
        <ResponsiveContainer>
          <BarChart
            data={userData}
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='name' />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey='pv' stackId='a' fill='#8884d8' />
            <Bar dataKey='amt' stackId='a' fill='#82ca9d' />
            <Bar dataKey='uv' fill='#ffc658' />
            <Bar dataKey='cnt' fill='#ffc658' />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Diagram;
