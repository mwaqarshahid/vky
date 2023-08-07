import React from 'react';
import themes from "../data/themes.json";

const Theme = ({ selectedColor, children }) => {
  const selectedTheme = themes.find(theme => theme.id === selectedColor);
  const themeStyle = {
    '--color-bg': selectedTheme.colors.background,
    '--color-bg-offset': selectedTheme.colors.backgroundOffset,
    '--color-text': selectedTheme.colors.text,
    '--color-text-offset': selectedTheme.colors.textOffset,
    '--color-border': selectedTheme.colors.border,
    '--color-primary': selectedTheme.colors.primary,
    '--color-primary-offset': selectedTheme.colors.primaryOffset,
    '--color-secondary': selectedTheme.colors.secondary,
  };

  return (
    <div className="theme" style={themeStyle}>
      {children}
    </div>
  );
};

export default Theme;
