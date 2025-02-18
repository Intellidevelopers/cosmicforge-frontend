import React from 'react';

interface ProgressBarProps {
  completedSteps: number;
  totalSteps: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ completedSteps, totalSteps }) => {
  return (
    <div className="flex space-x-2">
      {Array.from({ length: totalSteps }, (_, index) => (
        <div
          key={index}
          className={`h-2.5 flex-1 rounded-full ${index < completedSteps ? 'bg-blue-600' : 'bg-gray-200'}`}
        ></div>
      ))}
    </div>
  );
};

export default ProgressBar;