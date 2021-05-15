import React from 'react';

// Theme context, default to light theme
const ThemeContext = React.createContext('light');

// Signed-in user context
const UserContext = React.createContext({
  name: 'Guest',
});

class App4 extends React.Component {
  render() {
    
    //const {signedInUser, theme} = this.props;

    // Componente App fornece os valores inicias do context
    return (
      <ThemeContext.Provider value='light'>
        <UserContext.Provider value='Eduardo'>
          <Layout />
        </UserContext.Provider>
      </ThemeContext.Provider>
    );
  }
}

function Layout() {
  return (
      <Content />
  );
}

function Content() {
    return (
        <ThemeContext.Consumer>
        {theme => (
          <UserContext.Consumer>
            {user => (
              <ProfilePage user={user} theme={theme} />
            )}
          </UserContext.Consumer>
        )}
      </ThemeContext.Consumer>
    );
}

class ProfilePage extends React.Component {

    constructor(props) {
        super();

        console.log(props);
    }

    render() {

        let props = this.props;

        return (
            <div>
            <p>Valores</p>
            <p>{props.user}</p>
            <p>{props.theme}</p>
            </div>
        )


    }
}

export default App4;




