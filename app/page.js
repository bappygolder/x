"use client";
import React, { useState } from 'react';
import Accounts from '../components/onboardingSteps/createAccount/page';
import Preferences from '../components/onboardingSteps/preferences/page';
import SocialAccounts from '../components/onboardingSteps/socialAccounts/page';
import ProgressBar from '../components/progressBar/progress';
import styles from "./styles.module.css";
import Homescreen from '../components/onboardingSteps/homescreen/page';

function Home() {
  const totalSteps = 6;
  const [step, setStep] = useState(1); // Set the initial step to 1
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    // Initialize other form fields here
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handlePrevious = () => {
    setStep(step - 1);
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
      {step === 1 && <Homescreen handleNext={handleNext} />} {/* Render Step 1 */}
      {step > 1 && <ProgressBar currentStep={step} totalSteps={totalSteps} handlePrevious={handlePrevious} />}
      <form onSubmit={handleSubmit}>
        {step === 2 && <Accounts formData={formData} handleChange={handleChange} handleNext={handleNext} />}
        {step === 3 && <Preferences formData={formData} handleChange={handleChange} handleNext={handleNext} />}
        {step === 4 && <SocialAccounts formData={formData} handleChange={handleChange} handleNext={handleNext} />}
      </form>
    </div>
  );
}

export default Home;
