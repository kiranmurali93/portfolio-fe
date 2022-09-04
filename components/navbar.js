import Link from 'next/link';

export default function Navbar() {
  return (
    <div>
      <nav className="flex items-center flex-wrap justify-evenly py-5 w-[70%] mx-auto fixed bottom-0 left-0 right-0 bg-[#dfddda] font-dosis rounded-t-lg">
        <div>
          <Link href="/">About Me</Link>
        </div>
        <div>
          <Link href="/projects">Projects</Link>
        </div>
        <div>
          <Link href="/initiatives">Initiatives</Link>
        </div>
        {/* <div>
          <Link href="/contact">Contact Me</Link>
        </div> */}
      </nav>
    </div>
  );
}
