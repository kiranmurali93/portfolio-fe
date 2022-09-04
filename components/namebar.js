import { useEffect, useState } from 'react';

export default function NameBar() {
  const [greetingMessage, setGreetingMessage] = useState();

  const getGreeting = () => {
    const time = new Date().getHours();
    if (time < 13 && time > 5) setGreetingMessage('Good Morning');
    if (time >= 13 && time < 17) setGreetingMessage('Good Afternoon');
    if (time >= 17 && time <= 24) setGreetingMessage('Good Evening');
    if (time >= 0 && time <= 5) setGreetingMessage('Hey folks');
  };

  useEffect(() => {
    getGreeting();
  }, []);

  return (
    <div className="relative container mx-auto pt-4 w-[70%]">
      <div className="h-4 bg-[#CC6666] rounded-md content-center m-auto"></div>
      <div className="text-6xl flex justify-center font-dosis font-bold tracking-widest pt-5">
        KIRAN PK
      </div>
      <div className="pt-5 pb-3 text-2xl">{greetingMessage},</div>
      <div className="text-lg">
        I&apos;m a full-stack developer at OpenVitae, a very early-stage
        startup, and we are building{' '}
        <a href="https://www.superhire.net/" className="font-medium">
          SuperHire
        </a>
        . Apart from that, I&apos;m a mentor, content creator, and freelancer
        and help startups brainstorm different ideas.
      </div>
      <div className="h-4 bg-[#CC6666] rounded-md content-center m-auto mt-5"></div>
    </div>
  );
}
