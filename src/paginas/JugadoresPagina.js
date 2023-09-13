import React from 'react';
import './JugadoresPagina.css';

class JugadoresPagina extends React.Component {
  render() {
    return (
      <section id="container" style={{ marginTop: '100px' }}>
        <div className="player-card bb">
          <div className="player-info">
            <h2>VodKhaN</h2>
            <p><strong>Juego:</strong> Valorant (Ex Fortnite)</p>
            <p><strong>Ciudad de Nacimiento:</strong> Ushuaia</p>
            <p><strong>Compite:</strong> Sí - Inmortal 3</p>
            <p><strong>Link de Twitch:</strong> <a href="https://www.twitch.tv/vodkhan" target="_blank" rel="noopener noreferrer">Click aquí</a></p>
            <p><strong>Hace cuanto ingresó al equipo:</strong> Fundador</p>
          </div>
          <div className="player-image">
            <img src="../img/jugadores/vodkhan.png" alt="VodKhaN" />
          </div>
        </div>

        <div className="player-card">
          <div className="player-info">
            <h2>n1ten</h2>
            <p><strong>Juego:</strong> Valorant</p>
            <p><strong>Ciudad de Nacimiento:</strong> Rio Grande</p>
            <p><strong>Compite:</strong> Sí - Radiante</p>
            <p><strong>Link de Twitch:</strong> <a href="https://www.twitch.tv/n1tenn" target="_blank" rel="noopener noreferrer">Click aquí</a></p>
            <p><strong>Hace cuanto ingresó al equipo:</strong> 1 año</p>
          </div>
          <div className="player-image">
            <img src="../img/jugadores/niten.png" alt="VodKhaN" />
          </div>
        </div>

        <div className="player-card">
          <div className="player-info">
            <h2>Xalenv</h2>
            <p><strong>Juego:</strong> Fortnite</p>
            <p><strong>Ciudad de Nacimiento:</strong> Ushuaia</p>
            <p><strong>Compite:</strong> Sí - Diamante</p>
            <p><strong>Link de Twitch:</strong> <a href="https://www.twitch.tv/xalenv" target="_blank" rel="noopener noreferrer">Click aquí</a></p>
            <p><strong>Hace cuanto ingresó al equipo:</strong> 2 años</p>
          </div>
          <div className="player-image">
            <img src="../img/jugadores/xalenv.png" alt="VodKhaN" />
          </div>
        </div>

        <div className="player-card">
          <div className="player-info">
            <h2>Reckless</h2>
            <p><strong>Juego:</strong> Streamer</p>
            <p><strong>Ciudad de Nacimiento:</strong> Ushuaia</p>
            <p><strong>Compite:</strong> No</p>
            <p><strong>Link de Twitch:</strong> <a href="https://www.twitch.tv/rockletss_" target="_blank" rel="noopener noreferrer">Click aquí</a></p>
            <p><strong>Hace cuanto ingresó al equipo:</strong> 2 años</p>
          </div>
          <div className="player-image">
            <img src="../img/jugadores/reckless.png" alt="VodKhaN" />
          </div>
        </div>

        <div className="player-card">
          <div className="player-info">
            <h2>NeichS</h2>
            <p><strong>Juego:</strong> Rocket League</p>
            <p><strong>Ciudad de Nacimiento:</strong> Ushuaia</p>
            <p><strong>Compite:</strong> Sí</p>
            <p><strong>Link de Twitch:</strong> <a href="https://www.twitch.tv/neichs" target="_blank" rel="noopener noreferrer">Click aquí</a></p>
            <p><strong>Hace cuanto ingresó al equipo:</strong> 3 años</p>
          </div>
          <div className="player-image">
            <img src="../img/jugadores/neichs.png" alt="VodKhaN" />
          </div>
        </div>

        <h2 className="algunos" style={{ textAlign: 'center' }}>¡Estos son solo algunos de nuestros jugadores, nuestra organización sobrepasa los 40 miembros!</h2>
      </section>
    );
  }
}

export default JugadoresPagina;
