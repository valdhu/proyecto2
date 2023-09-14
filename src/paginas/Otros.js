import React, { Component } from 'react';
import './Otros.css';

class Otros extends Component {
    constructor() {
        super();
        this.state = {
            juegos: [],
            loading: true,
            nextGameListUrl: null,
        };

        this.apiKey = "b87bf54f8d3145daaf1ba5840f1aa186";
        this.url = `https://api.rawg.io/api/games?key=${this.apiKey}&dates=2022-01-01,2022-12-31&ordering=-added`;
    }

    componentDidMount() {
        this.loadGames(this.url);
    }

    getPlatformStr(platforms) {
        const platformStr = platforms.map((pl) => pl.platform.name).join(", ");
        if (platformStr.length > 30) {
            return platformStr.substring(0, 30) + "...";
        }
        return platformStr;
    }

    loadGames(url) {
        this.setState({ loading: true });

        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                const games = data.results;
                this.setState({
                    juegos: [...this.state.juegos, ...games],
                    nextGameListUrl: data.next ? data.next : null,
                    loading: false,
                });
            })
            .catch((error) => {
                console.log("An error occurred:", error);
            });
    }

    render() {
        return (
            <div className="Otros">
                <div className="gameList">
                    {this.state.juegos.map((game) => (
                        <div className="col-lg-3 col-md-6 col-sm-12" key={game.id}>
                            <div className="item">
                                <img src={game.background_image} alt={`${game.name} image`} />
                                <h4 className="game-name">
                                    {game.name}
                                    <br />
                                    <span className="platforms">{this.getPlatformStr(game.parent_platforms)}</span>
                                </h4>
                                <ul>
                                    <li>
                                        <i className="fa fa-star"></i> <span className="rating">{game.rating}</span>
                                    </li>
                                    <li>
                                        <i className="fa-regular fa-calendar"></i> <span className="date">{game.released}</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    className={`main-button ${this.state.loading || !this.state.nextGameListUrl ? 'hidden' : ''}`}
                    onClick={() => this.loadGames(this.state.nextGameListUrl)}
                >
                    Cargar más juegos
                </button>
                <div id="js-preloader" className={`preloader ${this.state.loading ? '' : 'loaded'}`}></div>
            </div>
        );
    }
}

export default Otros;
