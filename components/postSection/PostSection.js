import Image from "next/image";
import styles from "./styles.module.css";
import trash from "../../public/icons/trash-can.png";
import plus from "../../public/icons/plus.png";

function PostSection() {
  return (
    <>
    
      <div className="relative">you should post about...</div>
      <div className="flex flex-col items-start justify-start text-xs text-gray shadow-md">
        <div className="rounded-lg bg-white shadow-[0px_4px_24px_rgba(29,_35,_46,_0.1)] w-[345px] h-[250px] flex flex-col p-6 box-border items-start justify-center">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className={styles.title}>Category</div>
            <input className={styles.input} type="text" defaultValue="Philosophy" />
            <div className="self-stretch flex flex-col py-1 box-border items-start justify-start">
              <div className={styles.title}>Content Type</div>
              <div className={styles.contentType}>
                <input
                  className={`${styles.input} !w-[244px]`}
                  type="text"
                  defaultValue="Small Posts (Tweets)"
                />
                <span className={styles.trashcan}>
                  <Image
                    className={"relative"}
                    alt=""
                    src={trash}
                    width={17}
                    height={14}
                  />
                </span>
              </div>
            </div>
            <div className="self-stretch flex flex-col py-1 box-border items-start justify-start">
              <div className={styles.title}>Possible CTA</div>
              <div className={styles.contentType}>
                <input
                  className={`${styles.input} !w-[244px]`}
                  type="text"
                  defaultValue="Small Posts (Tweets)"
                />
                <span className={styles.trashcan}>
                  <Image
                    className={"relative"}
                    alt=""
                    src={trash}
                    width={17}
                    height={14}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className={styles.addContent}>
        <div className={styles.add}>
        <span className={styles.trashcan}>
          <Image
            className={"relative"}
            alt=""
            src={plus}
            width={17}
            height={14}
          />
        </span>
        <h1 className={styles.title}>Add Content Type</h1>
        </div>
        
        <div className={styles.add}>
        <span className={styles.trashcan}>
          <Image
            className={"relative"}
            alt=""
            src={plus}
            width={17}
            height={14}
          />
        </span>
        <h1 className={styles.title}>Possible CTA</h1>
        </div>
      </div> */}

      <div className="absolute top-[406px] flex flex-row px-0 box-border items-center justify-center">
        <div className="flex items-center justify-center font-semibold  rounded-lg bg-[#3579F6] w-[345px] h-[63px] text-white">
          Generate Next Idea
        </div>
      </div>
    </>
  );
}

export default PostSection;
