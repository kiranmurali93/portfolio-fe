export default function InitiativesTitle({ data }) {
  return (
    <div className="container mx-auto w-[70%]">
      <div className="text-6xl font-dosis font-bold pt-5">
        Initiatives & Experiences
      </div>
      <div className="h-4 bg-[#CC6666] rounded-md content-center m-auto mt-5"></div>

      {data &&
        data.map((value, index) => {
          return (
            <div className="mt-6" key={index}>
              <div className="text text-2xl">{value.title}</div>
              <div className="text text-sm">{value.company}</div>
              <div className="text text-lg">{value.content}</div>
            </div>
          );
        })}
    </div>
  );
}
