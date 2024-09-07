import Image from "next/image";

function Footer() {
  return (
    <footer className="flex justify-center items-center w-full py-6 px-[7.8%] bg-[#144639]">
      <div className="flex flex-col justify-between items-center lg:flex-row w-full gap-2">
        <div className="flex gap-6 w-[360px]">
          <Image src="/twitter.svg" alt="logo" width={24} height={24} />

          <Image src="/linkedin.svg" alt="logo" width={24} height={24} />

          <Image src="/facebook.svg" alt="logo" width={24} height={24} />
        </div>

        <div className="flex gap-6">
          <Image src="/logo.svg" alt="logo" width={36} height={48} />
          <p className="text-sm text-primaryColor font-bold">
            WEST <br /> DEVELOPMENT
          </p>
        </div>

        <div className="flex gap-8 text-lg text-white justify-center items-center">
          <p className="text-sm">
            © 2024 West Development LLC. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
