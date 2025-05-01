import { useState, useEffect } from 'react';

interface AccessibilityProps {
  onFontSizeChange: (size: number) => void;
  onHighContrastToggle: (enabled: boolean) => void;
  onScreenReaderToggle: (enabled: boolean) => void;
}

export default function Accessibility({
  onFontSizeChange,
  onHighContrastToggle,
  onScreenReaderToggle,
}: AccessibilityProps) {
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);
  const [screenReader, setScreenReader] = useState(false);

  useEffect(() => {
    // Apply font size to root element
    document.documentElement.style.fontSize = `${fontSize}px`;
  }, [fontSize]);

  const handleFontSizeChange = (newSize: number) => {
    setFontSize(newSize);
    onFontSizeChange(newSize);
  };

  const handleHighContrastToggle = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    onHighContrastToggle(newValue);
    document.body.classList.toggle('high-contrast', newValue);
  };

  const handleScreenReaderToggle = () => {
    const newValue = !screenReader;
    setScreenReader(newValue);
    onScreenReaderToggle(newValue);
    document.body.setAttribute('aria-live', newValue ? 'polite' : 'off');
  };

  return (
    <div className="fixed bottom-4 right-4 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-semibold mb-4">Accessibility Options</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-2">Font Size</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => handleFontSizeChange(Math.max(12, fontSize - 2))}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
              aria-label="Decrease font size"
            >
              A-
            </button>
            <span className="w-12 text-center">{fontSize}px</span>
            <button
              onClick={() => handleFontSizeChange(Math.min(24, fontSize + 2))}
              className="p-2 bg-gray-200 dark:bg-gray-700 rounded"
              aria-label="Increase font size"
            >
              A+
            </button>
          </div>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={highContrast}
              onChange={handleHighContrastToggle}
              className="form-checkbox"
            />
            <span>High Contrast Mode</span>
          </label>
        </div>

        <div>
          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={screenReader}
              onChange={handleScreenReaderToggle}
              className="form-checkbox"
            />
            <span>Screen Reader Mode</span>
          </label>
        </div>

        <div>
          <button
            onClick={() => {
              // Reset all accessibility settings
              handleFontSizeChange(16);
              setHighContrast(false);
              setScreenReader(false);
              document.body.classList.remove('high-contrast');
              document.body.setAttribute('aria-live', 'off');
            }}
            className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Reset Settings
          </button>
        </div>
      </div>
    </div>
  );
} 