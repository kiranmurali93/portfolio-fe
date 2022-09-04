import Image from 'next/image';
import myPic from '../public/kiran_pk.jpg';

export default function ProfileImage() {
  return (
    <div className="relative h-80 w-60 hero container mx-auto flex justify-center">
      <Image
        src={myPic}
        layout="fill"
        alt="profile image"
        objectFit="cover"
        className="rounded-3xl"
      />
    </div>
  );
}
