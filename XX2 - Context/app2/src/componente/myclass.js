import React from 'react'

class MyClass extends React.Component {

    componentDidMount() {
        let value = this.context;
         /* faz um side-effect na montagem utilizando o valor de MyContext */
    }

    componentDidUpdate() {
        let value = this.context;
        /* ... */
    }

    componentWillUnmount() {
        let value = this.context;
        /* ... */
    }

    render() {
        let value = this.context;
        /* renderiza algo com base no valor de MyContext */
    }


}

MyClass.contextType = MyContext;