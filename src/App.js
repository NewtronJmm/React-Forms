import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './Form';
import Table from './Table';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
//import MyAwesomeReactComponent from './MyAwesomeReactComponent';

var injectTapEventPlugin = require("react-tap-event-plugin");
injectTapEventPlugin();

class App extends Component {
  state = {
    data:[],
  };

  render() {
    return (
      <MuiThemeProvider>
      <div className="App">
        <Form onSubmit={submission => this.setState({
          data:[...this.state.data, submission]
        })} />
        <Table
        data={this.state.data}
        header={[
          {
            name:"id",
            prop:"id"
          },
          {
            name:"Primer Nombre",
            prop:"firstName"
          },
          {
            name:"Primer Apellido",
            prop:"lastName"
          },
          {
            name:"Direccion",
            prop:"address"
          },
          {
            name:"Edad",
            prop:"age"
          },
          {
            name:"Departamento",
            prop:"departament"
          },
          {
            name:"Sexo",
            prop:"sex"
          },
          {
            name:"Telefono",
            prop:"phone"
          },


        ]}
        />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
