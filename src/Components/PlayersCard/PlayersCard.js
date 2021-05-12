import React, { useState } from 'react';
import fakeData from '../../fakeData/data.json';
import AddPlayer from '../AddedPlayer/AddedPlayer';
import PlayerDetail from '../PlayerDetail/PlayerDetail';
import './PlayerCard.css';

const PlayersCard = () => {
    const players = fakeData;
    const [addedPlayer, setAddedPlayer] = useState([]);

    const handleAddPlayer = (player) => {
        const newAddedPlayer = [...addedPlayer, player];
        setAddedPlayer(newAddedPlayer);
    }

    return (
        <div className="player-card">
            <div className="player-container">
                {
                    players.map(player => <PlayerDetail handleAddPlayer={handleAddPlayer} player={player} key={player.id}></PlayerDetail>)
                }
            </div>
            <div className="selected-player">
                <AddPlayer addedPlayer={addedPlayer}></AddPlayer>
            </div>
        </div>
    );
};

export default PlayersCard;