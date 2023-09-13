import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default class Menu extends React.Component {

    render() {
        return(
            <div className="row bg-light fixed-top py-2 px-4">
                <div className="col-12 d-flex align-items-center ">
                    <h1> SSU </h1>
                    <Link to="/" className="mx-3"> Inicio </Link>
                    <Link to="/nosotros" className="mx-3"> Sobre Nosotros </Link>
                    <Link to="/jugadores" className="mx-3"> Jugadores </Link>
                    <Link to="/contacto" className="mx-3"> Contacto </Link>
                    <Link to="/otros" className="mx-3"> ¿Quieres conocer otros juegos? </Link>
                </div>
             </div>
        )
    }
}