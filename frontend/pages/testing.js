import dynamic from 'next/dynamic';

const SimpleMap = dynamic(() => import('@/components/SimpleMap'), {
  ssr: false,
});

export default function Home() {
  return (
    <div>
      <SimpleMap />
    </div>
  );
}
