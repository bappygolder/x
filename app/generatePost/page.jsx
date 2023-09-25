/* eslint-disable react/react-in-jsx-scope */

'use client';

import { useState } from 'react';
import Image from 'next/image';
import PostSection from '../../components/postSection/PostSection';
import logo from '../../public/logo/logo.png';
import postLogo from '../../public/logo/post-logo.png';
import styles from './styles.module.css';

function GeneratePost() {
  // Create a state for the create post button and the postpilot logo
  const [createPost, setCreatePost] = useState(false);
  const [logoState, setLogoState] = useState(false);

  // Create a function for the handleClick that triggers the state change
  const handleClick = () => {
    setLogoState(!logoState);
  };
  const handleCreatePost = () => {
    setTimeout(() => {
      setCreatePost(true);
    }, 300);
  };
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className={styles.container}>
      <div className={styles.logo}>
        {/* Add logo image with also onClick handler to be able to fire the handleClick function */}
        {/* Show the logo if createPost is false and
        the extended pilot logo when createPost is true */}
        {logoState ? (
          <div className="flex flex-col justify-center items-center">
            <Image
              className=""
              alt="test"
              src={postLogo}
              width={141}
              height={51}
              onClick={handleClick}
            />
            <p className="text-sm font-normal text-black w-full mt-[2px]">
              your daily post partner
            </p>
          </div>
        ) : (
          <Image
            className="absolute"
            alt="test"
            src={logo}
            width={50}
            height={50}
            onClick={handleClick}
          />
        )}
      </div>
      <section className={styles.generate}>
        <div className={styles.title}>
          click to generate your first post idea
        </div>

        {!createPost && (
          <div className={styles.buttonContainer}>
            <button type="button" className={styles.button} onClick={handleCreatePost}>
              Generate Post Idea
            </button>
          </div>
        )}
      </section>

      {/* Show the PostSection only if the createPost state is true */}
      <section className={styles.postSection}>
        {createPost && <PostSection />}
      </section>

      {/* The footer section */}

      <div className={styles.footer}>
        <span>Designed with ❤️ by </span>
        <span className={styles.footerText}>Post Pilot</span>
      </div>
    </div>
  );
}

export default GeneratePost;
