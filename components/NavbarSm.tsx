import Image from "next/image";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "./ui/button";
import Link from "next/link";
import { navLinks } from "@/app/constant";

const NavbarSm = () => {
  return (
    <div className="block md:hidden shadow-xl border-b border-gray-800 z-50">
      <div className="p-3 flex justify-between">
        <div>
          <Image
            src="/assets/icons/logo.png"
            alt="logo"
            width={50}
            height={50}
          />
        </div>
        <div className="flex items-center gap-4">
          {/* Cart Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Image
                src="/assets/icons/cart.svg"
                alt="cart"
                width={50}
                height={50}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="bg-background border-none w-[300px] sm:w-[430px] text-foreground">
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

          {/* Nav Sheet */}
          <Sheet>
            <SheetTrigger asChild>
              <Image
                src="/assets/icons/burger.svg"
                alt="burger"
                width={40}
                height={40}
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="border-none w-full h-fit text-foreground bg-navLinks pb-4"
            >
              <SheetHeader className="bg-background shadow-xl border-b border-gray-800">
                <SheetTitle className="p-4">
                  <Image
                    src="/assets/icons/logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col  flex-1 gap-4 px-6">
                {navLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="text-body px-1 hover:text-primary transition-all cursor-pointer"
                  >
                    {link.title}
                  </Link>
                ))}
                <Button className="button-primary cursor-pointer">Login</Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default NavbarSm;
