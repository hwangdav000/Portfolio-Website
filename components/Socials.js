import Link from 'next/link';
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleLine,
  RiBehanceLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={''}
        className="hover:text-accent transition-all duration-300 text-black"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={''}
        className="hover:text-accent transition-all duration-300 text-black"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href={''}
        className="hover:text-accent transition-all duration-300 text-black"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={''}
        className="hover:text-accent transition-all duration-300 text-black"
      >
        <RiDribbbleLine />
      </Link>
      <Link
        href={''}
        className="hover:text-accent transition-all duration-300 text-black"
      >
        <RiBehanceLine />
      </Link>
      <Link
        href={''}
        className="hover:text-accent transition-all duration-300 text-black"
      >
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
