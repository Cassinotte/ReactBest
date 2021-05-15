import {ThemeContext2, themes} from './contexto/theme-context';
import ThemeTogglerButton from './componente/theme-toggler-button';

import React from 'react'


class App3 extends React.Component {


    constructor(props) {

        super(props);

        this.toggleTheme = () => {
            this.setState(state => ({
                theme:
                    state.theme === themes.dark
                    ? themes.light
                    : themes.dark
            }));
        };

        // Estado também contem a função de atualizacao
        // Passando para o provedor de contexto
        this.state = {
            theme: themes.light,
            toggleTheme: this.toggleTheme,
        }
    }

    render() {
        // Todo o estado é passado para o provedor
        return (
            <ThemeContext2.Provider value = {this.state} >
                <Content />
            </ThemeContext2.Provider>
        )
    }


}

function Content() {
    return(
        <div>
            <ThemeTogglerButton />
        </div>
    )
}

export default App3;