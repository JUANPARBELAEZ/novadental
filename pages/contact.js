import React, { Component } from 'react';
import { Card, Button, Icon, Message, Input, Form } from 'semantic-ui-react';
import Layout from '../components/Layout';


class ContactPage extends Component {

  state= {
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  };

  onSubmit = event => {
    event.preventDefault();

    console.log(
      this.state.nombre,
      this.state.email,
      this.state.telefono,
      this.state.mensaje);
  }

  render () {
    return(
    <Layout>
      <h3>Contactate!</h3>
      <Form onSubmit ={this.onSubmit}>
        <Form.Field>
          <label>Nombre</label>
          <Input
            value={this.state.nombre}
            onChange={event => this.setState({ nombre: event.target.value })}/>
        </Form.Field>

        <Form.Field>
          <label>Email</label>
          <Input
            value={this.state.email}
            onChange={event => this.setState({ email: event.target.value })}/>
        </Form.Field>

        <Form.Field>
          <label>Telefono</label>
          <Input
            value={this.state.telefono}
            onChange={event => this.setState({ telefono: event.target.value })}/>
        </Form.Field>

        <Form.Field>
          <label>Mensaje</label>
          <Input
            value={this.state.mensaje}
            onChange={event => this.setState({ mensaje: event.target.value })}/>
        </Form.Field>

        <Button primary> Enviar!</Button>

      </Form>
    </Layout>
    );
  };
}


export default ContactPage;
