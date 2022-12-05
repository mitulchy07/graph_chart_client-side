import { useLoaderData } from 'react-router-dom';
import Composed from '../ComposedChart/ComposedChart';
import ItemDetails from '../Dashboard/ItemDetails/ItemDetails';

const City = () => {
  const data = useLoaderData();
  const region = data[1].region;

  return (
    <div>
      <div className='m-5'>
        <Composed data={data} region={region}></Composed>
      </div>
      <div className='grid md:grid-cols-3 gap-5 mx-5'>
        {data.map((data) => (
          <ItemDetails key={data._id} data={data}></ItemDetails>
        ))}
      </div>
    </div>
  );
};

export default City;
