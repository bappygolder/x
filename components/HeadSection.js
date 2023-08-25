import Image from "next/image";
import logo from "../public/logo/logo.png";

export default function HeadSection() {
  return (
    <div
    className="absolute top-[101px] left-[calc(50%_-_24.5px)] flex flex-row items-start justify-start gap-[10px] cursor-pointer"
    // onClick={onFrameContainer6Click}
  >
    <div className="relative rounded-[50%] bg-white w-[50px] h-[50px] z-[0]" />
    <Image
      className="absolute my-0 mx-[!important] top-[16px] left-[10.2px] object-cover z-[1]"
      alt="test"
      src={logo}
      width={50} 
      height={50}
    />
  </div>
  )
}
