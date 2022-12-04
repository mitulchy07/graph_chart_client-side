import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Accordion } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';
import Header from '../Shared/Header/Header';

const Main = () => {
  // const { data: country = [] } = useQuery({
  //   queryKey: ['country'],
  //   queryFn: async () => {
  //     const res = await fetch('https://server-side-zeta.vercel.app/data');
  //     const data = await res.json();
  //     return data;
  //   },
  // });
  const { data: country = [] } = useQuery({
    queryKey: ['country'],
    queryFn: async () => {
      const res = await fetch('https://server-side-zeta.vercel.app/country');
      const data = await res.json();
      return data;
    },
  });
  return (
    <div>
      <Header></Header>
      <div>
        <div className='drawer drawer-mobile'>
          <input
            id='dashboard-drawer'
            type='checkbox'
            className='drawer-toggle'
          />
          <div className='drawer-content'>
            <Outlet></Outlet>
          </div>
          <div className='drawer-side bg-gray-300 text-white '>
            <label
              htmlFor='dashboard-drawer'
              className='drawer-overlay'
            ></label>
            <ul className='menu p-4 w-80 bg-black-100 text-base-content'>
              {/* <!-- Sidebar content here --> */}

              <li>
                <Accordion>
                  <Accordion.Item eventKey='0'>
                    <Accordion.Header>Country</Accordion.Header>
                    {country.map((country) => (
                      <Accordion.Body key={country._id} country={country}>
                        <Link to={`/country/${country.country}`}>
                          {country.country}
                        </Link>
                      </Accordion.Body>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <Accordion.Item eventKey='1'>
                    <Accordion.Header>City</Accordion.Header>
                    {country.map((country) => (
                      <Link to={`/region/${country.region}`}>
                        <Accordion.Body key={country._id} country={country}>
                          {country.region}
                        </Accordion.Body>
                      </Link>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <Accordion.Item eventKey='2'>
                    <Accordion.Header>Topics</Accordion.Header>
                    {country.map((country) => (
                      <Link to={`/topic/${country.topic}`}>
                        <Accordion.Body key={country._id} country={country}>
                          {country.topic}
                        </Accordion.Body>
                      </Link>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <Accordion.Item eventKey='3'>
                    <Accordion.Header>Sector</Accordion.Header>
                    {country.map((country) => (
                      <Link to={`/sector/${country.sector}`}>
                        <Accordion.Body key={country._id} country={country}>
                          {country.sector}
                        </Accordion.Body>
                      </Link>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <Accordion.Item eventKey='4'>
                    <Accordion.Header>PEST</Accordion.Header>
                    {country.map((country) => (
                      <Link to={`/pestle/${country.pestle}`}>
                        <Accordion.Body key={country._id} country={country}>
                          {country.pestle}
                        </Accordion.Body>
                      </Link>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <Accordion.Item eventKey='5'>
                    <Accordion.Header>Source</Accordion.Header>
                    {country.map((country) => (
                      <Link to={`/source/${country.source}`}>
                        <Accordion.Body key={country._id} country={country}>
                          {country.source}
                        </Accordion.Body>
                      </Link>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <Accordion.Item eventKey='6'>
                    <Accordion.Header>Insight</Accordion.Header>
                    {country.map((country) => (
                      <Link to={`/insight/${country.insight}`}>
                        <Accordion.Body key={country._id} country={country}>
                          {country.insight}
                        </Accordion.Body>
                      </Link>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </li>
              <li>
                <Accordion>
                  <Accordion.Item eventKey='7'>
                    <Accordion.Header>Date</Accordion.Header>
                    {country.map((country) => (
                      <Link to={`/date/${country.added}`}>
                        <Accordion.Body key={country._id} country={country}>
                          {country.added}
                        </Accordion.Body>
                      </Link>
                    ))}
                  </Accordion.Item>
                </Accordion>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
