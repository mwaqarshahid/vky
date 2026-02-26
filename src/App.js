import React, { useState, useEffect } from "react";
import Theme from "./components/Theme";
import ThemePicker from "./pages/ThemePicker";
import Header from "./pages/Header";
import Container from "./pages/Container";
import Footer from "./pages/Footer";
import BackToTop from "./components/BackToTop";
import { PERSONAL } from "./shared/contants";
import "./App.css";

function App() {
  const [openTheme, setOpenTheme] = useState(false);
  const [themeColor, setThemeColor] = useState(
    localStorage.getItem(PERSONAL.THEME_KEY) || "dark"
  );

  useEffect(() => {
    document
      .getElementsByTagName("HTML")[0]
      .setAttribute("data-theme", themeColor);
    localStorage.setItem("theme", themeColor);
  }, [themeColor]);

  const setTheme = (theme) => {
    localStorage.setItem(PERSONAL.THEME_KEY, theme);
    setThemeColor(theme);
  };

  return (
    <div
        className={`layout ${openTheme ? "layout--theme-open" : ""}`}
        role="document"
      >
      <Theme selectedColor={themeColor}>
        <ThemePicker
          openTheme={openTheme}
          setOpenTheme={setOpenTheme}
          themeColor={themeColor}
          setThemeColor={setTheme}
        />
        <Header openTheme={openTheme} setOpenTheme={setOpenTheme} />
        <Container />
        <Footer />
        <BackToTop />
      </Theme>
    </div>
  );
}

export default App;
