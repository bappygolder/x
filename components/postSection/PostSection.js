"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./styles.module.css";
import trash from "../../public/icons/trash-can.png";
import plus from "../../public/icons/plus.png";

function PostSection() {
  const [contentType, setContentType] = useState(false);
  const [possibleCTA, setPossibleCTA] = useState(false);

  return (
    <>
      <div className="relative">you should post about...</div>
      <div className={styles.container}>
        <div className={styles.customizePost}>
          <div className={styles.title}>Category</div>
          <input
            className={styles.input}
            type="text"
            defaultValue="Philosophy"
          />
          {!contentType && (
            <div className={styles.contentType}>
              <div className={styles.title}>Content Type</div>
              <div className={styles.contentTypeItems}>
                <input
                  className={`${styles.input} !w-[244px]`}
                  type="text"
                  defaultValue="Small Posts (Tweets)"
                />
                <span
                  className={styles.trashcan}
                  onClick={() => {
                    setContentType(true);
                  }}
                >
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
          )}
          {!possibleCTA && (
            <div className={styles.contentType}>
              <div className={styles.title}>Possible CTA</div>
              <div className={styles.contentTypeItems}>
                <input
                  className={`${styles.input} !w-[244px]`}
                  type="text"
                  defaultValue="Small Posts (Tweets)"
                />
                <span
                  className={styles.trashcan}
                  onClick={() => {
                    setPossibleCTA(true);
                  }}
                >
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
          )}
        </div>
      </div>

      <div className={styles.addContent}>
        {contentType && (
          <div
            className={styles.add}
            onClick={() => {
              setContentType(false);
            }}
          >
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
        )}
        {possibleCTA && (
          <div
            className={styles.add}
            onClick={() => {
              setPossibleCTA(false);
            }}
          >
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
        )}
      </div>

      <div className={styles.generatePost}>
        <button className={styles.generatePostButton}>
          Generate Next Idea
        </button>
      </div>
    </>
  );
}

export default PostSection;
