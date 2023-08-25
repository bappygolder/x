import Image from "next/image";

function PostSection() {
  return (
    <section className="absolute top-[calc(50%_-_176px)] left-[16px] flex flex-col items-center justify-start gap-[16px] text-left text-[14px] text-black font-poppins">
    <div className="relative">
      Hey there, your next post suggestion is...
    </div>
    <div className="flex flex-col items-start justify-start text-xs text-gray">
      <div className="rounded-lg bg-white shadow-[0px_4px_24px_rgba(29,_35,_46,_0.1)] w-[345px] flex flex-col p-6 box-border items-start justify-center">
        <div className="self-stretch flex flex-col items-start justify-start">
          <div className="self-stretch bg-gainsboro flex flex-col py-2.5 px-2 items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-row py-0 px-2 items-center justify-start">
              <div className="relative font-medium">Category</div>
            </div>
            <input
              className="[border:none] font-poppins text-mini bg-whitesmoke self-stretch rounded flex flex-row py-3 px-4 items-center justify-center"
              type="text"
              placeholder="Philosophy"
            />
          </div>
          <div className="self-stretch bg-gainsboro h-[89px] flex flex-col py-2.5 px-2 box-border items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-row py-0 px-2 items-center justify-between">
              <div className="relative font-medium">Content Type</div>
              <Image
                className="relative"
                alt=""
                src="/vector.svg"
                width={17}
                height={14}
              />
            </div>
            <input
              className="[border:none] font-poppins text-mini bg-whitesmoke self-stretch rounded flex flex-row py-3 px-4 items-center justify-center"
              type="text"
              placeholder="Small Posts (Tweets)"
            />
          </div>
          <div className="self-stretch bg-gainsboro flex flex-col py-2.5 px-2 items-start justify-start gap-[4px]">
            <div className="self-stretch flex flex-row py-0 px-2 items-center justify-start">
              <div className="relative font-medium">Possible CTA</div>
            </div>
            <input
              className="[border:none] font-poppins text-mini bg-whitesmoke self-stretch rounded flex flex-row py-3 px-4 items-center justify-center"
              type="text"
              placeholder="Join Our Newsletter"
            />
          </div>
        </div>
      </div>
    </div>
    <div className="top-[724px] flex flex-row px-0 box-border items-center justify-center">
        <div className="relative flex items-center justify-center font-semibold  rounded-lg bg-[#3579F6] w-[345px] h-[63px] text-white">Next Post</div>
      </div>
  </section>
  )
}

export default PostSection