/* eslint-disable react/prop-types */
import React from 'react';
import Image from 'next/image';
import back from '../../public/icons/back.png';
// eslint-disable-next-line react/prop-types
function ProgressBar({
  currentStep, totalSteps, handlePrevious, handleMultiPrevious,
}) {
  // Calculate the progress percentage
  const progress = (currentStep / totalSteps) * 100;

  // Conditionally choose the appropriate handler based on currentStep
  const handleClick = () => {
    if (currentStep === 4) {
      handleMultiPrevious(); // Use handlePrevious if currentStep is 4
    } else {
      handlePrevious(); // Use handleMultiPrevious for other cases
    }
  };
  return (
    // Render the progress bar
    <div className="w-full h-10 flex items-center gap-2 bg-white py-10">
      <Image
        src={back}
        alt="back"
        className="w-10 h-10"
        onClick={handleClick}
      />
      <div className="w-full h-2 flex gap-2 bg-white rounded-full">
        <div className="h-full bg-[#3579F6] rounded-full" style={{ width: `${progress}%` }} />
      </div>
    </div>
  );
}

export default ProgressBar;
