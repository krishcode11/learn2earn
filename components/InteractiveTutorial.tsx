import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface TutorialStep {
  id: string;
  title: string;
  content: string;
  target: string;
  position: 'top' | 'bottom' | 'left' | 'right';
}

interface InteractiveTutorialProps {
  steps: TutorialStep[];
  onComplete: () => void;
}

export default function InteractiveTutorial({ steps, onComplete }: InteractiveTutorialProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Highlight the target element for the current step
    const targetElement = document.querySelector(steps[currentStep].target);
    if (targetElement) {
      targetElement.classList.add('tutorial-highlight');
    }

    return () => {
      if (targetElement) {
        targetElement.classList.remove('tutorial-highlight');
      }
    };
  }, [currentStep, steps]);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setIsVisible(false);
      onComplete();
    }
  };

  const handleSkip = () => {
    setIsVisible(false);
    onComplete();
  };

  if (!isVisible) return null;

  const currentStepData = steps[currentStep];
  const progress = ((currentStep + 1) / steps.length) * 100;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          className="fixed p-4 bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md"
          style={{
            top: currentStepData.position === 'bottom' ? 'auto' : '20%',
            bottom: currentStepData.position === 'top' ? 'auto' : '20%',
            left: currentStepData.position === 'right' ? 'auto' : '50%',
            right: currentStepData.position === 'left' ? 'auto' : '50%',
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{currentStepData.title}</h3>
              <button
                onClick={handleSkip}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Skip
              </button>
            </div>
            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div
                className="bg-blue-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          <p className="text-gray-600 dark:text-gray-300 mb-6">{currentStepData.content}</p>

          <div className="flex justify-between">
            <button
              onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
              disabled={currentStep === 0}
              className="px-4 py-2 text-gray-600 dark:text-gray-300 disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 