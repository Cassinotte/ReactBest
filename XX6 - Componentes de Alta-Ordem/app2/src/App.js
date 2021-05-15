import React from 'react';

function DataSource()  {
   
   let getComments = () => ["Eduardo", "Maria"];
   
   let getBlogPost = (id) => "Eduardo";

    // return values
    return {
        getComments,
        getBlogPost
    };
}

// A função recebe um componente...
function withSubscription(WrappedComponent, selectData) {
  // .. e retorna outro componente
  return class extends React.Component {

    constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);

      this.state = {
        data: selectData(DataSource, props)
      };

    }

    componentDidMount() {
      //... que lida com a subscrição
      //DataSource.addChangeListener(this.handleChange);
    }

    componentWillUnmount() {
      //DataSource.removeChangeListener(this.handleChange);
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      });
    }

    render() {
      //... e renderiza o componente encapsulado com os dados novos!
      // Note que nós passamos diretamente qualquer prop adicional
      return <WrappedComponent data={this.state.data} {...this.props} />
    }


  }
}

class CommentList extends React.Component {

  render() {
    return (
      <div>
        {this.props.data.map((comment) => (
          <Comment comment={comment} key={comment} />
        ))}
      </div>
    );
  }

}

function Comment(props) {
  return (
    <div>
      <p>{props.comment}</p>
    </div>
  );
}

class BlogPost extends React.Component {

  render() {
    return <TextBlock text={this.props.data} />;
  }


}

function TextBlock(props) {
  return (
    <div>
      <p>{props.text}</p>
    </div>
  );
}


const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource().getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource().getBlogPost(props.id)
);

// Error Boundary
class App extends React.Component {

  render() {
    return (

    <div>
      <CommentListWithSubscription  />
      <BlogPostWithSubscription />
    </div>
    );
  }
}


export default App;
