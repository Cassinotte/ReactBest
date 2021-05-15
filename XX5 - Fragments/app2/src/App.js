import React from 'react';




// Error Boundary
class App extends React.Component {

  render() {

    const items = [
      {id: 1, term: 'Termo', description: "Termo de Conduta" },
      {id: 2, term: 'Termo 2', description: "Termo de Conduta 2" }
    ];

    console.log(items);

    return (

     <React.Fragment>
       <Table />
       <Glossary items={items} />
     </React.Fragment>

    );


  }
}

class Table extends React.Component {

  render() {

    return (
      <table>
        <tbody>
          <tr>
            <Columns />
          </tr>
        </tbody>
      </table>
    )


  }

}

class Columns extends React.Component {

  render() {
    return (
      <React.Fragment>
        <td>Hello</td>
        <td>World</td>
      </React.Fragment>
    )
  }


}

function Glossary(props) {
  return (
    <dl>
      {props.items.map(item => (
        // Sem a `key`, React irá disparar um aviso
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}


export default App;
