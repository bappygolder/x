import React, { useState } from 'react';
import Header from '../../header/page';
import { buttonText } from '../../../constants/content';
import styles from './styles.module.css';

function SocialAccounts() {
  const [clickedButtons, setClickedButtons] = useState(new Array(buttonText.length).fill(false));

  const handleButtonClick = (index) => {
    const newClickedButtons = [...clickedButtons];
    newClickedButtons[index] = !newClickedButtons[index];
    setClickedButtons(newClickedButtons);
  };

  return (
    <div className="font-poppins">
      <Header title="Almost done! What social accounts do you use?" subtitle="Select all that apply." />
      <section className="min-[390px]:mt-10">
        <div>
          {buttonText.map((button, index) => (
            <button
              type="button"
              key={button}
              className={`flex items-center justify-center w-full ${
                clickedButtons[index] ? 'bg-[#3579F6] text-white' : 'bg-black bg-opacity-[5%] text-black'
              } h-[54px] px-[10px] py-0 rounded-[999px] gap-[10px] mt-5 min-[390px]:mt-[18px]`}
              onClick={() => handleButtonClick(index)}
            >
              {button}
            </button>
          ))}
        </div>

        <button type="button" className={styles.button}>Continue</button>
      </section>
    </div>
  );
}

export default SocialAccounts;
