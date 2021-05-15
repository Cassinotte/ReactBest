import React from 'react';

import {ThemeContext, themes } from './contexto/theme-context';
import ThemeButton2 from './componente/themed-button'

// Um componente intermediario que usa componente ThemeButton
function Toolbar(props) {
  return (
    <ThemeButton2 onClick={props.changeTheme}>
      Change Theme
    </ThemeButton2>
  )
}

class App2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      theme: themes.light,
    };

    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark ?
          themes.light
          : themes.dark
      }));
    };

  }

  render() {

     // O ThemedButton button dentro de ThemeProvider
    // usa o tema do estado enquanto os demais usam
    // o tema padrão dark

    return(

      <div>
        
        <ThemeContext.Provider value={this.state.theme}>
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>

        <hr />

        <ThemeButton2>
          Change Theme 2
        </ThemeButton2>
        
      </div>

    )

  }


}

export default App2;

