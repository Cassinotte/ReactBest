import React from 'react';

class Cat extends React.Component {
  render() {
    const mouse = this.props.mouse;
    return (
      <img src="/cat.jpg" style={{ position: 'absolute', left: mouse.x, top: mouse.y }} />
    );
  }
}

class Mouse extends React.Component {

  constructor(props) {

    super(props);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.state = {x: 0, y: 0 }

  }

  handleMouseMove(event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    })
  }

  render() {
    return (
      <div style={{ height: '100vh' }} onMouseMove={this.handleMouseMove}>

        {/*
          No lugar de fornecer uma representação estática do que <Mouse> deve
          renderizar, use a `render` prop para determinar o que renderizar
          dinamicamente.
        */}
        {this.props.render(this.state)}


        <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }


}

class App extends React.Component {

  render() {
    return (

      <div>
        <h1>Move the mouse around!</h1>
        <Mouse render={mouse => (
          <Cat mouse={mouse} />
        )}/>
      </div>
    );
  }
}


export default App;
