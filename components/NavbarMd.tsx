'use client';
import { navLinks } from '@/app/_constant';
import Image from 'next/image';
import Link from 'next/link';
import Logo from './Logo';
import CartSheet from './CartSheet';

const NavbarMd = () => {
  return (
    <div className="hidden fixed top-0 left-0 right-0 z-50 bg-background md:flex shadow-xl border-b border-gray-800 px-4 py-2 justify-between items-center">
      <Logo />
      {/* Nav Links */}
      <div>
        <ul className="flex items-center gap-5">
          {navLinks.map((link) => (
            <li key={link.title}>
              <Link
                href={link.href}
                className="text-body hover:text-primary transition-all cursor-pointer"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Cart Sheet */}
      <div className="flex items-center gap-4 me-2">
        <CartSheet />

        <Image
          src="/assets/icons/login.svg"
          alt="login"
          width={25}
          height={25}
          className="cursor-pointer"
        />
      </div>
    </div>
  );
};

export default NavbarMd;
