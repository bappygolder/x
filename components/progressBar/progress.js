import Image from "next/image";
import back from "../../public/icons/back.png";
function ProgressBar({ currentStep, totalSteps, handlePrevious }) {
     // Calculate the progress percentage
    const progress = (currentStep / totalSteps) * 100;
  
    return (
      // Render the progress bar
      <div className="w-full h-10 flex items-center gap-2 bg-white py-10">
        <Image src={back} alt="back" className="w-10 h-10" onClick={handlePrevious} />
      <div className="w-full h-2 flex gap-2 bg-white rounded-full">
        <div className="h-full bg-[#3579F6] rounded-full" style={{ width: `${progress}%` }}></div>
      </div>
      </div>
    );
  }

  
  export default ProgressBar;