import React from "react";
import Logo from "./Logo";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-[70px] p-[30px] bg-[#1a1a1a] ">
      <div className="flex flex-col md:flex-row items-start md:justify-between lg:justify-center lg:gap-[100px]">
        <div className="mb-7">
          <Logo />
          <p className="text-muted-foreground ms-1 mt-3 md:w-[200px] lg:w-[300px]">
            Premium fast food delivery service with quality and speed
          </p>
        </div>
        <div className="mb-7">
          <h2 className="font-bold text-[18px] mb-3">Quick Links</h2>
          <ul className="flex flex-col gap-2 ms-1">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Menu
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Track
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Rewards
            </Link>
          </ul>
        </div>
        <div className="mb-7">
          <h2 className="font-bold text-[18px] mb-3">Help</h2>
          <ul className="flex flex-col gap-2 ms-1">
            <Link href="/" className="text-muted-foreground hover:text-primary">
              About Us
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              Contact
            </Link>
            <Link href="/" className="text-muted-foreground hover:text-primary">
              FAQ
            </Link>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#333]">
        <p className="text-muted-foreground text-center mt-5">
          © 2026 Smart Foods. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
