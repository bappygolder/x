'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import styles from './styles.module.css';
import trash from '../../public/icons/trash-can.png';
import trashWhite from '../../public/icons/trash-white.png';
import plus from '../../public/icons/plus.png';
import plusWhite from '../../public/icons/plus-white.png';

function PostSection() {
  const [contentType, setContentType] = useState(false);
  const [possibleCTA, setPossibleCTA] = useState(false);
  const [hoverContentType, setHoverContentType] = useState(false);
  const [hoverPossibleCTA, setHoverPossibleCTA] = useState(false);

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  //   console.log(isHovered);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  //   console.log(isHovered);
  // };

  // window.alert(isHovered)

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
                {hoverContentType ? (
                  // eslint-disable-next-line jsx-a11y/click-events-have-key-events,
                  // jsx-a11y/no-static-element-interactions
                  <button
                    type="button"
                    className={`${styles.trashcan} !bg-[#FF5F5F]`}
                    onClick={() => {
                      setContentType(true);
                      setHoverContentType(false);
                    }}
                    onMouseEnter={() => setHoverContentType(true)}
                    onMouseLeave={() => setHoverContentType(false)}
                  >
                    <Image
                      className="relative"
                      alt=""
                      src={trashWhite}
                      width={17}
                      height={14}
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    className={styles.trashcan}
                    onClick={() => {
                      setContentType(true);
                    }}
                    onMouseEnter={() => setHoverContentType(true)}
                    onMouseLeave={() => setHoverContentType(false)}
                  >
                    <Image
                      className="relative border"
                      alt=""
                      src={trash}
                      width={17}
                      height={14}
                    />
                  </button>
                )}
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
                {hoverPossibleCTA ? (
                  <button
                    type="button"
                    className={`${styles.trashcan} !bg-[#FF5F5F]`}
                    onClick={() => {
                      setPossibleCTA(true);
                      setHoverPossibleCTA(false);
                    }}
                    onMouseEnter={() => setHoverPossibleCTA(true)}
                    onMouseLeave={() => setHoverPossibleCTA(false)}
                  >
                    <Image
                      className="relative"
                      alt=""
                      src={trashWhite}
                      width={17}
                      height={14}
                    />
                  </button>
                ) : (
                  <button
                    type="button"
                    className={styles.trashcan}
                    onClick={() => {
                      setPossibleCTA(true);
                    }}
                    onMouseEnter={() => setHoverPossibleCTA(true)}
                    onMouseLeave={() => setHoverPossibleCTA(false)}
                  >
                    <Image
                      className="relative"
                      alt=""
                      src={trash}
                      width={17}
                      height={14}
                    />
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      <div className={styles.addContent}>
        {contentType && (
          <button
            type="button"
            className={styles.add}
            onClick={() => {
              setContentType(false);
              setHoverContentType(false);
            }}
          >
            {hoverContentType ? (
              <span
                className={`${styles.trashcan} !bg-[#195BD6]`}
                onMouseEnter={() => setHoverContentType(true)}
                onMouseLeave={() => setHoverContentType(false)}
              >
                <Image
                  className="relative"
                  alt=""
                  src={plusWhite}
                  width={17}
                  height={14}
                />
              </span>
            )
              : (
                <span
                  className={styles.trashcan}
                  onMouseEnter={() => setHoverContentType(true)}
                  onMouseLeave={() => setHoverContentType(false)}
                >
                  <Image
                    className="relative"
                    alt=""
                    src={plus}
                    width={17}
                    height={14}
                  />
                </span>
              )}
            <h1 className={styles.title}>Add Content Type</h1>
          </button>
        )}
        {possibleCTA && (
          <button
            type="button"
            className={styles.add}
            onClick={() => {
              setPossibleCTA(false);
              setHoverPossibleCTA(false);
            }}
          >

            {/* Setting the hover effect using state */}
            {hoverPossibleCTA ? (
              <span
                className={`${styles.trashcan} !bg-[#195BD6]`}
                onMouseEnter={() => setHoverPossibleCTA(true)}
                onMouseLeave={() => setHoverPossibleCTA(false)}
              >
                <Image
                  className="relative"
                  alt=""
                  src={plusWhite}
                  width={17}
                  height={14}
                />
              </span>
            ) : (
              <span
                className={styles.trashcan}
                onMouseEnter={() => setHoverPossibleCTA(true)}
                onMouseLeave={() => setHoverPossibleCTA(false)}
              >
                <Image
                  className="relative"
                  alt=""
                  src={plus}
                  width={17}
                  height={14}
                />
              </span>
            )}
            <h1 className={styles.title}>Possible CTA</h1>
          </button>
        )}
      </div>

      <div className={styles.generatePost}>
        <button type="button" className={styles.generatePostButton}>
          Generate Next Idea
        </button>
      </div>
    </>
  );
}

export default PostSection;
