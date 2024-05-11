import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <div className=" items-center hidden lg:flex">
        <Image src="/logo.svg" alt="Logo" height={"28"} width={"28"} />
        <p className="font-semibold text-white ml-2.5 text-2xl">
            Finance
        </p>
      </div>
    </Link>
  );
};

export default HeaderLogo;
