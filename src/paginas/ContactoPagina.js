import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import './ContactoPagina.css';

class ContactoPagina extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      nombre: "",
      email: "",
      mensaje: "",
    };

    this.submitted = this.submitted.bind(this);
    this.changed = this.changed.bind(this);
  }

  submitted(event) {
    alert("Se envió el formulario de " + this.state.nombre);
    event.preventDefault();
  }

  changed(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  render() {
    return (
      <div className="container-fluid contact-form">
        <div className="row">
          <div className="col-12 col-sm-6">
            <h2>
              <i className="bi bi-chat-square-text-fill"></i> Contacto
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <form onSubmit={this.submitted}>
              <div className="form-group my-2">
                <label>Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  name="nombre"
                  value={this.state.nombre}
                  onChange={this.changed}
                  placeholder="Ingrese su nombre"
                />
              </div>
              <div className="form-group my-2">
                <label>Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  value={this.state.email}
                  onChange={this.changed}
                  placeholder="Email"
                />
              </div>
              <div className="form-group my-2">
                <label>Mensaje</label>
                <textarea
                  className="form-control"
                  name="mensaje"
                  value={this.state.mensaje}
                  onChange={this.changed}
                  placeholder="Ingresa tus preguntas o cualquier intención de contacto que tengas"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-danger mt-2">
                Enviar
              </button>
            </form>
          </div>
          <div className="col-12 col-sm-6">
            <p className="font-weight-bold">Datos de contacto</p>
            <p>
              <i className="bi bi-envelope-at"></i> ssu_ush@hotmail.com
            </p>
            <p>
              <i className="bi bi-instagram"></i>
              <a href="https://www.instagram.com/ssu_ush" target="_blank">
                Instagram
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}  

export default ContactoPagina;
