import { navLinks } from "@/app/constant";
import Image from "next/image";
import Link from "next/link";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Logo from "./Logo";

const NavbarMd = () => {
  return (
    <div className="hidden md:flex shadow-xl border-b border-gray-800 px-4 py-2 justify-between items-center">
      <Logo />
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
      <div className="flex items-center gap-4 me-2">
        {/* Cart Sheet */}
        <Sheet>
          <SheetTrigger asChild>
            <Image
              src="/assets/icons/cart.svg"
              alt="cart"
              width={45}
              height={45}
              className="cursor-pointer"
            />
          </SheetTrigger>
          <SheetContent className="bg-background border-none w-[500px] text-foreground">
            <SheetHeader className="border-b border-gray-800">
              <SheetTitle className="p-6">
                <h1 className="text-subheading">Your Cart</h1>
              </SheetTitle>
            </SheetHeader>

            <div className="flex flex-col  flex-1 items-center justify-center gap-4">
              <Image
                src="/assets/icons/cart-fill.svg"
                alt="cart"
                width={50}
                height={50}
              />
              <p>Your cart is empty</p>
              <Button className="button-primary transition-all">
                Start Shopping
              </Button>
            </div>
          </SheetContent>
        </Sheet>
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
