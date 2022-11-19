import Navbar from '../components/navbar';
import ProfileImage from '../components/profileImage';
import NameBar from '../components/namebar';
import Social from '../components/social';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-[#f9f4ed] text-[#444444] h-[100%] min-h-screen w-[100vw] pb-16">
      <Head>
        <title>Kiran PK</title>
      </Head>
      <div className="container mx-auto h-[100%] pt-10">
        <ProfileImage />
        <NameBar />
        <Social />
        <Navbar />
      </div>
    </div>
  );
}
