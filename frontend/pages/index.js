import Eventpoint from '@/components/Eventpoint';
import Searchbar from '@/components/Searchbar';

export default function Home() {
  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Searchbar />
      </div>
      {/* <div>
        <Eventpoint />
        <Eventpoint />
      </div> */}
    </div>
  );
}
