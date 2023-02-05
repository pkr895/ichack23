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
            <div
              style={{
                width: '4px',
                height: '100%',
                margin: 'auto',
                borderRadius: '2rem',
                backgroundColor: 'black',
              }}
            ></div>
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
