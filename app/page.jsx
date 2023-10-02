'use client';

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { handleNext, handlePrevious } from '../store/Slicers/onboardingStepperSlicer/stepperSlicer';
import Accounts from '../components/onboardingSteps/createAccount/page';
import ProgressBar from '../components/progressBar/progress';
import styles from './styles.module.css';
import Homescreen from '../components/onboardingSteps/homescreen/page';
import Preferences from '../components/onboardingSteps/preferences/page';
import SocialAccounts from '../components/onboardingSteps/socialAccounts/page';
import XLogin from '../components/onboardingSteps/x-login/page';
// import UserPreference from './userPreference/page';

function Home() {
  // const totalSteps = 6;
  const currentStep = useSelector((state) => state.stepperSlicer.currentStep);
  const totalStep = useSelector((state) => state.stepperSlicer.totalSteps);
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    // Initialize other form fields here
  });

  const handleNextClick = () => {
    if (currentStep < totalStep) {
      dispatch(handleNext());

      // console.log(currentStep)
    }
  };
  const handlePreviousClick = () => {
    if (currentStep > 1) {
      dispatch(handlePrevious());
    }
  };

  // This is to jump the X(twitter) login for users who chose X(twitter) login registeration option
  const handleMultiNextClick = () => {
    if (currentStep < totalStep) {
      dispatch(handleNext(4));
    }
  };

  // Opposite of HandleMultiNextClick
  const handleMultiPreviousClick = () => {
    if (currentStep > 1) {
      dispatch(handlePrevious(2));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit formData to your server or perform other actions
  };

  return (
    <div className={styles.container}>
      {currentStep <= 1 && <Homescreen handleNext={handleNextClick} />}
      {/* Render Step 1 */}
      {currentStep > 1 && (
        <ProgressBar
          currentStep={currentStep}
          totalSteps={totalStep}
          handlePrevious={handlePreviousClick}
          handleMultiPrevious={handleMultiPreviousClick}
        />
      )}
      <form onSubmit={handleSubmit}>
        {currentStep === 2 && (
          <Accounts
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNextClick}
            handleMultiNext={handleMultiNextClick}
          />
        )}

        {currentStep === 3 && (
          <XLogin
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNextClick}
          />
        )}

        {currentStep === 4 && (
        <Preferences
          formData={formData}
          handleChange={handleChange}
          handleNext={handleNextClick}
        />
        )}

        {currentStep === 5 && (
          <SocialAccounts
            formData={formData}
            handleChange={handleChange}
            handleNext={handleNextClick}
          />
        )}
      </form>
    </div>
  );
}

export default Home;
