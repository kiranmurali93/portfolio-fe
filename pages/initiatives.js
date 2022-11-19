import Navbar from '../components/navbar';
import InitiativesTitle from '../components/initiativeTitle';
import { useEffect, useState } from 'react';
import { getInitiatives } from './api/hello';
import Head from 'next/head';

export default function Initiatives() {
  const [data, setData] = useState();
  const initiatives = async () => {
    const res = await getInitiatives();
    setData(res);
  };

  useEffect(() => {
    initiatives();
  }, []);
  return (
    <div className="bg-[#f9f4ed] text-[#444444] h-[100%] min-h-screen w-[100vw] pb-16">
      <Head>
        <title>Kiran PK | Initiatives</title>
      </Head>
      <div className="container mx-auto h-[100%] pt-10">
        <InitiativesTitle data={data} />
        <Navbar />
      </div>
    </div>
  );
}
