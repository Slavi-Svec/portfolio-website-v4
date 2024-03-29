import React from "react";
import "./styles.css";

const DarkMode = () => {
  let clickedClass = "clicked";
  const body = document.body;
  const lightMode = "light";
  const darkMode = "dark";
  let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightMode || theme === darkMode) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightMode);
  }

  const switchTheme = (e) => {
    if (theme === darkMode) {
      body.classList.replace(darkMode, lightMode);
      e.target.classList.remove(clickedClass);
      localStorage.setItem("theme", "light");
      theme = lightMode;
    } else {
      body.classList.replace(lightMode, darkMode);
      e.target.classList.add(clickedClass);
      localStorage.setItem("theme", "dark");
      theme = darkMode;
    }
  };

  return (
    <button
      className={theme === "dark" ? clickedClass : ""}
      id="darkMode"
      onClick={(e) => switchTheme(e)}
    ></button>
  );
};

export default DarkMode;
