import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="flex items-center cursor-pointer">
      <Image src="/assets/icons/logo.png" alt="Logo" width={50} height={50} />
      <p className="text-subheading">BITE.</p>
    </Link>
  );
};

export default Logo;
