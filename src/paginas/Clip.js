import React from 'react';
import './Clip.css';

export default class Clip extends React.Component {
    render() {
        return (
            <div className="row my-4">
                <div className="col-12 d-flex align-items-center">
                    <div className="video-wrapper">
                        <iframe
                            width="560"
                            height="315"
                            src={`https://www.youtube.com/embed/${this.props.youtubeId}`}
                            title={this.props.nombre}
                            frameBorder="0"
                            allowFullScreen
                        ></iframe>
                    </div>
                    <div className="px-3">
                        <h2>{this.props.nombre}</h2>
                        <p>{this.props.descripcion}</p>
                    </div>
                </div>
            </div>
        );
    }
}
