import Eventpoint from '@/components/Eventpoint';
import Searchbar from '@/components/Searchbar';
import { useState } from 'react';

export default function Home() {
  const [eventSelected, setEventSelected] = useState(false);

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '8rem',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div>
          <Searchbar
            eventSelected={eventSelected}
            setEventSelected={setEventSelected}
          />
        </div>
      </div>
      {eventSelected ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            height: '100%',
          }}
        >
          <div style={{ width: '40%', height: '100%' }}>
            <Eventpoint />
          </div>
          <div style={{ width: '20%', height: '100%' }}>
            <svg
              width='128'
              height='832'
              viewBox='0 0 128 832'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M79.5 834L112.098 763.864C132.438 720.103 125.309 668.491 93.8675 631.882L26.6581 553.627C-7.42833 513.939 -4.75041 454.58 32.7712 418.122L102.552 350.32C133.906 319.854 133.636 269.427 101.957 239.299L22.5537 163.784C-6.87163 135.8 -3.71844 87.9861 29.1271 64.1083L118 -0.5'
                stroke='black'
                stroke-width='3'
              />
            </svg>
          </div>
          <div style={{ width: '40%', height: '100%', paddingTop: '10rem' }}>
            <Eventpoint />
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
