import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip, Cell, Legend } from 'recharts';
import { CallContext } from '../../Context Data/CallingContext';
import EmptyImg from '../../assets/empty-1.jpg'

const Stats = () => {

    const {call,text,videoCall,timeline} =useContext(CallContext)
    console.log(timeline.length);
  const data = [
    { name: 'Call', value: call.length },
    { name: 'Text', value: text.length  },
    { name: 'Video Call', value:videoCall.length },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

  return (
<div className='bg-base-200 py-6'>
    <div className='container-main mx-auto '>
        
      <h1 className='text-5xl font-bold mb-8'>Friendship Analytics</h1>

      {
        timeline.length === 0 ?  <><div className=" flex flex-col items-center justify-center ">
                    <img src={EmptyImg} alt=""  className='rounded-2xl'/>
                    <h1 className="lg:text-2xl text-text-sec">No Activity Yet</h1></div></>   :<div className=' p-5 bg-white rounded-lg'>
        <h3 className='text-xl font-medium'>By Interaction Type</h3>
 <PieChart className='mx-auto'
        style={{
          width: '100%',
          maxWidth: '500px',
          maxHeight: '90vh',
          aspectRatio: 1,
        }}
        responsive
      >
        <Pie data={data} dataKey="value" labelLine={true}>
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index]} />
          ))}
        </Pie>
      <Legend />

        <Tooltip />
      </PieChart>

      </div>
      }
      


     
    </div>
</div>

    
    
  );
};

export default Stats;