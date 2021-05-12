import React from 'react';
import './AddedPlayer.css';

const AddPlayer = ({addedPlayer}) => {

    const totalBudget = addedPlayer.reduce((total, addedPlayer)=> total + addedPlayer.bid, 0)

    return (
        <div className="added-player">
            <div>
                <h5>Your Selection Details</h5>
            </div>
            <div className="m-5">
                {
                    addedPlayer.map(player => <li>{player.name}</li>)
                }
                <hr />
                <h6>Player Added: {addedPlayer.length}</h6>
                <h6>Total Budget: ${totalBudget}</h6>
            </div>
        </div>
    );
};

export default AddPlayer;