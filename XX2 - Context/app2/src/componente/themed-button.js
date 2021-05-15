import React from 'react'
import {ThemeContext} from '../contexto/theme-context';


class ThemedButton2 extends React.Component {

    render() {

        let props = this.props;
        let theme = this.context;

        return (
            <button
                {...props} 
                style={{backgroundColor: theme.background}}
            />
        )


    }
}

ThemedButton2.contextType = ThemeContext;

export default ThemedButton2;