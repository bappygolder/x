/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { preferenceOptions } from '../../../constants/content';
import styles from './styles.module.css';
import Header from '../../header/page';

// eslint-disable-next-line react/prop-types
function Preferences({ handleNext }) {
  const [selectedItems, setSelectedItems] = useState([]);
  const currentStep = useSelector((state) => state.stepperSlicer.currentStep);
  const totalStep = useSelector((state) => state.stepperSlicer.totalSteps);
  const dispatch = useDispatch();
  const maxSelections = 5; // Maximum number of items the user can select

  const toggleSelection = (item) => {
    // Check if the item is already selected
    if (selectedItems.includes(item)) {
      // If selected, remove it from the selected list
      setSelectedItems(selectedItems.filter((selected) => selected !== item));
    } else if (selectedItems.length < maxSelections) {
      // If not selected and the maximum limit is not reached, add it to the selected list
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleNextClick = () => {
    if (currentStep < totalStep) {
      handleNext();

      // console.log(totalStep);
    }
  };

  const progress = (selectedItems.length / maxSelections) * 100;

  return (
    <div className={styles.container}>
      <Header
        title="Tell us about your preferences."
        subtitle="What is your social account about? Select any 5."
      />

      <section>
        <div className={styles.options}>
          {preferenceOptions.map((option, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className={`${
                selectedItems.includes(option)
                  ? 'bg-[#3579F6] text-white'
                  : 'bg-black bg-opacity-[5%] text-black'
              } py-3 px-6 min-w-[60px] rounded-[999px] cursor-pointer text-sm`}
              onClick={() => toggleSelection(option)}
            >
              {option}
            </div>
          ))}
        </div>
      </section>

      <button
        className="w-full h-[72px] rounded-full text-[#ffffff] text-[16px]] mt-6 mb-4"
        style={{
          background: `linear-gradient(90deg, #3579F6 ${progress}%, #DCECFF ${progress}%)`,
        }}
        disabled={selectedItems.length !== maxSelections}
        onClick={handleNextClick}
        type="button"
      >
        Continue
      </button>
    </div>
  );
}

export default Preferences;
