import {
  BsTwitter,
  BsLinkedin,
  BsMedium,
  BsGithub,
  BsYoutube,
  BsInstagram,
} from 'react-icons/bs';
import { CgMail } from 'react-icons/cg';

export default function Social() {
  return (
    <div className="py-5 w-[70%] mx-auto">
      <div className="text-xl mb-3">Connect with me:</div>
      <div className="justify-evenly grid gap-4 grid-cols-4 grid-rows-3 md:flex md:justify-evenly">
        <a
          href="https://twitter.com/kiran__pk"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter className="mr-5" size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/kiran-p-k/"
          target="_blank"
          rel="noreferrer"
        >
          <BsLinkedin className="mr-5" size={30} />
        </a>

        <a href="https://medium.com/@kiranPK" target="_blank" rel="noreferrer">
          <BsMedium className="mr-5" size={30} />
        </a>

        <a
          href="mailto:kiranmurali93@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <CgMail className="mr-5" size={30} />
        </a>

        <a
          href="https://github.com/kiranmurali93"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub className="mr-5" size={30} />
        </a>

        <a
          href="https://www.youtube.com/channel/UC5rb-lnd-4rtJqRIAWurURA"
          target="_blank"
          rel="noreferrer"
        >
          <BsYoutube className="mr-5" size={30} />
        </a>

        <a
          href="https://www.instagram.com/kiran__nambiar/"
          target="_blank"
          rel="noreferrer"
        >
          <BsInstagram className="mr-5" size={30} />
        </a>
      </div>
    </div>
  );
}
