import * as gamesAPI from '../../api/game-api.js';
import { useEffect, useState } from 'react';
import GameListItem from './gameListItem/GameListItem.jsx';

export default function GameList() {

    const [games, setGames] = useState([]); 

    useEffect(() => {
        gamesAPI.getAll()
            .then(result => setGames(result));
    }, []);

    return (
        <section id="catalog-page">
            <h1>All Games</h1>

            {games.map(game => <GameListItem key={game._id} {...game} />)}
            
            <h3 className="no-articles">No articles yet</h3>
        </section>
    );
}