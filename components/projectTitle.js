import Link from 'next/link';

export default function ProjectTitle({ data }) {
  return (
    <div className="container mx-auto w-[70%]">
      <div className="text-6xl font-dosis font-bold pt-5">Projects</div>
      <div className="h-4 bg-[#CC6666] rounded-md content-center m-auto mt-5 mb-10"></div>

      {data &&
        data.map((value, index) => {
          return (
            <Link key={index} href={value?.projectUrl || ''} target="_blank">
              <a target="_blank">
                <div className="border-y-2 p-5">
                  <div className="text text-2xl">{value.title}</div>
                  <div className="text text-lg break-all">
                    {value.description}
                  </div>
                </div>
              </a>
            </Link>
          );
        })}
    </div>
  );
}
