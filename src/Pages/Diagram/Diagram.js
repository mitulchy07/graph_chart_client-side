import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import axios from 'axios';
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Diagram = ({ country }) => {
  const [userData, setUserData] = useState([]);

  //   const { data: allData = [], refetch } = useQuery({
  //     queryKey: ['allData'],
  //     queryFn: () => {
  //       axios
  //         .get(`https://server-side-zeta.vercel.app/country/${country}`)
  //         .then((data) => {
  //           const allData = data.data;
  //           const countryData = allData.map((country) => {
  //             const eachCountry = {
  //               name: country?.country ? country.country : 'Not specified',
  //               likelihood: country.likelihood,
  //               pv: country.intensity,
  //               amt: country.relevance,
  //             };
  //             return eachCountry;
  //           });
  //           refetch();
  //           console.log(countryData);
  //         });
  //     },
  //   });

  useEffect(() => {
    axios
      .get(`https://server-side-zeta.vercel.app/country/${country}`)
      .then((data) => {
        const allData = data.data;
        const countryData = allData.map((country) => {
          const eachCountry = {
            name: country?.start_year ? country.start_year : 'Not specified',
            likelihood: country.likelihood,
            pv: country.intensity,
            amt: country.relevance,
          };
          return eachCountry;
        });
        setUserData(countryData);
      });
  }, [country]);
  return (
    <div>
      <div>
        <BarChart width={1000} height={700} data={userData}>
          <Bar dataKey='likelihood' fill='#8884d8' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip></Tooltip>
        </BarChart>
      </div>
    </div>
  );
};

export default Diagram;
