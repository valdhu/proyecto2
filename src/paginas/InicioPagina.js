import React from 'react';
import Clip from './Clip';

export default class InicioPagina extends React.Component {
    render() {
        return (
            <>
                <h1> Inicio </h1>
                <h4>Bienvenidx a la página de SSU hecha solo en React!. Recuerda que esto es un prototipo y el único fin es cumplir una consigna.-</h4>

                <p>Aqui puedes ver clips de algunos de nuestros muchos jugadores</p>
                <Clip
                    nombre="VodKhaN"
                    youtubeId="9CZDElXeWCM"
                    descripcion="Fortnite"
                />

                <Clip
                    nombre="Xalenv"
                    youtubeId="OYmxTho2Ugk"
                    descripcion="Fortnite"
                />

                <Clip
                    nombre="Tanno"
                    youtubeId="eEY_tOP_QE4"
                    descripcion="Fortnite"
                />
            </>
        );
    }
}
