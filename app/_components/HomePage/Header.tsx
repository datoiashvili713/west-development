import Image from "next/image";

function Header() {
  return (
    <header className="flex justify-center items-center w-full py-6 px-[5%] bg-slate-600">
      <div className="flex flex-col justify-between items-center lg:flex-row w-full gap-2">
        <div className="flex gap-4">
          <Image src="/logo.svg" alt="logo" width={36} height={48} />
          <p className="text-sm text-primaryColor font-bold">
            ვესთ <br /> დეველოპმენტი
          </p>
        </div>
        <div className="">
          <ul className="flex flex-row gap-6 text-lg text-white">
            <li>მთავარი</li>
            <li>პროექტი</li>
            <li>ჩვენს შესახებ</li>
            <li>ბლოგი</li>
            <li>გალერეა</li>
          </ul>
        </div>
        <div className="flex gap-8 text-lg text-white justify-center items-center">
          <p>კონტაქტი</p>

          <div className="bg-[rgba(240,240,240,0.3)] size-[48px] rounded-lg flex justify-center items-center">
            <Image
              src="/us.svg"
              alt="usa"
              width={24}
              height={24}
              className="opacity-100"
            />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
