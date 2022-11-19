import { useEffect, useState } from 'react';
import Navbar from '../components/navbar';
import ProjectTitle from '../components/projectTitle';
import { getProjects } from './api/hello';
import Head from 'next/head';

export default function Projects() {
  const [data, setData] = useState();
  const projects = async () => {
    const projectData = await getProjects();
    setData(projectData);
  };

  useEffect(() => {
    projects();
  }, []);

  return (
    <div className="bg-[#f9f4ed] text-[#444444] h-[100%] min-h-screen w-[100vw] pb-16">
      <Head>
        <title>Kiran PK | Projects</title>
      </Head>
      <div className="container mx-auto h-[100%] pt-10">
        <ProjectTitle data={data} />
        <Navbar />
      </div>
    </div>
  );
}
