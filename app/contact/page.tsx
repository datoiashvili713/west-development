import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact",
};

function Page() {
  return (
    <div className="flex flex-col">
      <div className="w-full h-[224px] relative">
        <Image
          src={"/galleryhero.jpeg"}
          alt="contact"
          fill
          className="object-cover"
        />
      </div>

      <div className="bg-[#D9D9D9] flex justify-center items-center flex-col py-3 gap-4">
        <div className="flex flex-col  gap-6">
          <div className="flex flex-col justify-center items-center gap-0.5">
            <h1 className="text-lg font-medium">კონტაქტი</h1>
            <div className="bg-[#2d574b] w-24 h-1" />
          </div>
          <div className="flex justify-center text-center text-sm">
            <p>დაგვიკავშირდით და ჩვენ დაგეხმარებით საუკეთესო მიწის შერჩევაში</p>
          </div>

          <div className="flex flex-col items-start px-5 gap-6">
            <div className="flex gap-6">
              <div className="w-full">
                <p>სახელი</p>
              </div>
              <div className="w-full">
                <p>გვარი</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
