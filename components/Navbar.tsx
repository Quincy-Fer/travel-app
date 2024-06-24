import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="flexBetween max-container padding-container z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden lg:flex gap-12 h-full ">
        
      </ul>
    </nav>
  );
};

export default Navbar;
