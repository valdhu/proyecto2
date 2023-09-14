import React from 'react';
import './Clip.css';

export default class Clip extends React.Component {
    render() {
        return (
            <div className="row my-4 clip">
                <div className="col-12">
                    <div className="video-wrapper">
                        <h3>{this.props.nombre}</h3>
                        <p>{this.props.descripcion}</p>
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${this.props.youtubeId}`}
                            title={this.props.nombre}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            </div>
        );
    }
}
