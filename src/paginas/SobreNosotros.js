import React, { Component } from 'react';
import './SobreNosotros.css';

class SobreNosotros extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrar: false
        };

        this.cambiarMostrar = this.cambiarMostrar.bind(this);
    }

    cambiarMostrar() {
        var mostrarActual = this.state.mostrar;
        this.setState({
            mostrar: !mostrarActual
        });
    }

    render() {
        var texto = this.state.mostrar ? "Mostrar menos" : "Mostrar más";

        return (
            <div className="sobre-nosotros">
                <div className="contenido">
                    <img src={"img/" + this.props.imagen} alt="imagen" className="imagen" />
                    <div className="texto">
                        <div className="titulo">{this.props.titulo}</div>
                        <div className={"descripcion " + (this.state.mostrar ? "visible" : "oculto")}>{this.props.descripcion}</div>
                    </div>
                </div>
                <button className="btn btn-primary" onClick={this.cambiarMostrar}>{texto}</button>
                <a href={this.props.link} target="_blank" className={"btn btn-" + this.props.boton}></a>
            </div>
        );
    }
}

export default class App extends Component {
    render() {
        return (
            <div>
                <SobreNosotros titulo="¿Quienes somos?" descripcion="Somos un equipo de eSports de Ushuaia, Tierra del Fuego. Todos nuestros miembros son Fueguinos, y seguimos en búsqueda para agrandar nuestras filas en las distintas disciplinas." imagen="a.png" />
                <SobreNosotros titulo="¿Cuál es nuestro objetivo?" descripcion="Nuestro objetivo es hacer crecer los eSports en Tierra del Fuego y competir al nivel más alto en cada juego, y también, hacer crecer la escena de la creación de contenido con nuestros creadores." imagen="c.png" />
                <SobreNosotros titulo="¿Qué disciplinas tienen?" descripcion="Counter-Strike: Global Offensive, Valorant, League Of Legends, Fortnite, Rocket League, FIFA, Rainbow Six Siege y algunos más. ¡En la sección Contacto puedes postularte!" imagen="b.png" />
            </div>
        );
    }
}
