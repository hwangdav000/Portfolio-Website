import Link from 'next/link';
import {
  RiLinkedinLine,
  RiTwitterLine,
  RiYoutubeLine,
  RiFacebookLine,
  RiPinterestLine,
} from 'react-icons/ri';

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={'https://www.linkedin.com/in/dhwang-cs'}
        className="hover:text-accent transition-all duration-300 text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiLinkedinLine />
      </Link>
      <Link
        href={'https://www.youtube.com/@davidhwang1465'}
        className="hover:text-accent transition-all duration-300 text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiYoutubeLine />
      </Link>
      <Link
        href={'https://twitter.com/hwangdav000'}
        className="hover:text-accent transition-all duration-300 text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiTwitterLine />
      </Link>
      <Link
        href={'https://www.facebook.com/david.hwang.5055'}
        className="hover:text-accent transition-all duration-300 text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiFacebookLine />
      </Link>
      <Link
        href={'https://www.pinterest.com/davidhwang0325/'}
        className="hover:text-accent transition-all duration-300 text-black"
        target="_blank"
        rel="noopener noreferrer"
      >
        <RiPinterestLine />
      </Link>
    </div>
  );
};

export default Socials;
