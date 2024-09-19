import Image from "next/image";

function Footer() {
  return (
    <footer className="flex justify-center rounded-lg items-center w-full py-12 px-[7.8%] bg-[#144639]">
      <div className="flex flex-col justify-between items-center lg:flex-row w-full gap-12">
        <div className="flex gap-6">
          <Image src="/logo.svg" alt="logo" width={36} height={48} />
          <p className="text-sm text-primaryColor font-bold">
            WEST <br /> DEVELOPMENT
          </p>
        </div>

        <div className="flex flex-col justify-center items-center gap-6">
          <div className="flex gap-6">
            <Image src="/linkedin.svg" alt="logo" width={24} height={24} />

            <Image src="/facebook.svg" alt="logo" width={24} height={24} />
            <Image src="/twitter.svg" alt="logo" width={24} height={24} />
          </div>

          <div className="flex gap-8 text-lg text-white justify-center items-center">
            <p className="text-sm">
              © 2024 West Development LLC. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
