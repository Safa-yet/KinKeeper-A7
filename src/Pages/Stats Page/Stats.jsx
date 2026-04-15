import React, { useContext } from 'react';
import { Pie, PieChart, Tooltip, Cell, Legend } from 'recharts';
import { CallContext } from '../../Context Data/CallingContext';
import EmptyImg from '../../assets/where are you empty.gif'

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
<div className='bg-base-100 pt-6'>
    <div className='container-main mx-auto '>
        
      <h1 className='lg:text-5xl text-2xl font-bold mb-8 text-sec'>Friendship Analytics</h1>

<div className=' bg-white rounded-lg shadow-2xl'>
 {
        timeline.length === 0 ?  <><div className=" flex flex-col items-center justify-center ">
                    <img src={EmptyImg} alt=""  className='rounded-2xl'/></div></>   :<div className=' p-5 bg-white rounded-lg'>
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
</div>

    
    
  );
};

export default Stats;