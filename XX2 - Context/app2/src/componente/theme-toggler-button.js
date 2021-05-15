import React from 'react'
import { ThemeContext2 } from '../contexto/theme-context'

// The Theme Toggler Button receives not only the theme
// but also a toggleTheme function from the context
function ThemeTogglerButton() {
    // The Theme Toggler Button receives not only the theme
    // but also a toggleTheme function from the context
    return (
      <ThemeContext2.Consumer>
        {({theme, toggleTheme}) => (
          <button
            onClick={toggleTheme}
            style={{backgroundColor: theme.background}}>
            Toggle Theme
          </button>
        )}
      </ThemeContext2.Consumer>
    );
  }
  
  export default ThemeTogglerButton;
