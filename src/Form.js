import React from "react";
import TextField  from "material-ui/TextField";
import RaisedButton from "material-ui/RaisedButton";
export default class Form extends React.Component {
  state = {
    id: "",
    idError: "",
    firstName: "",
    firstNameError: "",
    lastName: "",
    lastNameError: "",
    address: "",
    addressError: "",
    age: "",
    ageError: "",
    departament: "",
    departamentError: "",
    sex: "",
    sexError: "",
    phone: "",
    phoneError: ""
  };

  change = e => {
    //this.props.onChange({ [e.target.name]: e.target.value });
    this.setState({
      [e.target.name]: e.target.value
    });
  };

validate = () =>{
  let isError = false;
  const errors ={
    idError: "",
    firstNameError: "",
    lastNameError: "",
    addressError: "",
    ageError: "",
    departamentError: "",
    sexError: "",
    phoneError: ""
  };

  if (this.state.firstName.length < 1) {
    isError = true;
    errors.usernameError = "firstName needs to be atleast 1 characters long";
  }

  this.setState({
    ...this.state,
    ...errors
  });
  return isError;
};


  onSubmit = e => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
    this.props.onSubmit(this.state);
    this.setState({
      id: "",
      idError: "",
      firstName: "",
      firstNameError: "",
      lastName: "",
      lastNameError: "",
      address: "",
      addressError: "",
      age: "",
      ageError: "",
      departament: "",
      departamentError: "",
      sex: "",
      sexError: "",
      phone: "",
      phoneError: ""
    });
    }
  };

  render() {
    return (
      <form>
      <TextField
        name="id"
        hintText="Cedula"
        floatingLabelText="Cedula"
        value={this.state.id}
        onChange={e => this.change(e)}
        errorText={this.state.idError}
          floatingLabelFixed
      />
      <br />
        <TextField
          name="firstName"
          hintText="Primer Nombre"
          floatingLabelText="Primer Nombre"
          value={this.state.firstName}
          onChange={e => this.change(e)}
          errorText={this.state.firstNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="lastName"
          hintText="Primer Apellido"
          floatingLabelText="Primer Apellido"
          value={this.state.lastName}
          onChange={e => this.change(e)}
          errorText={this.state.lastNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="address"
          hintText="Direccion"
          floatingLabelText="Direccion"
          value={this.state.address}
          onChange={e => this.change(e)}
          errorText={this.state.addressError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="age"
          hintText="Edad"
          floatingLabelText="Edad"
          value={this.state.age}
          onChange={e => this.change(e)}
          errorText={this.state.ageError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="departament"
          hintText="Departamento"
          floatingLabelText="Departamento"
          value={this.state.departament}
          onChange={e => this.change(e)}
          errorText={this.state.departamentError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="sex"
          hintText="sexo"
          floatingLabelText="sexo"
          value={this.state.sex}
          onChange={e => this.change(e)}
          errorText={this.state.sexError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="phone"
          hintText="telefono"
          floatingLabelText="telefono"
          value={this.state.phone}
          onChange={e => this.change(e)}
          errorText={this.state.phoneError}
          floatingLabelFixed
        />
        <br />
      <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}
