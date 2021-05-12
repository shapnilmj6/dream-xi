import React from 'react';
import './PlayerDetail.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCheck } from '@fortawesome/free-solid-svg-icons';

const PlayerDetail = (props) => {
    const { name, role, country, bid, img} = props.player;
    return (
        <div className="players">
            <img style={{ height: "220px" }} src={img} alt="" />

            <div className="details">
            <h5>{name}</h5>
            <p>Role: {role}</p>
            <p>Country: {country}</p>
            <p><small>Bid: ${bid}</small></p>
            <button onClick={()=> props.handleAddPlayer(props.player)} className="btn btn-danger"><FontAwesomeIcon icon={faUserCheck} /> Add Player</button>
            </div>

        </div>
    );
};

export default PlayerDetail;