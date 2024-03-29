import Image from 'next/image';

// next link
import Link from 'next/link';

// components
import Socials from '../components/Socials';

const Header = () => {
  return (
    <header className="absolute w-full flex items-center px-16 xl:px-0 xl:h-[90px] z-50">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-6 py-8">
          {/* Logo */}
          <Link href="/">
            <Image
              src={'/Logo-bg.png'}
              width={100}
              height={24}
              alt=""
              priority={true}
            />
          </Link>
          {/* Social */}
          <Socials />
        </div>
      </div>
    </header>
  );
};

export default Header;
