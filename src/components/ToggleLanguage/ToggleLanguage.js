import React, {useState} from "react";
import emoji from "react-easy-emoji";
import "./ToggleLanguage.scss";

const ToggleLanguage = () => {
  const [isChecked, setChecked] = useState(false);

  const handleToggleLanguage = () => {
    // Toggle language mode
    setChecked(prevChecked => !prevChecked);
    // Change the language of the website
    console.log(`Switched to ${isChecked ? "English" : "Spanish"}`);
  };

  return (
    <label className="switch" onClick={() => handleToggleLanguage()}>
      <input type="checkbox" checked={isChecked} readOnly />
      <span className="slider round">
        <span className="emoji">{isChecked ? emoji("🇺🇸") : emoji("🇲🇽")}</span>
      </span>
    </label>
  );
};

export default ToggleLanguage;
